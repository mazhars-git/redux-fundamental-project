import { Button } from "@/components/ui/button";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}

export default function UserCard({ user }: IProps) {
  return (
    <div>
      <div className="border px-5 py-3 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <h1>{user.name}</h1>
          </div>
          <div className="flex gap-3 items-center">
            <Button>
              <Trash2 />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
