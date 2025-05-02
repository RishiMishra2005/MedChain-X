import os
from flask import Flask, render_template, request, send_file
from predict import predict_sample
from report import get_pdf
from database import init_db, insert_user_data
from hash_intit import generate_random_hash  # Added

app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Initialize database
init_db()

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/predict", methods=["GET", "POST"])
def predict():
    if request.method == "POST":
        name = request.form.get("name")
        age = request.form.get("age")
        contact = request.form.get("contact")

        if not name or not age or not contact:
            return "Please fill in all the required fields"

        if "xray_image" not in request.files:
            return "No file part"

        file = request.files["xray_image"]
        if file.filename == "":
            return "No selected file"

        filepath = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(filepath)

        action = request.form.get("action")

        if action == "predict":
            result = predict_sample(filepath)
            if result is None:
                return "Prediction failed. Please check the image format and try again."
            prediction, confidence = result

            # Save to database
            insert_user_data(name, int(age), contact, file.filename, prediction, confidence)

            # Generate blockchain-style hash
            blockchain_hash = "0x" + generate_random_hash()[:40]

            return render_template(
                "result.html",
                name=name,
                age=age,
                contact=contact,
                prediction=prediction,
                confidence=confidence * 100,
                blockchain_hash=blockchain_hash
            )

        elif action == "report":
            report_path = get_pdf(name, age, "Male", contact, filepath)
            return send_file(report_path, as_attachment=True)

    return render_template("predict.html")

if __name__ == "__main__":
    app.run(debug=True)
