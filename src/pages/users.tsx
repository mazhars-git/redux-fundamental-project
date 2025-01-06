import { AddUserModel } from "@/components/module/users/AddUserModel";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useSelector } from "react-redux";

export default function Users() {
  const users = useSelector(selectUsers);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5 pb-5">
        <h1 className="mr-auto">Users</h1>
        <AddUserModel />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
