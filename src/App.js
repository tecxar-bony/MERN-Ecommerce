import * as React from "react";
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SignupPage from "./Pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
]);

function App() {
  return (
    <div className="App">
      
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
