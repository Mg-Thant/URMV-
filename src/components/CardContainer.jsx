import React, { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import { json } from "react-router-dom";

const CardContainer = ({ title, popularMovie }) => {


  return (
    <section className="px-8 my-10">
      <h1 className="text-4xl font-bold text-mono text-white text-center opacity-65">
        {title}
      </h1>
      <div className="grid grid-cols-6 gap-3 mt-8">
        {popularMovie &&
          popularMovie.map((movie) => (
            <PopularCard popularMovie={movie} key={movie.id} />
          ))}
      </div>
    </section>
  );
};

export default CardContainer;
