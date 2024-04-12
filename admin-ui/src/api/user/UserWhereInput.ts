import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type UserWhereInput = {
  bookings?: BookingListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  rooms?: RoomListRelationFilter;
  username?: StringFilter;
};
