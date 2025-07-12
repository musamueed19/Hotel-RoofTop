import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

// getting data using redux
import { useFetchBlogsQuery } from "../redux/features/blog/blogApi";
import Loader from "../components/Loader";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const [query, setQuery] = useState({
    search: "",
  });

  // useEffect

  // get data using RTK Query
  const { data, error, isLoading } = useFetchBlogsQuery(query);
  // console.log( error?.data?.message)

  return (
    <div className="relative">
      <SearchBar query={query} setQuery={setQuery} />

      {/* Manage Blogs */}

      {/* Loader */}
      {isLoading && <Loader />}
      {/* Error Print */}
      {error && <p className="my-8 py-3 px-6 bg-red-100 rounded-lg text-center text-red-600 font-bold text-xl mx-auto w-fit border-red-200 border">{error?.data?.message?.toString() || "Failed to Get Blogs!"}</p>}

      {/* Print Blogs */}
      {data && (
        <div className="relative">
          <div className="rounded-xl my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 bg-[#EAE6E6]/50">
            {data?.results?.map((item) => (
              <BlogCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
