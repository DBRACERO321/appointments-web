import React, { useState } from "react";
import { AppointmentListProps } from "./interfaces/appointment-list-props.interface";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { Appointment } from "../interfaces/appointment.interface";
import ConfirmationModal from "../../../components/modals/ConfirmationModal";
import { deleteAppointmentService } from "../../../api/appoiment/delete-appointment.service";
import ErrorMessageForm from "../../../components/messages/ErrorMessageForm";

const AppointmentList: React.FC<AppointmentListProps> = ({
  loadAppointments,
  appointmentsList,
  setAppointmentData,
  setModalOpen,
}) => {
  const [error, setError] = useState<string>("");
  const [isModalConfirmOpen, setModalConfirmOpen] = useState<boolean>(false);
  const [appointmentToDelete, setAppointmentToDelete] =
    useState<Appointment | null>(null);

  const handlePrevConfirmDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    appoiment: Appointment
  ) => {
    e.preventDefault();
    setAppointmentToDelete(appoiment);
    setModalConfirmOpen(true);
  };

  const handleCancelConfirmDelete = () => {
    setAppointmentToDelete(null);
    setModalConfirmOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (appointmentToDelete?.id) {
      try {
        await deleteAppointmentService(appointmentToDelete.id);
        loadAppointments();
        alert("Se eliminó la cita");
      } catch (error) {
        setError("Error al eliminar las cita");
      }
    }
  };

  const handleEdit = (
    e: React.MouseEvent<HTMLButtonElement>,
    appoiment: Appointment
  ) => {
    e.preventDefault();
    setAppointmentData(appoiment);
    setModalOpen(true);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded">
      <ConfirmationModal
        textConfirmation={"Está seguro de eliminar la cita?"}
        isOpen={isModalConfirmOpen}
        onClose={handleCancelConfirmDelete}
        onConfirm={handleConfirmDelete}
      />
      {error && <ErrorMessageForm error={error} />}

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b dark:border-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              Cliente
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3">
              H.Inicio
            </th>
            <th scope="col" className="px-6 py-3">
              H.Fin
            </th>
            <th scope="col" className="px-6 py-3">
              Accion
            </th>
          </tr>
        </thead>
        <tbody>
          {appointmentsList.length > 0 ? (
            appointmentsList.map((appointment, index) => (
              <tr
                key={`row-appointment-list-${index}`}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {appointment.clientFirstName} {appointment.clientLastName}
                </td>
                <td className="px-6 py-2">{appointment.date}</td>
                <td className="px-6 py-2">{appointment.startTime}</td>
                <td className="px-6 py-2">{appointment.endTime}</td>
                <td className="px-6 py-2">
                  <div className="flex justify-evenly">
                    <PrimaryButton
                      label="Editar"
                      onClick={(e) => handleEdit(e, appointment)}
                      className="bg-blue-500 text-white rounded cursor-pointer px-2 py-1 
                    hover:bg-blue-600 transition"
                    />
                    <PrimaryButton
                      label="Eliminar"
                      onClick={(e) => handlePrevConfirmDelete(e, appointment)}
                      className="bg-red-500 text-white rounded cursor-pointer px-2 py-1 
                    hover:bg-red-600 transition"
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td
                colSpan={5}
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                No hay citas disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
