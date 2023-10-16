import Form from "../TasksPage/Form";
import TaskList from "../TasksPage/TaskList";
import Buttons from "./ButtonsHide&SetAll";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
import ButtonGettingExampleTasks from "./ButtonGettingExampleTasks";

function TasksPage() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<ButtonGettingExampleTasks />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  )
};

export default TasksPage;