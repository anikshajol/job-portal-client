import React, { Suspense } from "react";
import ApplicationsTable from "../Components/ApplicationsList";
import useAuth from "../hooks/useAuth";
import Spinner from "../Components/Spinner";
import { myApplicationsPromise } from "../api/applications";

const MyApplications = () => {
  const { user } = useAuth();
  console.log(user.accessToken);
  const accessToken = user?.accessToken;

  return (
    <div>
      <h2>My application</h2>
      <Suspense fallback={<Spinner />}>
        <ApplicationsTable
          myApplicationsPromise={myApplicationsPromise(
            user?.email,
            accessToken,
          )}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
