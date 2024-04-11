import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  tItle?: StringFilter;
  user?: UserWhereUniqueInput;
};
