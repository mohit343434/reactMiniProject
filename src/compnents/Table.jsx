import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./Comp.css";
import Navbar from "./Navbar";
function Table() {
  const [id, setId] = useState("");
  // const [deleteId, setDeleteId] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    let useid = JSON.parse(localStorage.getItem("data"));
    setId(useid._id);
    tabledata();
  }, [id]);
  async function tabledata() {
    const res = await axios.post(`http://localhost:3001/allstudnt`, {
      techerId: id,
    });
    setData(res.data.data);
  }

  async function deleteUser(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log(willDelete);
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        axios.delete(`http://localhost:3001/delete/${id}`).then((e) => {
          // console.log(e);
          tabledata();
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="istable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.gender}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => deleteUser(e._id)}
                    style={{ background: "red" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
