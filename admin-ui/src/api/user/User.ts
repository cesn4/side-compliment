import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";
import { Room } from "../room/Room";

export type User = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  rooms?: Array<Room>;
  updatedAt: Date;
  username: string;
};
