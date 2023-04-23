import React, { useState, useEffect } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
const Home = () => {
  const [getuserdata, setUserdata] = useState([]);

  const getpdata = async (e) => {
    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    //console.log(data);
    if (res.status === 422 || !data) {
      alert("error");
      //  console.log("error");
    } else {
      setUserdata(data);
      //  console.log("Get Data");
    }
  };

  useEffect(() => {
    getpdata();
  }, []);

  const deleteuser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletedata = await res2.json();
    //console.log(deletedata);
    if (res2.status === 422 || !deletedata) {
      // console.log("error");
    } else {
      // console.log("user deleted");
      alert("DATA DELETED");
      getpdata();
    }
  };
  return (
    <>
      <div className="mt-3">
        <h3 className="text-center">
          THE FOLLOWING APP PERFORMS CREATE{" "}
          <button type="button" class="btn btn-info">
            C<AddBoxIcon />
          </button>{" "}
          READ{" "}
          <button className="btn btn-success">
            R<RemoveRedEyeIcon />
          </button>{" "}
          UPDATE{" "}
          <button className="btn btn-primary">
            U<DriveFileRenameOutlineIcon />
          </button>{" "}
          DELETE{" "}
          <button className="btn btn-danger">
            D<DeleteSweepIcon />
          </button>{" "}
          FUNCTIONALITIES
        </h3>
      </div>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-2">
            <Link to="./register">
              <button type="button" class="btn btn-info">
                C<AddBoxIcon />
              </button>
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Job</th>
                <th scope="col">Number</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.work}</td>
                      <td>{element.mobile}</td>
                      <td>
                        <Link to={`./view/${element._id}`}>
                          <button className="btn btn-success">
                            R<RemoveRedEyeIcon />
                          </button>
                        </Link>
                        <Link to={`edit/${element._id}`}>
                          {" "}
                          <button className="btn btn-primary">
                            U<DriveFileRenameOutlineIcon />
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            deleteuser(element._id);
                          }}
                          className="btn btn-danger"
                        >
                          D<DeleteSweepIcon />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
