import axios from "axios";
import { Appointment } from "../../features/appointment/interfaces/appointment.interface";
import axiosAPI from "../axios-config";

export const updateAppointmentService = async (appointment: Partial<Appointment>) => {
    try {
        const response = await axiosAPI.put(`/appointments/${appointment.id}`, appointment);
        return response.data;
      } catch (error) {

        if (axios.isAxiosError(error) && error.response) {
          const errorMessages = error.response.data.message;
          const concatenatedMessages = Array.isArray(errorMessages) 
            ? errorMessages.join(',\n ')
            : 'Error desconocido'; 
    
          throw new Error(concatenatedMessages); 
        }
    
        throw new Error('Error desconocido'); 
      }
};
