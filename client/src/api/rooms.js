import axiosSecure from ".";

//fetch all rooms from db
export const getAllRooms = async () => {
  const { data } = await axiosSecure.get("/rooms");
  return data;
};

// fetch single room from db
export const getRoom = async (id) => {
  const { data } = await axiosSecure.get(`/room/${id}`);
  return data;
};

// Save a room data in db
export const addRoom = async (roomData) => {
  const { data } = await axiosSecure.post(`/rooms`, roomData);
  return data;
};
