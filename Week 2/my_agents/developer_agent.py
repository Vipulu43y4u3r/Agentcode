def developer_agent(state):
    print("\n👨‍💻 Developer running...")
    steps = state["steps"]

    # Simulate writing code based on steps
    code_lines = [
        "def sort_list(nums):",
        "    return sorted(nums)"
    ]

    code = "\n".join(code_lines)
    print("Generated Code:\n", code)
    return {**state, "code_state": code}
