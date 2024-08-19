import { Routes, Route, } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { NoteProvider } from "./context/notes/NoteContext";
import { AlertProvider } from "./context/AlertContext";
import AddNote from "./components/AddNote";
import PageNotFound from "./components/PageNotFound";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Login from "./components/Login";
import Register from "./components/Register";
import './styles/app.css';

import 'animate.css';

import { useEffect } from "react";

import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      AOS.init();
    });
  }, []);


  return (
    <>
      <NoteProvider>
        <AlertProvider>
          <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
          <script src="bower_components/aos/dist/aos.js"></script>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/new" index element={<AddNote />} />
            <Route path="/about" index element={<About />} />
            <Route path="/register" index element={<Register />} />
            <Route path="/login" index element={<Login />} />
            <Route path="/users/password/new" index element={<ForgotPassword />} />
            <Route path="/users/password/edit/:resetToken" index element={< ResetPassword />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AlertProvider>
      </NoteProvider>
    </>
  );
}
 
export default App;
