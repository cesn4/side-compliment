import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
  tItle?: StringFilter;
  user?: UserWhereUniqueInput;
};
