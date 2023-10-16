import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, Button } from "../../Button";
import { toggleHideDone, setAllDone, selectAreTaskEmpty, selectHideDone, selectIsEveryTaskDone } from "../../tasksSlice";

const Buttons = () => {
    const areTaskEmpty = useSelector(selectAreTaskEmpty);
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {!areTaskEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;