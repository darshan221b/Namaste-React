const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill("")
        .map((e, idx) => (
          <div key={idx} className="w-56 h-56 m-5 bg-gray-300"></div>
        ))}
    </div>
  );
};

export default Shimmer;
