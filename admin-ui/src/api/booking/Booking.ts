import { User } from "../user/User";

export type Booking = {
  createdAt: Date;
  id: string;
  tItle: string;
  updatedAt: Date;
  user?: User | null;
};
