import streamlit as st

def sidebar():

    st.sidebar.markdown("""
    <style>
    .profile{
        text-align:center;
        padding:15px;
    }

    .profile img{
        width:90px;
        border-radius:50%;
    }

    .title{
        color:white;
        font-size:24px;
        font-weight:bold;
        text-align:center;
    }

    .subtitle{
        color:#9ca3af;
        text-align:center;
        font-size:14px;
        margin-bottom:20px;
    }
    </style>
    """, unsafe_allow_html=True)

    st.sidebar.markdown("""
    <div class='profile'>
        <div class='title'>🤖 INVENTRA AI</div>
        <div class='subtitle'>Inventory Intelligence</div>
    </div>
    """, unsafe_allow_html=True)

    page = st.sidebar.radio(
        "Navigation",
        [
            "🏠 Dashboard",
            "📦 Predict",
            "📊 Analytics",
            "🤖 AI Copilot",
            "📄 Reports",
            "👤 Profile",
            "⚙ Settings",
            "🚪 Logout"
        ]
    )

    return page