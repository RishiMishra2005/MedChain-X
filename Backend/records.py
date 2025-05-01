import sqlite3

conn = sqlite3.connect("users.db")
c = conn.cursor()

c.execute("SELECT * FROM user_data")
rows = c.fetchall()

for row in rows:
    print(row)

conn.close()
