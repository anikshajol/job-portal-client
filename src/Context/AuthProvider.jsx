import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./Context";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    createUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
