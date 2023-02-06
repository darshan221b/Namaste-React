import { useQuery } from "react-query";
import Shimmer from "./Shimmer";
import Error from "./Error";

const Contact = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    ),
    {
      staleTime: 10000
    }
  );

  if (isLoading) return <Shimmer />;
  if (error) return <Error />;

  return (
    <div>
      <h2 className="font-bold text-3xl p-2 m-2">{data?.name}</h2>
      <p className="p-2 m-2">{data?.description}</p>
    </div>
  );
};

export default Contact;
