import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  room?: RoomWhereUniqueInput | null;
  tItle?: string;
  user?: UserWhereUniqueInput | null;
};
