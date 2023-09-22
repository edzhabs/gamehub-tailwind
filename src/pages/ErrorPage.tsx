import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col h-screen dark:bg-dark-mode bg-slate-50">
      <NavBar />
      <div className="p-5 dark:text-white">
        <h1 className="text-5xl font-bold">OOPS..</h1>
        <p className="text-xl pt-2">
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured."}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
