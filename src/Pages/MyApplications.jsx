import React, { Suspense } from "react";
import ApplicationsTable from "../Components/ApplicationsList";
import useAuth from "../hooks/useAuth";
import Spinner from "../Components/Spinner";
import { myApplicationsPromise } from "../api/applications";

const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>My application</h2>
      <Suspense fallback={<Spinner />}>
        <ApplicationsTable
          myApplicationsPromise={myApplicationsPromise(user?.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
