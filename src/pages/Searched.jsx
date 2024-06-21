import React from "react";
import { json, useLoaderData, useParams } from "react-router-dom";
import PopularCard from "../components/PopularCard";

const Searched = () => {
  const searchMovies = useLoaderData();
  const { title } = useParams();

  return (
    <section className="px-8 my-10">
      <h1 className="text-4xl font-bold text-mono text-white text-center opacity-65">
        Search Results for "{title}"
      </h1>
      <div className="grid grid-cols-6 gap-3 mt-8">
        {searchMovies.length > 1 &&
          searchMovies.map((searchMovie) => (
            searchMovie.backdrop_path && <PopularCard popularMovie={searchMovie} key={searchMovie.id} />         
          ))}
      </div>
    </section>
  );
};

export default Searched;

export const loader = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=f50903fbca07fdf0f53872cb703e824f&language=en-US&query=${params.title}&page=1&include_adult=false`
  );
  if(!res.ok) {
    throw json({message : "Can't search movies"})
  }
  const movies = await res.json();

  return movies.results;
};
