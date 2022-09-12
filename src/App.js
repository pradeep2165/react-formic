import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import EnrollmentForm from "./components/EnrollmentForm";
// import FormikContainer from "./components/FormikContainer";
// import LoginForm from "./components/LoginForm";
// import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <FormikContainer /> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}
        <EnrollmentForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
