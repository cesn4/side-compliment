import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoomWhereInput = {
  bookings?: BookingListRelationFilter;
  building?: BuildingWhereUniqueInput;
  id?: StringFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
