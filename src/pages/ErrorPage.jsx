import { useNavigate, useRouteError } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Main from "../layout/Main";
import PopularPage from "./PopularPage";
import UpcomingPage from "./UpcomingPage";
import DetailsPage from "./DetailsPage";
import Searched from "./Searched";

const ErrorPage = () => {
  const error = useRouteError();
  const { status } = error;

  const navigate = useNavigate();
  const navigator = () => {
    navigate("/");
  };

  return (
    <>
      {!error ? (
        <>
          <Main error={error} />
        </>
      ) : (
        <div className="text-center mt-52 mx-auto w-96   h-auto">
          <h1 className="text-red-600 text-7xl font-bold">{status}</h1>
          <p className="text-2xl text-white font-extrabold mt-5">
            {error.data.message}
          </p>
          {status !== 401 ? (
            <button
              onClick={navigator}
              className=" bg-transparent border-4 outline-none border-red-600 rounded-md text-red-600 px-6 py-3 flex items-center justify-between ml-24 mt-5"
            >
              <ArrowLeftIcon className="w-7 h-7 mr-3" />
              <span>Go back home</span>
            </button>
          ) : ""}
        </div>
      )}
    </>
  );
};

export default ErrorPage;
