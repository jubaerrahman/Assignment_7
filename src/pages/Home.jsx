export default function Home() {
  return (
    <div className="text-center mt-10 px-4">

      <h1 className="text-4xl font-bold">
        Friends to keep close in your life
      </h1>

      <p className="mt-2 text-gray-500">
        Manage your relationships easily
      </p>

      <button className="btn btn-success mt-4">
        + Add Friend
      </button>

      <div className="grid md:grid-cols-4 gap-4 mt-10">
        <div className="card p-4 shadow">10 Total Friends</div>
        <div className="card p-4 shadow">3 On Track</div>
        <div className="card p-4 shadow">6 Need Attention</div>
        <div className="card p-4 shadow">12 Interactions</div>
      </div>

    </div>
  )
}