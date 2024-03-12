import { useEffect, useState } from "react"
import User from "./card"
import useLocalStorage from "./useLocalStorage"
import './theme.css'
import './style.css'
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 

export default function GitHubProfileFinder(){

    const particlesInit = async (main) => { 
        console.log(main); 
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
        // starting from v2 you can add only the features you need reducing the bundle size 
        await loadFull(main); 
      }; 
      const particlesLoaded = (container) => { 
        console.log(container); 
      }; 

const[userName, setUserName] =useState('sandipshaw26');
const[userData, setUserData] = useState('');
const[loading,setLoading] = useState(false);

const[theme, setTheme] = useLocalStorage('theme','dark')
function handleToggleTheme(){
    setTheme(theme === 'dark' ? 'light':'dark');
}
console.log(theme);

function handleSubmit(){
fetchGitHubUserData();
}
async function fetchGitHubUserData(){
    setLoading(true);
const res = await fetch(`https://api.github.com/users/${userName}`);
const data = await res.json();
if(data){
    setLoading(false);
    setUserData(data);
    setUserName('');
}
console.log(data);
}
useEffect(()=>{
 fetchGitHubUserData()   
},[])
if(loading){
    return <h1>Loading......</h1>
}
return<div className="container">

 <div className="lightdark" data-theme={theme}>
 <div className="nav">
      <button onClick={handleToggleTheme} className="btn">Change Theme</button>
      {/* <div className="headnote"><h3>Welcome to Github profile finder!</h3></div> */}
 <div className="gitprofile-container">
<div className="input-wrapper">
{/* <h3 className="searchtxt">Search your Github profile here -></h3> */}
<input
    className="inp"
    name="username"
    type="text"
    placeholder="Search your Github profile"
    value={userName}
    onChange={(event)=> setUserName(event.target.value)}
/>
<button onClick={handleSubmit} className="search">Search</button>
</div>
</div>
</div>
{
    userData !== null ? <User user= {userData} /> : '' 
}
<div className="foot">
<footer>Made By Sandip</footer>
</div>
</div>
</div>

}