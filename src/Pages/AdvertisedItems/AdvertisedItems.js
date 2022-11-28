import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BookingModal from "../Product/BookingModal";
import { FcCellPhone } from "react-icons/fc";

const AdvertisedItems = () => {
  const { data: product = [], refetch } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch("https://phonehaat-server-ten.vercel.app/product").then((res) =>
        res.json()
      ),
  });
  const { p, setProduct } = useState(null);
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-lg font-semibold mt-6 mb-6">Special Offers</h1>
      <div className="">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {product.map((pr) =>
            pr.isAd === true ? (
              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img src={pr.url} style={{ height: 250 }} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{pr.name}</h2>
                    <div className="card-actions justify-end">
                      <button disabled className="btn btn-info">
                        <FcCellPhone size={100}></FcCellPhone>
                      </button>
                    </div>
                    {p && (
                      <BookingModal
                        p={p}
                        setProduct={setProduct}
                        refetch={refetch}
                      ></BookingModal>
                    )}
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItems;
