import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "../media/profile.png";
import DraftsIcon from "@mui/icons-material/Drafts";
import ConstructionIcon from "@mui/icons-material/Construction";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { useParams, Link , useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

const Details = () => {
  const { id } = useParams("");
  const navigate = useNavigate();
  //console.log(id);

  const [getuserdata, setUserdata] = useState([]);
  const getdata = async (e) => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    //console.log(data);
    if (res.status === 422 || !data) {
      alert("error");
      //console.log("error");
    } else {
      setUserdata(data);
      //console.log("Get Data");
    }
  };
  const deleteuser = async() =>{
    const res = await fetch(`/deleteuser/${id}` , {
      method : "DELETE" ,
      headers : {
        "Content-Type" : "application/json"
      }
    })
    const deletedData = await res.json();
    if(res.status === 422 || !deletedData){
      alert("error")
    }else{
      alert("Data is successfully deleted");
      navigate("/");
    }
  }

  useEffect(() => {
    getdata();
  },[]);
  return (
    <div className="container mt-3 col-lg-6 col-md-6 col-12">
      <h1 style={{ fontWeight: 400 }}>Welcome {getuserdata.name}</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add_btn">
            <Link to={`/edit/${id}`}>
              <button className="btn btn-primary mx-2">
                U<DriveFileRenameOutlineIcon />
              </button>
            </Link>
              <button onClick = {()=>{deleteuser()
              }} className="btn btn-danger">
                D<DeleteSweepIcon />
              </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src={Image} style={{ width: 50 }} alt="profile" />
              <h3 className="mt-3">
                Name : <span>{getuserdata.name}</span>
              </h3>
              <h3 className="mt-3">
                Age : <span>{getuserdata.age}</span>
              </h3>
              <p>
                <DraftsIcon /> Email : <span>{getuserdata.email}</span>
              </p>
              <p>
                <ConstructionIcon /> Occupation :{" "}
                <span>{getuserdata.work}</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-4">
                <SendToMobileIcon /> Mobile : <span>{getuserdata.mobile}</span>
                <span></span>
              </p>
              <p>
                <MyLocationIcon /> Location : <span>{getuserdata.add}</span>
              </p>
              <p>
                Description : <span>{getuserdata.desc}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
