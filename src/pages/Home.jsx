import data from '../json/friends.json'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-center px-4 sm:px-6">

    
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-10">
        Friends to keep close in your life
      </h1>

      <p className="mt-2 text-gray-500">
        Manage your relationships easily
      </p>

      <button className="btn btn-success mt-4">
        + Add Friend
      </button>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">

        <div className="card bg-base-100 shadow p-4">
          <h2 className="text-xl font-bold">10</h2>
          <p>Total Friends</p>
        </div>

        <div className="card bg-base-100 shadow p-4">
          <h2 className="text-xl font-bold">4</h2>
          <p>On Track</p>
        </div>

        <div className="card bg-base-100 shadow p-4">
          <h2 className="text-xl font-bold">3</h2>
          <p>Almost Due</p>
        </div>

        <div className="card bg-base-100 shadow p-4">
          <h2 className="text-xl font-bold">3</h2>
          <p>Overdue</p>
        </div>

      </div>

      
      <h2 className="text-2xl font-bold mt-12">
        Your Friends
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-4">

        {
          data.map(friend => (
            <Link to={`/friend/${friend.id}`} key={friend.id}>

              <div className="card bg-base-100 shadow p-4 hover:shadow-lg">

                <img
                  src={friend.picture}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto"
                />

                <h2 className="text-center font-bold mt-2">
                  {friend.name}
                </h2>

                <p className="text-center text-sm">
                  {friend.days_since_contact} days ago
                </p>

                <div className="flex justify-center gap-1 mt-2 flex-wrap">
                  {
                    friend.tags.map((tag, i) => (
                      <span key={i} className="badge badge-outline">
                        {tag}
                      </span>
                    ))
                  }
                </div>

                <span className={`badge mt-2 mx-auto ${
                  friend.status === "overdue"
                    ? "badge-error"
                    : friend.status === "almost due"
                    ? "badge-warning"
                    : "badge-success"
                }`}>
                  {friend.status}
                </span>

              </div>

            </Link>
          ))
        }

      </div>

    </div>
  )
}