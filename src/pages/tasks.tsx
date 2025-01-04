import { AddTaskModel } from "@/components/module/tasks/AddTaskModel";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useSelector } from "react-redux";

export default function Tasks() {
  const tasks = useSelector(selectTasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <AddTaskModel />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
