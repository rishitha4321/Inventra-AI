#  Inventra AI — AI-Powered Inventory Demand Forecasting System

##  Project Overview

Inventra AI is a full-stack web application that uses Machine Learning to predict product demand based on historical sales data. The system helps businesses make data-driven inventory decisions by forecasting expected sales and providing demand-related insights.

##  Objectives

- Forecast product demand using historical sales data.
- Build an interactive interface for demand prediction and analytics.
- Integrate a trained Machine Learning model with a web application through a REST API.
- Support inventory planning through demand insights and recommendations.

##  Tech Stack

**Frontend**
- React
- JavaScript
- React Router
- HTML and CSS

**Backend**
- Python
- Flask
- Flask-CORS
- REST API
- JSON

**Machine Learning**
- Pandas
- Scikit-learn
- Random Forest Regression
- Joblib

##  Features

- **User Authentication Interface:** Registration and login functionality for the application prototype.
- **Interactive Dashboard:** Displays key metrics, forecast charts and the latest prediction.
- **AI Demand Prediction:** Estimates product demand using store, item and date-related inputs.
- **Analytics:** Visualizes sales, revenue and inventory-related information.
- **AI-Based Insights:** Categorizes predicted demand into low, medium and high levels using predefined thresholds and provides recommendations.
- **Reports:** Displays forecast details and supports browser-based printing.
- **Profile and Settings:** Provides profile information and user preference controls.

##  Machine Learning Workflow

1. **Data Collection:** Obtained the Store Item Demand Forecasting dataset from Kaggle.
2. **Data Preprocessing:** Used Pandas to load and inspect historical sales data.
3. **Feature Engineering:** Extracted year, month, day and day-of-week features from the date.
4. **Model Training:** Trained a Random Forest Regressor using store ID, item ID and date-related features to predict sales.
5. **Model Persistence:** Saved the trained model using Joblib.
6. **API Integration:** Integrated the trained model with a Flask REST API.
7. **Prediction:** Returned the forecast to the React frontend as a JSON response.

##  Dataset

**Dataset:** Store Item Demand Forecasting Challenge  
**Source:** [Kaggle Dataset](https://www.kaggle.com/competitions/demand-forecasting-kernels-only/data)

The training data contains these original columns:

| Column | Description |
|---|---|
| `date` | Date of the sales record |
| `store` | Store identifier |
| `item` | Product identifier |
| `sales` | Number of units sold |

The dataset used during model development contained approximately 913,000 rows.

##  System Architecture

The application follows a frontend–backend architecture:

1. The user enters store, item and forecast-date details in React.
2. React sends the input to the Flask backend through a POST request.
3. Flask prepares the input features and invokes the saved Random Forest model.
4. The model generates a numerical demand prediction.
5. Flask returns the result in JSON format.
6. React displays the prediction and related demand insights.

##  Model Evaluation

The model evaluation results recorded during development were:

- **Mean Absolute Error (MAE):** 6.28
- **R² Score:** 0.9191

These values describe the reported evaluation results; performance on future dates should be validated using an appropriate held-out, time-based test set.

##  Getting Started

### Prerequisites

- Python
- Node.js and npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/Inventra-AI.git
cd Inventra-AI
```

Replace `YOUR-USERNAME` with your GitHub username.

### 2. Set up the Python backend

Open a terminal in the backend folder:

```bash
cd Smart_Inventory_System
python -m venv venv
```

Activate the environment on Windows:

```powershell
.\venv\Scripts\Activate.ps1
```

Install the required packages:

```bash
pip install flask flask-cors pandas scikit-learn joblib
```

If a `requirements.txt` file is available, use `pip install -r requirements.txt` instead.

Ensure the trained model exists at `models/demand_model.pkl` before starting the backend.

Start the Flask server:

```bash
python api.py
```

The backend should run at `http://127.0.0.1:5000`.

### 3. Set up the React frontend

Open a second terminal:

```bash
cd inventra-ai
npm install
npm run dev
```

Open the local URL printed by Vite, typically `http://localhost:5173`.

##  Software Development Life Cycle (SDLC)

The project applies SDLC principles through:

- Requirements analysis and problem identification.
- System architecture and interface design.
- Frontend, backend and machine learning development.
- API integration and debugging.
- Functional testing and iterative improvement.

## Future Enhancements

- Secure server-side authentication and role-based access.
- Database integration for persistent inventory and prediction history.
- Time-based model validation and comparison with alternative forecasting models.
- Additional forecasting features, such as lagged sales and rolling averages.
- Deployment to a cloud platform.
- Automated testing and improved error handling.

##  Project Information

**Project Name:** Inventra AI — AI-Powered Inventory Demand Forecasting System  
**Project Type:** University Product-Based Project  
**Technologies:** React, JavaScript, Python, Flask, Pandas, Scikit-learn, REST API and Joblib

---

*Built to explore the application of machine learning and full-stack software engineering to inventory demand forecasting.*
