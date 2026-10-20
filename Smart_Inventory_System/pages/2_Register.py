import streamlit as st
import sqlite3
import hashlib

st.set_page_config(page_title="Register", page_icon="📝")

st.title("📝 Create Account")

fullname = st.text_input("Full Name")
username = st.text_input("Username")
email = st.text_input("Email")
password = st.text_input("Password", type="password")
confirm = st.text_input("Confirm Password", type="password")


def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()


if st.button("Register"):

    if password != confirm:
        st.error("Passwords do not match!")

    elif fullname == "" or username == "" or email == "" or password == "":
        st.warning("Please fill all fields.")

    else:

        conn = sqlite3.connect("users.db")
        cursor = conn.cursor()

        try:

            cursor.execute(
                """
                INSERT INTO users(fullname,username,email,password)
                VALUES(?,?,?,?)
                """,
                (
                    fullname,
                    username,
                    email,
                    hash_password(password)
                )
            )

            conn.commit()

            st.success("Registration Successful!")

        except sqlite3.IntegrityError:

            st.error("Username or Email already exists.")

        conn.close()