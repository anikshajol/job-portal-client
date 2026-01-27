import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import HotJobs from "../Components/HotJobs";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
      });
  }, []);
  return (
    <>
      <Banner />
      <div className="max-w-4/5 mx-auto">
        <HotJobs jobs={jobs} />
      </div>
    </>
  );
};

export default Home;
