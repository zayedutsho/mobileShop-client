import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyProduct = () => {
  const [pro, setPro] = useState([]);
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      fetch(`https://phonehaat-server-ten.vercel.app/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.error("Product Deleted");
          }
        });
    }
  };

  useEffect(() => {
    fetch("https://phonehaat-server-ten.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        setPro(data);
        console.log(data);
      });
  }, [pro]);

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mx-10">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Availibility</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {pro.map((pro) =>
                user?.email === pro.smail ? (
                  <tr>
                    <td>{pro?.name}</td>

                    <td>{pro?.rprice}</td>
                    {pro.isA ? <td>Available</td> : "Sold"}

                    { }
                    <td>
                      <button onClick={() => handleDelete(pro._id)}>X</button>
                    </td>
                  </tr>
                ) : (
                  <></>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyProduct;
