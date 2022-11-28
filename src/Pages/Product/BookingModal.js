import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingModal = ({ p, setProduct }) => {
  const { name, rprice } = p;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      name,
      email,
      price,
      location,
      phone,
    };

    fetch("https://phonehaat-server-ten.vercel.app/booknow", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          // setProduct(null);
          toast.success("Booking confirmed.");
          // refetch();
          form.reset();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-4">{name}</h3>

          <form onSubmit={handleBooking}>
            <input
              type="text"
              name="name"
              defaultValue={name}
              disabled
              className="input w-full input-bordered mb-2"
            ></input>

            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              className="input w-full input-bordered mb-2"
            ></input>

            <input
              type="text"
              name="price"
              defaultValue={rprice}
              disabled
              className="input w-full input-bordered mb-2"
            ></input>

            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered mb-2"
            />

            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered mb-2"
            />

            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default BookingModal;
