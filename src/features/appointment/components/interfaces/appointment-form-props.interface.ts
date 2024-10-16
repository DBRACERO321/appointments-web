import { Appointment } from "../../interfaces/appointment.interface";

export interface AppointmentFormProps {
  loadAppointments: () => void;
  cita: Appointment;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
