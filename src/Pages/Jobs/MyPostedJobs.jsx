import React, { Suspense } from "react";
import JobList from "../../Components/Jobs/JobList";
import { myJobsPromise } from "../../api/jobs";
import Spinner from "../../Components/Spinner";
import useAuth from "../../hooks/useAuth";

const MyPostedJobs = () => {
  const { user } = useAuth();
  console.log(user?.email);

  return (
    <div>
      <h2>My posted Jobs</h2>
      <Suspense fallback={<Spinner />}>
        <JobList myJobsPromise={myJobsPromise(user?.email)}></JobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
