import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import swal from 'sweetalert';
import "./Stu.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddStudent() {
 const navi =  useNavigate()
  const [gender, setgender] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [techerId , settecherId] =  useState()
useEffect(()=>{
  let userid = JSON.parse(localStorage.getItem("data"))
  settecherId(userid._id)
  //  console.log(userid._id);
},[])
  async function st (e){
    e.preventDefault()
    const res =  await axios.post("http://localhost:3001/student",{name:name , age:age , gender :gender , techerId:techerId})
    // console.log(res)
    if (res.data.status === 20) {
      swal(`Student save name is ${res.data.stud.name}`).then((e) => {
        if (e === true) {
          navi("/student")
        }
      });
    }
  }
  return (
    <>
      <Navbar />
      <div className="mainfrom">
        <div className="user-form">
          <h2>User Information</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" required  onChange={(e)=>setAge(e.target.value)}/>
            <label>Gender:</label>
            <label htmlFor="male">
              <input
                type="radio"
                id="male"
                name="gender"
                defaultValue="male"
                required
                onChange={(e) => setgender(e.target.value)}
              />{" "}
              Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                id="female"
                name="gender"
                defaultValue="female"
                required
                onChange={(e) => setgender(e.target.value)}
              />{" "}
              Female
            </label>
            <label htmlFor="other">
              <input
                type="radio"
                id="other"
                name="gender"
                defaultValue="other"
                required
                onChange={(e) => setgender(e.target.value)}
              />{" "}
              Other
            </label>
            <button onClick={st} >Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddStudent;
