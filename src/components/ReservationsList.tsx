import Reservation from '../utilities/types/reservation.type';
import ReservationItem from './ReservationsItem';

type ReservationsListProps = {
  reservations: Reservation[];
};

const ReservationsList = ({
  reservations,
}: ReservationsListProps): JSX.Element => {
  return (
    <>
      {reservations.map(reservation => (
        <ReservationItem details={reservation} key={reservation.id} />
      ))}
    </>
  );
};

export default ReservationsList;
