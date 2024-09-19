import { Routes,Route } from "react-router-dom";
import { Pagenotfound,Moviedetails,Movielist,Search } from "../pages";


export default function Allroutes() {
  return (
    <Routes>
        <Route path="/" element={<Movielist/>}/>
        <Route path="movie/:id" element={<Moviedetails/>}/>
        <Route path="movies/popular" element={<Movielist/>}/>
        <Route path="movies/top" element={<Movielist/>}/>
        <Route path="movies/upcoming" element={<Movielist/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
  )
}
