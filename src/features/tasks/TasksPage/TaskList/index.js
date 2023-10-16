import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { selectHideDone, toggleTaskDone, removeTask, selectTasksByQuery } from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
    
    return (
        <List>
            {tasks.map(task => (
                <Item
                    hidden={hideDone && task.done}
                    key={task.id}>
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        toggleDone>
                        {task.done ? " 🗸 " : ""}
                    </Button>
                    <Content
                        done={task.done}>
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <Button
                        onClick={() => dispatch(removeTask(task.id))}
                        remove>🗑
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;