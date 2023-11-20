import { getRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
const useRole = () => {
  // const { user, loading } = useAuth();
  // const { data: role, isLoading } = useQuery({
  //   enabled: !loading && !!user?.email,
  //   queryFn: async () => await getRole(user?.email),
  //   queryKey: ["role"],
  // });

  // return [role, isLoading];

  const { user, loading } = useAuth();
  const [role, setRole] = useState(null);

  useEffect(() => {
    getRole(user?.email).then((data) => {
      setRole(data);
    });
  }, [user]);

  return [role];
};

export default useRole;
