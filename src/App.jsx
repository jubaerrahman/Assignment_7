import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <div>

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 mt-6">
        <Outlet />
      </div>

    </div>
  )
}