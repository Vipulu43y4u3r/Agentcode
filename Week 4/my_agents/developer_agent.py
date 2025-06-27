def internal_write(code: str, edit: str) -> str:
    return code + f"\n\n# Applied: {edit}"

def developer_agent(state):
    print("👨‍💻 Developer running...\n")

    step_idx = state["developer_index"]
    if step_idx >= len(state["steps"]):
        return {}

    step = state["steps"][step_idx]
    current_code = state["code_state"]
    logs = state["logs"]

    internal_result = f"searched {step} internally"
    external_result = f"scraped doc for {step}"

    thought = f"Step {step_idx+1}: Understanding the step. Use both sources."
    edit = f"def handle_todo():\n    pass  # Logic for {step}"

    updated_code = internal_write(current_code, edit)

    state["code_state"] = updated_code
    state["developer_index"] += 1
    state["logs"].append(f"[Developer] Thought: {thought} | Edit: {edit}")

    return {
        "code_state": updated_code,
        "developer_index": state["developer_index"],
        "logs": state["logs"]
    }
