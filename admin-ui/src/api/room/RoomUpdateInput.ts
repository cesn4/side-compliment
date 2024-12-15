import { BookingUpdateManyWithoutRoomsInput } from "./BookingUpdateManyWithoutRoomsInput";
import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoomUpdateInput = {
  bookings?: BookingUpdateManyWithoutRoomsInput;
  building?: BuildingWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
