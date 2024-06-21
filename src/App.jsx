import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import { loader as DetailsLoader } from "./pages/DetailsPage";
import { loader as SearchLoader } from "./pages/Searched";
import {loader as PopularLoader} from "./pages/PopularPage";
import { loader as UpcomingLoader } from "./pages/UpcomingPage";
import { ErrorPage, PopularPage, UpcomingPage, DetailsPage, Searched } from "./pages";


function App() {
  const router = createBrowserRouter([
    {
      path : "",
      element :  <Main />,
      errorElement : <ErrorPage />,
      children : [
        {
          index : true,
          element : <PopularPage />,
          loader : PopularLoader
        },
        {
          path : "/upcoming",
          element : <UpcomingPage />,
          loader : UpcomingLoader
        },
        {
          path : "/details/:id",
          element : <DetailsPage />,
          loader : DetailsLoader
        },
        {
          path : "/search/:title",
          element : <Searched />,
          loader : SearchLoader
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
