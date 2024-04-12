import { BookingUpdateManyWithoutUsersInput } from "./BookingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { RoomUpdateManyWithoutUsersInput } from "./RoomUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bookings?: BookingUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  rooms?: RoomUpdateManyWithoutUsersInput;
  username?: string;
};
