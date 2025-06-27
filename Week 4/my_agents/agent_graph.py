# 📁 agent_code/agent_graph.py
from langgraph.graph import StateGraph, START, END
from typing import TypedDict, List
from .planner_agent import planner_agent
from .developer_agent import developer_agent

class OverallState(TypedDict):
    task_description: str
    steps: List[str]
    planner_index: int
    developer_index: int
    code_state: str
    logs: List[str]

def build_agent_graph():
    graph = StateGraph(OverallState)

    graph.add_node("planner", planner_agent)
    graph.add_node("developer", developer_agent)

    graph.set_entry_point("planner")
    graph.add_edge("planner", "developer")
    graph.add_edge("developer", "planner")  # Looping!

    def is_done(state: OverallState):
        return state["developer_index"] >= len(state["steps"])

    graph.add_conditional_edges(
        "planner",
        lambda state: "developer" if not is_done(state) else END
    )

    return graph.compile()
