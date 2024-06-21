import Header from "../components/Header";
import { json, useLoaderData, useNavigation } from "react-router-dom";
import PopularCard from "../components/PopularCard";

const PopularPage = () => {
  const popularMovies = useLoaderData();
  const navigation = useNavigation();

  return (
    <div>
      <Header />
        <section className="px-8 my-10">
          <h1 className="text-4xl font-bold text-mono text-white text-center opacity-65">
            Popular Movies
          </h1>
          <div className="grid grid-cols-6 gap-3 mt-8">
            {popularMovies.length > 1 &&
              popularMovies.map(
                (popularMovie) =>
                  popularMovie.backdrop_path && (
                    <PopularCard
                      popularMovie={popularMovie}
                      key={popularMovie.id}
                    />
                  )
              )}
          </div>
        </section>
    </div>
  );
};

export default PopularPage;

export const loader = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=f50903fbca07fdf0f53872cb703e824f&language=en-US"
  );
  if (!res.ok) {
    throw json({ message: "Can't get Popular movies" }, { status: 401 });
  }
  const data = await res.json();

  return data.results;
};
