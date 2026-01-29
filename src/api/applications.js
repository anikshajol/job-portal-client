export const myApplicationsPromise = async (email) => {
  const res = await fetch(`http://localhost:5000/applications?email=${email}`);

  return res.json();
};
