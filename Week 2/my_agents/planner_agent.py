def planner_agent(state):
    print("🧠 Planner running...")
    print("Task:", state["task_description"])

    steps = [
        "Define a function named sort_list",
        "Use sorted() to sort the list",
        "Return the sorted list"
    ]

    print("📋 Steps:", steps)

    return {"steps": steps}
