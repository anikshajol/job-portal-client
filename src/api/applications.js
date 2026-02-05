export const myApplicationsPromise = async (email, firebaseTokens) => {
  const res = await fetch(`http://localhost:5000/applications?email=${email}`, {
    credentials: "include",
    headers: { authorization: `bearer ${firebaseTokens}` },
  });

  return res.json();
};
