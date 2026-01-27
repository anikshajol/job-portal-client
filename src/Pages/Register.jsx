import Lottie from "lottie-react";
import registerAnime from "../assets/Lottie/register.json";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { FaHandPointDown } from "react-icons/fa";
import SocialLogin from "../Components/SocialLogin";
const Register = () => {
  const { createUser } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    const { email, password } = userData;

    // firebase create user with email and password

    // createUser(email, password)
    //   .then((res) => {
    //     console.log(res.user);
    //     if (res.user) {
    //       toast.success("Account created successfully");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     if (error.code === "auth/email-already-in-use") {
    //       toast.error("এই ইমেইলটি ইতিপূর্বে ব্যবহার করা হয়েছে।");
    //     }
    //   });
    try {
      const res = await createUser(email, password);
      if (res.user) {
        console.log(res.user);
        toast.success("Account created successfully");
        form.reset();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Failed to create account");
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className=" lg:text-left hidden lg:block max-w-lg">
          <Lottie animationData={registerAnime} loop={true} />
        </div>

        {/* input fields */}
        <div className="card  w-full max-w-md shrink-0 ">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister} action="">
              <fieldset className="fieldset ">
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />
              </fieldset>
              {/* password */}
              <fieldset className="fieldset">
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
              </fieldset>
              {/* button */}
              <fieldset className="fieldset">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => console.log("hover started!")}
                  className="btn btn-neutral mt-4"
                >
                  Register
                </motion.button>
              </fieldset>
            </form>
          </div>
          <section className="flex items-center py-2 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <h3 className="px-3 text-sm font-semibold dark:text-gray-600 flex justify-center items-center gap-2">
              Register with social accounts <FaHandPointDown size={20} />
            </h3>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </section>

          {/* social icons */}
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
