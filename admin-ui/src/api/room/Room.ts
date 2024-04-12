import { Booking } from "../booking/Booking";
import { Building } from "../building/Building";
import { User } from "../user/User";

export type Room = {
  bookings?: Array<Booking>;
  building?: Building | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
