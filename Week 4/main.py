from my_agents.agent_graph import build_agent_graph, OverallState

graph = build_agent_graph()

initial_state: OverallState = {
    "task_description": "Build a todo app using Flask and SQLite.",
    "steps": [],
    "planner_index": 0,
    "developer_index": 0,
    "code_state": "",
    "logs": []
}

final_state = graph.invoke(initial_state)

print("\n✅ Final Logs:")
for log in final_state["logs"]:
    print(log)

print("\n🧾 Final Code State:\n", final_state["code_state"])
