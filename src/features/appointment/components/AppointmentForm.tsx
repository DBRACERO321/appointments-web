import React, { useState } from "react";
import useForm from "../../../hooks/forms/useForms";
import { AppointmentFormProps } from "./interfaces/appointment-form-props.interface";
import { createAppointmentService } from "../../../api/appoiment/create-appointment.service";
import { Appointment } from "../interfaces/appointment.interface";
import ErrorMessageForm from "../../../components/messages/ErrorMessageForm";
import { updateAppointmentService } from "../../../api/appoiment/update-appointment.service";

const AppointmentForm: React.FC<AppointmentFormProps> = ({ setModalOpen,loadAppointments,cita }) => {
  const { values, handleChange,resetForm } = useForm<Appointment>({ ...cita });
  const [error,setError]=useState<string>('');

  const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if(cita.id){
        handleUpdateAppointment(values);
    }else{
        handleCreateAppointment(values);
    }
  };

  const handleCreateAppointment=async(appoiment:Appointment)=>{
    try {
        await createAppointmentService(appoiment);
        resetForm();
        loadAppointments();
        setModalOpen(false);
        alert('La cita fué creada');
        
      } catch (error) {
        if (error instanceof Error) {
            setError(error.message); 
        } else {
            setError('Error al crear la cita');
        }
      }
  }

  const handleUpdateAppointment=async(appoiment:Appointment)=>{
    try {
       if(appoiment.id){
        await updateAppointmentService(appoiment);
        resetForm();
        loadAppointments();
        setModalOpen(false);
        alert('La cita fué actualizada');
       }else{
        
       alert('La cita no se pudo seleccionar');
       }
      } catch (error) {
        if (error instanceof Error) {
            setError(error.message); 
        } else {
            setError('Error al actualizar la cita');
        }
      }
  }
  return (
    <form className="p-4 md:p-5">
        {error&&(<ErrorMessageForm error={error} />)}
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label
            htmlFor="clientFirstName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombres
          </label>
          <input
            type="text"
            name="clientFirstName"
            id="clientFirstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Escriba los nombres"
            onChange={handleChange}
            value={values.clientFirstName as string}
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="clientLastName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Apellidos
          </label>
          <input
            type="text"
            name="clientLastName"
            id="clientLastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Escriba los apellidos"
            onChange={handleChange}
            value={values.clientLastName as string}
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Fecha
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Escriba los apellidos"
            onChange={handleChange}
            value={values.date as string}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label
            htmlFor="startTime"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            H.Inicio
          </label>
          <input
            type="time"
            name="startTime"
            id="startTime"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Escriba los apellidos"
            onChange={handleChange}
            value={values.startTime as string}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label
            htmlFor="endTime"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            H.Salida
          </label>
          <input
            type="time"
            name="endTime"
            id="endTime"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Escriba los apellidos"
            onChange={handleChange}
            value={values.endTime as string}
          />
        </div>
      </div>
      <div className="flex justify-end">
      <button
        onClick={(e) => handleSubmit(e)}
        type="submit"
        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="me-1 -ms-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        Guardar
      </button>
      </div>
    </form>
  );
};

export default AppointmentForm;
