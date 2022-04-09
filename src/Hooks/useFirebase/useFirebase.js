import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "./firebase.init";
import { useHistory, useLocation } from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // Google Sign In
  const googleSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
          setIsLoading(false);
          history.push(redirect_uri);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  //Email Registration
  const registration = (email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        if (user) {
          history.push("/");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const login = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setUser(user);
        console.log(user);

        alert("Login Successfull");
        const destination = location?.state?.from || "/";
        history.push(destination);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const logout = () => {
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };
  return {
    user,
    googleSignIn,
    setUser,
    setName,
    registration,
    updateName,
    login,
    logout,
    isLoading,
    error,
  };
};

export default useFirebase;
