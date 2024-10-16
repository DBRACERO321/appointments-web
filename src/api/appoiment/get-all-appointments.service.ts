import axiosAPI from "../axios-config";

export const getAllAppointmentsService = async () => {
  try {
    const response = await axiosAPI.get('/appointments');
    return response.data;
  } catch (error) {
    console.error('Error al obtener las citas:', error);
    throw error;
  }
};
