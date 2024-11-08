import pandas as pd
from pomegranate import BayesianNetwork
import json

data_2022 = pd.read_csv("./data/vineyard_2022.csv")
data_2023 = pd.read_csv("./data/vineyard_2023.csv")

data = pd.concat([data_2022, data_2023], axis=0)

features = data[['temp', 'humidity', 'precip', 'solar_radiation']]
targets = data[['sugar_content', 'total_acidity', 'malic_acid']]

# Range of values for each feature


trainingData = pd.concat([features, targets], axis=1)

model = BayesianNetwork.from_samples(trainingData.values, algorithm='exact')
model.bake()

structure = model.structure
with open("model_structure.json", "w") as f:
    json.dump(structure, f)

model_json = model.to_json()
with open("model_parameters.json", "w") as f:
    json.dump(model_json, f)
