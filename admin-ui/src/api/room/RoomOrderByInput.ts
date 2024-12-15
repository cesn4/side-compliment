import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  buildingId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
