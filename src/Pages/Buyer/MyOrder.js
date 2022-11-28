import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: () =>
      fetch("https://phonehaat-server-ten.vercel.app/bookings").then((res) =>
        res.json()
      ),
  });
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {bookings.map((book) =>
          user?.email === book.email ? (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={book.url}
                  style={{ height: 250 }}
                  alt="Phone"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{book.name}</h2>
                <div>
                  <h3>
                    Location: <b>{book.location}</b>
                  </h3>
                  <div className="flex">
                    <h4>
                      Resale Price: <b>{book.price}</b>
                    </h4>
                  </div>
                </div>
                <button className="btn btn-primary"> Pay Now </button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default MyOrder;
