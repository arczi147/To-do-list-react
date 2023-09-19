import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="list__newTask">
        {tasks.map(task => (
            <li
                className={`list__item ${hideDone && task.done
                    ? "list__item--hidden"
                    : ""}`}
                key={task.id}>
                <button className="list__buttonTask list__buttonTask--done">
                    {task.done ? " 🗸 " : ""}
                </button>
                <span className={`list__newTask ${task.done
                    ? "list__newTask--done"
                    : ""}`}>
                    {task.content}
                </span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="list__removingButton">🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;