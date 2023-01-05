import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";

import { AddArea } from "./components/AddArea";
import { ListItem } from "./components/ListItem";
import { api } from "./firebaseConfig";

const App = () => {

  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    const checkList = async () => {
      await api.checkTasks(setList);
    }
    checkList();
  }, [list])

  const handleAddTask = async (taskName: string) => {
    let newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(newList)
    await api.addTask(list.length + 1, taskName);
  }

  const handleDoneTask = async (id: number, done: boolean) => {
    let newList = [...list];

    newList.forEach(item => {
      if (item.id === id) {
        item.done = done;
      }
    });

    setList(newList);

    await api.updateTask(id, done);
  }

  const handleDeleteTask = async (id: number) => {
    // let newList: Item[] = [...list];
    // newList.filter(item => item.id !== id);
    // setList(newList);
    await api.removeTask(id, setList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChecked={handleDoneTask} deleteTask={handleDeleteTask} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;