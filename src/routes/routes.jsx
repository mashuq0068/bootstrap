import { createBrowserRouter } from "react-router-dom";
import Sidebar from "../components/sms/Sidebar";
import Login from "../components/sms/Login";
import SignUp from "../components/sms/SignUp";
import Card from "../components/sms/Card";
import App from "../App";
import TodoList from "../components/sms/todoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/card",
    element: <Card />,
  },
  {
    path: "/todo",
    element: <TodoList />,
  },
]);

export default router;
