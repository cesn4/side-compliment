import { Room } from "../room/Room";
import { User } from "../user/User";

export type Booking = {
  createdAt: Date;
  id: string;
  room?: Room | null;
  tItle: string;
  updatedAt: Date;
  user?: User | null;
};
