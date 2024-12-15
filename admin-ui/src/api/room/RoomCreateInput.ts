import { BookingCreateNestedManyWithoutRoomsInput } from "./BookingCreateNestedManyWithoutRoomsInput";
import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoomCreateInput = {
  bookings?: BookingCreateNestedManyWithoutRoomsInput;
  building?: BuildingWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
