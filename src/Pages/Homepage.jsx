import { Link } from 'react-router-dom'
import Headers from '../Layouts/Header'
import "../Styles/homepage.css"

const Homepage = () => { 

  return (
    <> 
       <Headers /> 
       <div className="w-screen h-[300px] bg-[#2A303C] border-b border-[#4B86BD] rounded-b-[80px] bg-opacity-80 shadow-xl">
        <div className="home-text lg:ml-32 lg:pt-20">
        <h1 className="text-3xl font-extrabold text-white">MovieMate</h1>
        <p className="text-[#CCBC5B] text-base mt-3">Stream our newest movies and tv series.</p>
        <p className="text-[#CCBC5B] text-base">Anywhere, anytime</p>
        <p className="text-[#BCBDBD] mt-5 text-sm font-normal mb-7">watch without signing up</p>
        
        <Link to={"/movies"} className="text-white bg-[#4B86BD] rounded-2xl py-1 px-5 text-sm">Get started</Link>
        </div>
        
       </div>
    </>
  )
}

export default Homepage