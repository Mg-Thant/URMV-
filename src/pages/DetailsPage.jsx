import { Link, json, useLoaderData } from "react-router-dom";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import SimilarPage from "./SimilarPage";

const DetailsPage = () => {
  const data = useLoaderData();
  const {
    backdrop_path,
    title,
    poster_path,
    overview,
    runtime,
    genres,
    homepage,
    release_date,
  } = data;

  return (
    <div>
      <div className="w-full h-screen">
        <div className="h-2/3 upper">
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="details-container w-1/2 mx-auto p-4 flex items-center justify-center absolute z-40">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
            className="w-52 rounded-md"
          />
          <div className="ms-4 text-white">
            <h1 className="text-5xl font-semibold">{title}</h1>
            <p className="text-lg mb-3">Release Date: {release_date}</p>
            <p className="text-lg mb-3">Duration: {runtime} minutes</p>
            {genres &&
              genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-red-500 px-2 py-2 rounded-xl font-bold me-3"
                >
                  {genre.name}
                </span>
              ))}
            <p className="text-xl font-bold my-3 ov-h">{overview}</p>
            <Link
              to={homepage}
              target="_blank"
              className="font-bold text-lg px-3 py-2 rounded-lg border-2 border-red-500"
            >
              <PlayCircleIcon className="w-6 h-6 text-red-500 inline-block" />{" "}
              Watch Now
            </Link>
          </div>
        </div>
      </div>
      <SimilarPage />
    </div>
  );
};

export default DetailsPage;

export const loader = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API}&language=en-US}`
  );
  if (!res.ok) {
    throw json({ message: "Not Found" }, { status: 404 });
  }
  const data = await res.json();

  return data;
};
