import React from "react";
import { FcOk } from "react-icons/fc";

const Products = ({ cat, setProduct }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={cat.url}
          style={{ height: 250 }}
          alt="Phone"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{cat.name}</h2>
        <div>
          <h3>
            Location: <b>{cat.location}</b>
          </h3>
          <div className="flex">
            <h4>
              Resale Price: <b>{cat.rprice}</b>
            </h4>
            &nbsp;
            <h4>
              Original Price: <b>{cat.oprice}</b>
            </h4>
          </div>
          <h3>
            Years of used: <b>{cat.yused}</b>
          </h3>
          <h3>
            Posted time: <b>{cat.date}</b>
          </h3>
          <h3 className="flex justify-center items-center">
            Seller Name: &nbsp; <b>{cat.sname}</b> &nbsp;
            {cat.isVerified ? <FcOk></FcOk> : null}
          </h3>
        </div>
        
        <label
          htmlFor="my-modal-3"
          className="btn"
          onClick={() => setProduct(cat)}
        >
          Book Now
        </label>
      </div>
    </div>
  );
};

export default Products;
