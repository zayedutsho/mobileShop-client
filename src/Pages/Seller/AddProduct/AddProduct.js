import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const handleProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const rprice = form.rprice.value;
    const name = form.name.value;
    const sname = form.sname.value;
    const yused = form.yused.value;
    const oprice = form.oprice.value;
    const id = form.id.value;
    const smail = form.smail.value;
    const url = form.url.value;
    const location = form.location.value;

    const Product = {
      id,
      name,
      rprice,
      oprice,
      yused,
      sname,
      smail,
      location,
      url,
      date: new Date(),
      isA: true,
    };

    fetch("https://phonehaat-server-ten.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully Added.");

          form.reset();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mx-10">
        {/* <h1 className="mb-6 text-center font-bold">Add Products</h1> */}
        <form onSubmit={handleProduct}>
          <div className="w-full py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding">
            <div className="mb-6">
              <label htmlFor="id">Category: </label>
              <select id="id">
                <option value="63850918093b0ac6ea7040af" selected>
                  Apple
                </option>
                <option value="63850941093b0ac6ea706935">Realme</option>
                <option value="63850960093b0ac6ea70844f">Samsung </option>
              </select>
            </div>
          </div>

          <div class="mb-6">
            <input
              type="text"
              name="name"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Product Name"
            />
          </div>

          <div class="mb-6">
            <input
              type="text"
              name="url"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Image"
            />
          </div>

          <div class="mb-6">
            <input
              type="text"
              name="oprice"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Original Price"
            />
          </div>

          <div class="mb-6">
            <input
              type="text"
              name="rprice"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Resale Price"
            />
          </div>

          <div class="mb-6">
            <input
              type="text"
              name="yused"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Years of usage"
            />
          </div>

          <div class="mb-6">
            <input
              type="text"
              name="location"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Location"
            />
          </div>

          <div class="mb-6">
            <input
              type="text"
              name="sname"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Seller Name"
            />
          </div>

          <div class="mb-6">
            <input
              type="text"
              name="smail"
              defaultValue={user?.email}
              disabled
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Mail"
            />
          </div>

          <div class="text-center lg:text-left">
            <button
              type="submit"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
