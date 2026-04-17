import { PieChart, Pie, Cell } from "recharts"

export default function Stats() {

let data = [
{ name: "Call", value: 5 },
{ name: "Text", value: 3 },
{ name: "Video", value: 2 }
]

let colors = ["#22c55e", "#8b5cf6", "#10b981"]

return (

<div className="max-w-4xl mx-auto mt-10">

<h1 className="text-3xl font-bold mb-6">
Friendship Analytics
</h1>

<div className="bg-base-100 p-6 rounded shadow text-center">

<p className="text-sm text-gray-500 mb-4">
By Interaction Type
</p>

<div className="flex justify-center">

<PieChart width={280} height={280}>

<Pie
data={data}
dataKey="value"
innerRadius={70}
outerRadius={100}
paddingAngle={5}
>

{
data.map((entry, index) => (
<Cell key={index} fill={colors[index]} />
))
}

</Pie>

</PieChart>

</div>

<div className="flex justify-center gap-6 mt-4">

<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full" style={{background: colors[0]}}></div>
<p className="text-sm">Call</p>
</div>

<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full" style={{background: colors[1]}}></div>
<p className="text-sm">Text</p>
</div>

<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full" style={{background: colors[2]}}></div>
<p className="text-sm">Video</p>
</div>

</div>

</div>

</div>

)
}