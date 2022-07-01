export enum ReservationStatus {
  PROCESSED = 'PROCESSED',
  CONFIRMED = 'CONFIRMED',
  BORROWED = 'BORROWED',
  RETURNED = 'RETURNED',
  PAST_DEADLINE = 'PAST DEADLINE',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED',
}

type Reservation = {
  borrower: string;
  books: string[];
  status: ReservationStatus;
  deadline: string;
  createdAt: string;
  comment: string;
  id: string;
};

export default Reservation;
