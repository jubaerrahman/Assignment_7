import fb from "../images/facebook.png"
import twitter from "../images/twitter.png"
import insta from "../images/instagram.png"

export default function Footer() {

return (

<div className="bg-green-900 text-white mt-16 py-10 px-4">

<div className="max-w-5xl mx-auto text-center">

<h1 className="text-2xl sm:text-3xl font-bold mb-3">
KeenKeeper
</h1>

<p className="text-xs sm:text-sm text-gray-300 mb-6 px-2 sm:px-0">
Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
</p>

<div className="flex justify-center gap-4 mb-6">

<div className="w-9 h-9 flex items-center justify-center bg-white rounded-full">
<img src={fb} className="w-4 h-4 object-contain" />
</div>

<div className="w-9 h-9 flex items-center justify-center bg-white rounded-full">
<img src={insta} className="w-4 h-4 object-contain" />
</div>

<div className="w-9 h-9 flex items-center justify-center bg-white rounded-full">
<img src={twitter} className="w-4 h-4 object-contain" />
</div>

</div>

<div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-gray-400">

<p>Privacy Policy</p>
<p>Terms of Service</p>
<p>Cookies</p>

</div>

<p className="text-xs text-gray-500 mt-4">
© 2026 KeenKeeper. All rights reserved.
</p>

</div>

</div>

)
}