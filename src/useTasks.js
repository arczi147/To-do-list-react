import { useState, useEffect } from "react";

const useTasks = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    });
};

export { useTasks };