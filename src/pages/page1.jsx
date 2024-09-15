import { Input } from "@material-ui/core"
import { useState } from "react"



function Page1 (){
   const[carNAME,setCarname]=useState("Honda")

    const[name,SetName] =useState("Adam")
    const[fatherName,setFatherName] =useState("Jeff")
const [brothername,setbrotherName] =useState("Zeus")
const [mothername,setmothername] = useState("Molly")
const updateName=(e)=>{

    SetName(e.target.value)
}

const updateFather=(e)=>{
    setFatherName(e.target.value)
}


 const  updatebrother=(e)=>{
setbrotherName(e.target.value)

 }

 const updatemother=(e)=>{

setmothername(e.target.value)


 }

 const getData=()=>{
    console.log(name,fatherName,brothername,mothername)

 }


return(


<div>
    
    FirstNAME <input onChange={updateName}/>
    FatherNAME <input onChange={updateFather}/>
    brothername <input onChange={updatebrother}/>
    mothername <input onChange={updatemother}/>
  <button onClick={getData}>submit</button>
    
    {name}<br/>
    {fatherName}<br/>
    {brothername}<br/>
    {mothername}


    

</div>


)





}
export default Page1