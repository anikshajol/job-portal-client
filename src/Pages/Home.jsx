import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import HotJobs from "../Components/HotJobs";
import Spinner from "../Components/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Banner />
      <div className="max-w-4/5 mx-auto">
        {loading ? <Spinner /> : <HotJobs jobs={jobs} />}
      </div>
    </>
  );
};

export default Home;
