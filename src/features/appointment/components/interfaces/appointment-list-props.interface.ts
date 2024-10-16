import { Appointment } from "../../interfaces/appointment.interface";

export interface AppointmentListProps {
  appointmentsList: Appointment[];
  loadAppointments: () => void;
  setAppointmentData: React.Dispatch<React.SetStateAction<Appointment>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
