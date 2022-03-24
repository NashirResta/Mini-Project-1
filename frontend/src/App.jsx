import "./App.css";

import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import TodoList from "./pages/TodoList/TodoList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";
import Hour from "./components/Hour";

const App = () => {
  return (
    <div>
      <Hour />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addtodo" element={<TodoList />} />
      </Routes>
    </div>
  );
};

export default App;
