

const HeaderCard = ({ movie }) => {
  const { backdrop_path, title, overview } = movie;
  
  return (
    <div className="w-full h-screen relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="dark-ov"></div>
      <div className="text-box">
        <h1 className="text-5xl font-extra-bold mb-1">{title}</h1>
        <p className="text-lg text-white font-medium mb-3">{overview}</p>
      </div>
    </div>
  );
};

export default HeaderCard;
