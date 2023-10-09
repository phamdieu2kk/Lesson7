import { useState } from "react";
import "./Style.css";
import LogicTask from "./LogicTask";
export default function ToDoApp() {
  let [allTask, setAllTask] = useState([
    {
      id: "1",
      taskName: "ReactJS",
      status: true,
    },
    {
      id: "2",
      taskName: "Java Spring",
      status: false,
    },
    {
      id: "3",
      taskName: "AngularJS",
      status: true,
    },
  ]);
  let [newTask, setNewTask] = useState("");
  let changeTask = (taskCheck) => {
    //1 tim xem o vi tri nao
    let findIndex = allTask.findIndex((taskItem) => {
      return taskItem.id == taskCheck.target.name;
    });
    //2 tro den vi tri do va thay doi status
    if (findIndex != -1) {
      let newAllTask = [...allTask];
      newAllTask[findIndex].status = !taskCheck.target.checked;
      //3 set lai state de cap nhap lai giao dien
      setAllTask(newAllTask);
    }
  };

  let deleteTask = (id) => {
    //1 tim duoc vi tri phan tu muon xoa dua vao id
    let findIndex = allTask.findIndex((taskItem) => {
      return taskItem.id == id;
    });
    //xoa phan tu
    if (findIndex != -1) {
      let newAllTask = [...allTask];
      newAllTask.splice(findIndex, 1);
      //cap nhap lai state
      setAllTask(newAllTask);
    }
  };
  let handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  let addToCart = () => {
    if (newTask.trim() !== "") {
      // Kiểm tra xem công việc đã tồn tại trong danh sách chưa
      const isDuplicate = allTask.some(
        (task) => task.taskName.toLowerCase() === newTask.trim().toLowerCase()
      );

      if (!isDuplicate) {
        const newTaskItem = {
          id: Date.now().toString(),
          taskName: newTask,
          status: true,
        };
        setAllTask((prevTasks) => [...prevTasks, newTaskItem]);
        setNewTask(""); // Đặt lại giá trị của ô input
      } else {
        alert("Công việc này đã tồn tại trong danh sách!");
      }
    }
  };

  return (
    <div className="toDoApp">
      <div className="toDoAppContent">
        <h3>TO DO APP </h3>
        <input
          className="input"
          placeholder="Enter new task"
          type="text"
          value={newTask}
          onChange={handleInputChange}
        />
        <LogicTask
          data={allTask}
          changeTask={changeTask}
          deleteTask={deleteTask}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}
