import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllBuyer = () => {
  const [user, setUser] = useState([]);

  //   const { data: users = [] } = useQuery({
  //     queryKey: ["users"],
  //     queryFn: () =>
  //       fetch("https://phonehaat-server-ten.vercel.app/users").then((res) => res.json()),
  //   });

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      fetch(`https://phonehaat-server-ten.vercel.app/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.error("User Deleted");
          }
        });
    }
  };
  useEffect(() => {
    fetch("https://phonehaat-server-ten.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  }, [user]);

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mx-10">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user) =>
                user.role === "User" ? (
                  <tr>
                    <td>{user?.email}</td>
                    <td>
                      <button onClick={() => handleDelete(user._id)}>X</button>
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

export default AllBuyer;
