import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  tItle?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
