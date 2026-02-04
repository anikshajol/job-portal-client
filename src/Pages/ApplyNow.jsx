// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const ApplyNow = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  const [isApplied, setIsApplied] = useState(false);
  console.log(jobId);

  const handleApplyApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { facebook, github, resume } = Object.fromEntries(formData.entries());

    const applications = {
      jobId,
      facebook,
      github,
      resume,
      email: user?.email,
    };

    axios
      .post(`http://localhost:5000/applications`, applications)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          setIsApplied(true);
          toast.success("Data added successfully");
        }
      })
      .catch((err) => console.log(err));
    // console.log(inputData);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Apply here</h1>

        {/* input fields */}
        <form onSubmit={handleApplyApplication} action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              facebook
            </label>
            <input
              type="url"
              name="facebook"
              placeholder="input facebook link"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Github
            </label>
            <input
              type="url"
              name="github"
              placeholder="Input github link"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              CV
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Input your CV link"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            disabled={isApplied}
            className="block btn btn-accent w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
          >
            Apply
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
