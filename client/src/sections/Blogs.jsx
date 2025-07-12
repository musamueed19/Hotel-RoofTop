import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

// getting data using redux
import { useFetchBlogsQuery } from "../redux/features/blog/blogApi";
import Loader from "../components/Loader";

const Blogs = () => {
  const [query, setQuery] = useState({
    search: "",
  });

  // useEffect

  // get data using RTK Query
  const { data, error, isLoading } = useFetchBlogsQuery(query);

  return (
    <div className="relative">
      <SearchBar query={query} setQuery={setQuery} />

{/* Manage Blogs */}

      {/* Loader */}
      {isLoading && <Loader />}
      {/* Error Print */}
      {error && <div>{error.toString()}</div>}

      {/* Print Blogs */}
      {data && <div>Printed</div>}
    </div>
  );
};

export default Blogs;
