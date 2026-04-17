import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import data from "../json/friends.json"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function FriendDetails() {

let { id } = useParams()
let [friend, setFriend] = useState(null)

useEffect(() => {
let f = data.find(x => x.id == id)
setFriend(f)
}, [id])

if (!friend) return <h1>Loading...</h1>

let color = "badge-success"
if (friend.status == "overdue") color = "badge-error"
if (friend.status == "almost due") color = "badge-warning"

let handleAction = (type) => {
let logs = JSON.parse(localStorage.getItem("logs") || "[]")

let item = {
type: type,
name: friend.name,
date: new Date().toLocaleDateString()
}

logs.push(item)

localStorage.setItem("logs", JSON.stringify(logs))

toast.success(type + " with " + friend.name, {
style: {
background: "",
color: " #000000"
}
})
}

return (

<div className="max-w-6xl mx-auto mt-6 px-4">

<ToastContainer />

<div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">

<div className="card bg-base-100 shadow p-5 text-center h-fit">

<img src={friend.picture} className="w-20 h-20 rounded-full mx-auto" />

<h2 className="text-lg font-bold mt-2">{friend.name}</h2>

<span className={`badge mt-2 ${color}`}>{friend.status}</span>

<div className="flex flex-wrap justify-center gap-1 mt-2">
{
friend.tags.map((t,i)=>(
<span key={i} className="badge badge-outline text-xs">{t}</span>
))
}
</div>

<p className="mt-3 text-xs text-gray-500">{friend.bio}</p>

<p className="text-xs text-blue-500 mt-1">{friend.email}</p>

<div className="mt-5 flex flex-col gap-2">

<button className="btn btn-sm">Snooze 2 Weeks</button>

<button className="btn btn-sm">Archive</button>

<button className="btn btn-sm btn-error">Delete</button>

</div>

</div>

<div className="flex flex-col gap-5">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="card bg-base-100 shadow p-4 text-center">
<h2 className="font-bold text-lg">{friend.days_since_contact}</h2>
<p className="text-xs text-gray-400">Days Since Contact</p>
</div>

<div className="card bg-base-100 shadow p-4 text-center">
<h2 className="font-bold text-lg">{friend.goal}</h2>
<p className="text-xs text-gray-400">Goal (Days)</p>
</div>

<div className="card bg-base-100 shadow p-4 text-center">
<h2 className="text-sm font-bold">{friend.next_due_date}</h2>
<p className="text-xs text-gray-400">Next Due</p>
</div>

</div>

<div className="card bg-base-100 shadow p-4">

<div className="flex justify-between items-center">
<h2 className="text-sm font-bold">Relationship Goal</h2>
<button className="btn btn-xs">Edit</button>
</div>

<p className="text-xs mt-2 text-gray-500">
Connect every {friend.goal} days
</p>

</div>

<div className="card bg-base-100 shadow p-4">

<h2 className="text-sm font-bold mb-3">Quick Check-In</h2>

<div className="grid grid-cols-3 gap-3">

<button onClick={()=>handleAction("Call")} className="btn btn-sm">Call</button>

<button onClick={()=>handleAction("Text")} className="btn btn-sm">Text</button>

<button onClick={()=>handleAction("Video")} className="btn btn-sm">Video</button>

</div>

</div>

</div>

</div>

</div>

)
}