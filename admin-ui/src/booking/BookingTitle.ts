import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "tItle";

export const BookingTitle = (record: TBooking): string => {
  return record.tItle?.toString() || String(record.id);
};
