import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdMenu size={30} />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">JobPortal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-semibold menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <Link to={"/login"} className=" border-b text-xl font-semibold">
          Login
        </Link>
        <Link to={"/register"} className="btn btn-info font-semibold">
          Registration
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
