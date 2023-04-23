import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Edit = () => {
  // This useHistory hook to to redirect to the home page after editing is dubmitted
  const navigate = useNavigate();

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: "",
  });
  const { id } = useParams();
  const getdata = async () => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    //console.log(data);
    if (res.status === 422 || !data) {
      //console.log("error");
    } else {
      setINP(data);
      //console.log("get data");
    }
  };
  useEffect(() => {
    getdata();
  },[]);

  const setData = (e) => {
    // console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const updateuser = async (e) => {
    e.preventDefault();

    const { name, email, work, add, mobile, desc, age } = inpval;

    const res2 = await fetch(`/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        work,
        add,
        mobile,
        desc,
        age,
      }),
    });
    const data2 = await res2.json();
    //console.log(data2);
    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      alert("DATA UPDATED");
      navigate("/");
    }
  };
  return (
    <div>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="email"
              name="name"
              value={inpval.name}
              className="form-control"
              onChange={setData}
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={inpval.email}
              className="form-control"
              onChange={setData}
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={inpval.age}
              className="form-control"
              onChange={setData}
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Mobile
            </label>
            <input
              type="number"
              name="mobile"
              value={inpval.mobile}
              className="form-control"
              onChange={setData}
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Work
            </label>
            <input
              type="text"
              name="work"
              value={inpval.work}
              className="form-control"
              onChange={setData}
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="add"
              value={inpval.add}
              className="form-control"
              onChange={setData}
            />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              name="desc"
              value={inpval.desc}
              className="form-control"
              onChange={setData}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={setData}
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            onClick={updateuser}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
