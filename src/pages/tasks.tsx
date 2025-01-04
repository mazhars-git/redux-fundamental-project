import { AddTaskModel } from "@/components/module/tasks/AddTaskModel";

export default function Tasks() {
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <AddTaskModel />
      </div>
      {/* <div className="space-y-5 mt-5">
        {Tasks.map((task) => (
          <></>
        ))}
      </div> */}
    </div>
  );
}
