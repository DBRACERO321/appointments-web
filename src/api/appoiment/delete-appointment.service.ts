import axiosAPI from "../axios-config";

export const deleteAppointmentService = async (appointmentId:string) => {
  try {
    const response = await axiosAPI.delete(`/appointments/${appointmentId}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar la cita:', error);
    throw error;
  }
};
