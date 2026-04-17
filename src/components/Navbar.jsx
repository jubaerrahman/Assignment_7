import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 px-4 sm:px-10 shadow-md">

      <div className="flex-1">
        <h1 className="text-lg sm:text-2xl font-bold text-green-700">
          KeenKeeper
        </h1>
      </div>

      <div className="flex-none">

        <div className="dropdown dropdown-end sm:hidden">

          <label tabIndex={0} className="btn btn-ghost btn-circle">
            ☰
          </label>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">

            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/timeline">Timeline</NavLink>
            </li>

            <li>
              <NavLink to="/stats">Stats</NavLink>
            </li>

          </ul>

        </div>

        <div className="hidden sm:flex gap-6 text-lg">

          <NavLink 
            to="/" 
            className={({isActive}) => isActive ? "text-green-700 font-semibold" : "hover:text-green-600"}
          >
            Home
          </NavLink>

          <NavLink 
            to="/timeline" 
            className={({isActive}) => isActive ? "text-green-700 font-semibold" : "hover:text-green-600"}
          >
            Timeline
          </NavLink>

          <NavLink 
            to="/stats" 
            className={({isActive}) => isActive ? "text-green-700 font-semibold" : "hover:text-green-600"}
          >
            Stats
          </NavLink>

        </div>

      </div>

    </div>
  )
}