import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import Products from "./Products";

const Product = () => {
  const { _id } = useLoaderData();
  // const { data: product = [], refetch } = useQuery({
  //   queryKey: ["product"],
  //   queryFn: () =>
  //     fetch("https://phonehaat-server-ten.vercel.app/product").then((res) => res.json()),
  // });
  const [p, setProduct] = useState(null);
  const [pro, setPro] = useState([]);
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
      <div className="">
        <div className="mb-10">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {pro.map((cat) =>
              _id === cat.id ? (
                <Products cat={cat} setProduct={setProduct}></Products>
              ) : (
                <div></div>
              )
            )}
          </div>
          {p && <BookingModal p={p} setProduct={setProduct}></BookingModal>}
        </div>
      </div>
    </div>
  );
};

export default Product;
