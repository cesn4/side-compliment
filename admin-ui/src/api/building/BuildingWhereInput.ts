import { StringFilter } from "../../util/StringFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type BuildingWhereInput = {
  address?: StringFilter;
  id?: StringFilter;
  rooms?: RoomListRelationFilter;
  title?: StringFilter;
};
