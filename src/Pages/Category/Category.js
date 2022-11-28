import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const Category = () => {
  const { data: category = [] } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch("https://phonehaat-server-ten.vercel.app/category").then((res) =>
        res.json()
      ),
  });
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="">
        <div className="mb-10">
          <h1 className="text-lg font-semibold mt-6 mb-6">Category</h1>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {category.map((cat) => (
              // <Categories key={cat._id} cats={cat}></Categories>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={cat.url}
                    style={{ height: 250 }}
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{cat.name}</h2>
                  <div className="card-actions">
                    <Link to={`category/${cat._id}`}>
                      <button className="btn btn-primary">Explore</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
