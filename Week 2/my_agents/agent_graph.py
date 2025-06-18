from langgraph.graph import StateGraph, END, START
from .planner_agent import planner_agent
from .developer_agent import developer_agent
from typing import List, Optional, TypedDict

# ✅ Define state at the top (not imported)
class OverallState(TypedDict):
    task_description: str
    steps: List[str]
    code_state: str

def build_agent_graph():
    builder = StateGraph(OverallState)

    builder.add_node("planner", planner_agent)
    builder.add_node("developer", developer_agent)

    builder.set_entry_point("planner")
    builder.add_edge("planner", "developer")
    builder.add_edge("developer", END)

    return builder.compile()
