import Header from "../components/Header";
import PopularCard from "../components/PopularCard";
import { json, useLoaderData } from "react-router-dom";

const UpcomingPage = () => {
  const upcomingMovies = useLoaderData();
  return (
    <div>
      <Header />
      <section className="px-8 my-10">
        <h1 className="text-4xl font-bold text-mono text-white text-center opacity-65">
          Upcoming Movies
        </h1>
        <div className="grid grid-cols-6 gap-3 mt-8">
          {upcomingMovies.length > 1 &&
            upcomingMovies.map(
              (upcomingMovie) =>
                upcomingMovie.backdrop_path && (
                  <PopularCard
                    popularMovie={upcomingMovie}
                    key={upcomingMovie.id}
                  />
                )
            )}
        </div>
      </section>
    </div>
  );
};

export default UpcomingPage;

export const loader = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=f50903fbca07fdf0f53872cb703e824f&language=en-US"
  );
  if (!res.ok) {
    throw json({ message: "Can't get Upcoming Movies" });
  }
  const data = await res.json();

  return data.results;
};
