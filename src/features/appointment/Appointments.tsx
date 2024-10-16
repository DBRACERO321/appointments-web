import React, { useEffect, useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { Appointment } from "./interfaces/appointment.interface";
import { getAllAppointmentsService } from "../../api/appoiment/get-all-appointments.service";
import ErrorMessageForm from "../../components/messages/ErrorMessageForm";
import AppointmentList from "./components/AppointmentList";
import DefaultModal from "../../components/modals/DefaultModal";
import AppointmentForm from "./components/AppointmentForm";

const Appointments = () => {
  const [appointmentList, setAppointmentList] = useState<Appointment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [appointmentData, setAppointmentData] = useState<Appointment>(
    {
      clientFirstName: '',
      clientLastName: '',
      date: '',
      startTime: '',
      endTime: ''
    }
  );

  const handleAddAppointment = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAppointmentData( {
      clientFirstName: '',
      clientLastName: '',
      date: '',
      startTime: '',
      endTime: ''
    })
    setModalOpen(true);
  };

  const loadAppointments = async () => {
    try {
      const appointments = await getAllAppointmentsService();
      setAppointmentList(appointments);
    } catch (error) {
      setError("Error al cargar las citas");
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div className="w-full h-full text-gray-800 p-1">
      <DefaultModal
        title={appointmentData.id?'Actualizar cita':'Crear cita'}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <AppointmentForm loadAppointments={loadAppointments} cita={appointmentData} setModalOpen={setModalOpen}/>
      </DefaultModal>
      <h4 className="text-2xl font-bold">Citas</h4>

      <div className="w-full flex justify-between mb-2">
        <span></span>
        <PrimaryButton
          label="Agregar"
          onClick={(e) => handleAddAppointment(e)}
          className="bg-blue-500 text-white rounded cursor-pointer px-2 py-1 
                    hover:bg-blue-600 transition"
        />
      </div>
      {error && <ErrorMessageForm error={error} />}

      <AppointmentList loadAppointments={loadAppointments} appointmentsList={appointmentList} 
      setAppointmentData={setAppointmentData} setModalOpen={setModalOpen} />
    </div>
  );
};

export default Appointments;
