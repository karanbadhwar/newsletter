import { createContext, useContext, useState } from "react";

const formContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ContextAPI = ({ children }) => {
  const [isSuccess, setIsSuccess] = useState(null);
  const [email, setEmail] = useState("");

  const emailSubmit = (email) => {
    setEmail(email);
    setIsSuccess(true);
  };
  return (
    <formContext.Provider
      value={{ isSuccess, setIsSuccess, email, setEmail, emailSubmit }}
    >
      {children}
    </formContext.Provider>
  );
};

// Custom hook
export const useFormContext = () => {
  return useContext(formContext);
};
