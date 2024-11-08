from pomegranate import BayesianNetwork, NormalDistribution, State

# Test creation of a simple Bayesian Network
model = BayesianNetwork("Test Model")
state = State(NormalDistribution(0, 1), name="test_state")
model.add_states(state)
model.bake()

print("Model created successfully.")