import sqlite3

def save_record(user_id, cid):
    conn = sqlite3.connect('db/medchain.db')
    cur = conn.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS records (user_id TEXT, cid TEXT)")
    cur.execute("INSERT INTO records (user_id, cid) VALUES (?, ?)", (user_id, cid))
    conn.commit()
    conn.close()
