import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HeaderCard from "./HeaderCard";

const Header = () => {
  const [relatedMovies, setRelatedMovies] = useState([]);
  useEffect(() => {
    getRelatedMovies();
  }, []);

  const getRelatedMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f50903fbca07fdf0f53872cb703e824f&language=en-US"
    );
    const data = await res.json();
    setRelatedMovies(data.results);
  };

  return (
    <section className="w-full h-screen">
      <Splide
        options={{
          type: "loop",
          arrows: false,
          autoplay: true,
          interval: 3000,
          rewind: true,
        }}
      >
        {relatedMovies.map((movie) => (
          <SplideSlide key={movie.id}>
            <HeaderCard movie={movie} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Header;
