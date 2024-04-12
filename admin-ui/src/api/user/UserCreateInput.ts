import { BookingCreateNestedManyWithoutUsersInput } from "./BookingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { RoomCreateNestedManyWithoutUsersInput } from "./RoomCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bookings?: BookingCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  rooms?: RoomCreateNestedManyWithoutUsersInput;
  username: string;
};
