import Lottie from "lottie-react";
import registerAnime from "../assets/Lottie/register.json";
const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
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
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
