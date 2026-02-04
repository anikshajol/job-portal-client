import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./Context";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser?.email) {
        const userData = { email: currentUser?.email };
        // fetch("http://localhost:5000/jwt", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(userData),
        //  credentials : included
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log("token", data);
        //     // localStorage.setItem("token", data.token);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });

        axios
          .post("http://localhost:5000/jwt", userData, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            // const token = res.data.token;
          })
          .catch((err) => console.log(err));
      }
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    loginWithGoogle,
    logOut,
    loginUser,
    user,
    loading,
    setLoading,
    createUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
