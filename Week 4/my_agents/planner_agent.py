# 📁 agent_code/planner_agent.py

MAX_STEPS = 5  # Prevent infinite recursion

def search_internal(context):
    return f"[Internal search results for: {context}]"

def search_external(query):
    return f"[External info for: {query}]"

def planner_agent(state):
    print("🧠 Planner running...\n")

    index = state["planner_index"]
    task = state["task_description"]

    if index >= MAX_STEPS:
        print("✅ Planner stopping: max steps reached.\n")
        return {}

    # Simulated tool usage
    internal_info = search_internal(task)
    external_info = search_external(task)

    # Thought & action
    thought = f"Step {index+1}: Determine next atomic step using search results."
    step = f"Step {index+1}: Build handler for todo input (based on {internal_info} + {external_info})"

    # Update state
    state["steps"].append(step)
    state["planner_index"] += 1
    state["logs"].append(f"[Planner] Thought: {thought} | Step: {step}")

    return {
        "steps": state["steps"],
        "planner_index": state["planner_index"],
        "logs": state["logs"]
    }

# MAX_STEPS = 5

# def search_internal(context):
#     return f"[internal info about: {context}]"

# def search_external(query):
#     return f"[external search results for: {query}]"

# def planner_agent(state):
#     print("🧠 Planner running...\n")

#     task = state["task_description"]
#     index = state["planner_index"]
#     logs = state["logs"]

#     # Step-by-step planning
#     internal_info = search_internal(task)
#     external_info = search_external(task)

#     thought = f"Step {index}: Based on internal & external info, plan the next subtask."
#     step = f"Step {index+1}: Implement feature X (e.g., form handler for todo input)"

#     state["steps"].append(step)
#     state["planner_index"] += 1
#     state["logs"].append(f"[Planner] Thought: {thought} | Step: {step}")

#     return {
#         "steps": state["steps"],
#         "planner_index": state["planner_index"],
#         "logs": state["logs"]
#     }
