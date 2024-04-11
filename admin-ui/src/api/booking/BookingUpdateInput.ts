import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  tItle?: string;
  user?: UserWhereUniqueInput | null;
};
