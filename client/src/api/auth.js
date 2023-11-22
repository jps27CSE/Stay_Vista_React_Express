import axiosSecure from ".";

export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "guest",
    status: "Verified",
  };

  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};

export const getToken = async (email) => {
  const { data } = await axiosSecure.post(`/jwt`, email);
  console.log("token generated=>", data);
  return data;
};

export const clearCookie = async () => {
  const { data } = await axiosSecure.get(`/logout`);
  return data;
};

// Get user role
export const getRole = async (email) => {
  const { data } = await axiosSecure(`/user/${email}`);
  return data.role;
};

//get all users
export const getAllUsers = async () => {
  const { data } = await axiosSecure(`/users`);
  return data;
};
