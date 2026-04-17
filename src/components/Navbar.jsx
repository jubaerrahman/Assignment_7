import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 px-10 shadow-md">

      <div className="flex-1">
        <h1 className="text-2xl font-bold text-green-700">
          KeenKeeper
        </h1>
      </div>

      <div className="flex gap-6 text-lg">

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
  )
}