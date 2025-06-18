from my_agents.agent_graph import build_agent_graph, OverallState

if __name__ == "__main__":
    graph = build_agent_graph()

    state = OverallState(
        task_description="Create a Python function that sorts a list of integers.",
        steps=[],
        code_state="",
    )

    final_state = graph.invoke(state)
    print("\n✅ Final Code State:\n", final_state["code_state"])
