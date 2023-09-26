import { Subsection, Button } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <Subsection>
            <Button onClick={toggleHideDone}
            hideDone>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setAllDone}
                done
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie</Button>
        </Subsection>
    )
);

export default Buttons;