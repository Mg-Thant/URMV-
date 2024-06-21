import { Link } from "react-router-dom";

const PopularCard = ({ popularMovie }) => {
  const { id, poster_path, popularity, release_date } = popularMovie;

  return (
    <section className="flex flex-col ">
      <div className="rounded-lg overflow-hidden relative">
        <Link to={`/details/${id}`} className="cursor-pointer op-ctr">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt=""
            className="w-full h-72 object-cover"
          />
        </Link>
      </div>
      <div className="text-white  flex justify-between flex-wrap font-bold opacity-75 pl-1">
        <p>Popularity : {popularity}</p>
        <p>Relasedate : {release_date}</p>
      </div>
    </section>
  );
};

export default PopularCard;
