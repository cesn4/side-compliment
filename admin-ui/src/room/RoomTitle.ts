import { Room as TRoom } from "../api/room/Room";

export const ROOM_TITLE_FIELD = "title";

export const RoomTitle = (record: TRoom): string => {
  return record.title?.toString() || String(record.id);
};
