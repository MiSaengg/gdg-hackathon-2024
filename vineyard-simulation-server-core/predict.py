import json
import pandas as pd
from pomegranate import BayesianNetwork

with open("model_parameters.json", "r") as f:
    model_json = json.load(f)

loaded_model = BayesianNetwork.from_json(model_json)

new_data = [[7.8, 27.9, 0.006, 220.1, None, None, None]] 

predicted = loaded_model.predict(new_data)
print(predicted)