import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  tItle: string;
  user?: UserWhereUniqueInput | null;
};
