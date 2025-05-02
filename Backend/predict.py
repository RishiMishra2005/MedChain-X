from keras.preprocessing.image import load_img, img_to_array  # type: ignore
import numpy as np
from keras.applications.vgg16 import preprocess_input  # type: ignore
from tensorflow.keras.models import load_model  # type: ignore

categories = ['Normal', 'Pneumonia']

# Model paths
model_paths = [
    "model_vgg16.h5",
    "model_resnet50.h5",
    "model_densenet121.h5"
]

def load_trained_model(model_path):
    try:
        return load_model(model_path)
    except Exception as e:
        print(f"Error loading model {model_path}: {e}")
        return None

def preprocess_image(image_path):
    img = load_img(image_path, target_size=(224, 224))
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return preprocess_input(img_array)

def predict_sample(image_path):
    img_array = preprocess_image(image_path)

    predictions = []
    confidences = {'Normal': [], 'Pneumonia': []}

    for path in model_paths:
        model = load_trained_model(path)
        if model is None:
            continue
        try:
            prediction = model.predict(img_array, verbose=0)
            predicted_class_idx = np.argmax(prediction)
            predicted_class = categories[predicted_class_idx]
            confidence = float(prediction[0][predicted_class_idx])
            predictions.append(predicted_class)
            confidences[predicted_class].append(confidence)
        except Exception as e:
            print(f"Prediction failed for {path}: {e}")

    if not predictions:
        return None

    # Majority voting
    final_prediction = max(set(predictions), key=predictions.count)

    # Average confidence of the final predicted class
    final_confidence = np.mean(confidences[final_prediction])

    return final_prediction, round(final_confidence, 2)
