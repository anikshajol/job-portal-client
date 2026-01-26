import React, { useContext } from "react";
import { AuthContext } from "../Context/Context";

const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};

export default useAuth;
