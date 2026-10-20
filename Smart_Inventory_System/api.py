from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load trained model
model = joblib.load("models/demand_model.pkl")


@app.route("/")
def home():
    return jsonify({
        "message": "Inventra AI Backend Running 🚀"
    })


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        store = int(data["store"])
        item = int(data["item"])
        year = int(data["year"])
        month = int(data["month"])
        day = int(data["day"])
        dayofweek = int(data["dayofweek"])

        features = pd.DataFrame([{
            "store": store,
            "item": item,
            "year": year,
            "month": month,
            "day": day,
            "dayofweek": dayofweek
        }])

        prediction = model.predict(features)[0]

        return jsonify({
            "success": True,
            "prediction": round(float(prediction), 2)
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 400


if __name__ == "__main__":
    app.run(debug=True)