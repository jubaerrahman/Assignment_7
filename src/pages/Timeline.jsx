import { useEffect, useState } from "react"

import callIcon from "../images/call.png"
import textIcon from "../images/text.png"
import videoIcon from "../images/video.png"

export default function Timeline() {

let [logs, setLogs] = useState([])
let [filter, setFilter] = useState("All")

useEffect(() => {
let data = JSON.parse(localStorage.getItem("logs")) || []
setLogs(data)
}, [])

let filtered = logs

if (filter !== "All") {
filtered = logs.filter(x => x.type === filter)
}

return (

<div className="max-w-3xl mx-auto mt-8">

<h1 className="text-2xl font-bold mb-6">Timeline</h1>

<div className="flex gap-2 mb-4">
<button onClick={()=>setFilter("All")} className="btn btn-sm">All</button>
<button onClick={()=>setFilter("Call")} className="btn btn-sm">Call</button>
<button onClick={()=>setFilter("Text")} className="btn btn-sm">Text</button>
<button onClick={()=>setFilter("Video")} className="btn btn-sm">Video</button>
</div>

<div className="bg-gray-100 p-4 rounded-lg">

{
filtered.map((item,i)=>{

let icon = callIcon
if(item.type === "Text") icon = textIcon
if(item.type === "Video") icon = videoIcon

return (

<div key={i} className="flex items-center gap-3 bg-white px-4 py-3 mb-2 rounded border">

<img src={icon} className="w-5 h-5" />

<div>
<p className="text-sm">
{item.type} with <span className="font-semibold">{item.name}</span>
</p>

<p className="text-xs text-gray-400">
{item.date}
</p>
</div>

</div>

)

})
}

</div>

</div>

)
}