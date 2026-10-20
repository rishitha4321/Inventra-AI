import streamlit as st

from components.sidebar import sidebar

st.set_page_config(
    page_title="Inventra AI",
    layout="wide",
    page_icon="🤖"
)

with open("assets/style.css") as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

page = sidebar()

st.title(page)

if page == "🏠 Dashboard":
    st.success("Dashboard")

elif page == "📦 Predict":
    st.success("Prediction Page")

elif page == "📊 Analytics":
    st.success("Analytics")

elif page == "🤖 AI Copilot":
    st.success("AI Copilot")

elif page == "📄 Reports":
    st.success("Reports")

elif page == "👤 Profile":
    st.success("Profile")

elif page == "⚙ Settings":
    st.success("Settings")

elif page == "🚪 Logout":
    st.warning("Logged Out")

