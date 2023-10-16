import React from "react";
import { StyledButtons, Button } from "../../Button";
import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../tasksSlice";

const ButtonGettingExampleTasks = () => {
    const loading = useSelector(selectIsLoading);

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading}>
                {
                    loading
                        ? "Ładowanie..."
                        : "Pobierz przykładowe zadania"
                }
            </Button>
        </StyledButtons>
    )
};

export default ButtonGettingExampleTasks;