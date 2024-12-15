import { Room } from "../room/Room";

export type Building = {
  address: string;
  createdAt: Date;
  id: string;
  rooms?: Array<Room>;
  title: string;
  updatedAt: Date;
};
