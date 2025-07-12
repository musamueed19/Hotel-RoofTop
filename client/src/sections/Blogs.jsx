import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";


// getting data using redux
import {useFetchBlogsQuery} from "../redux/features/blog/blogApi"

const Blogs = () => {
  const [query, setQuery] = useState({
    search: ""
  });

  // useEffect
  useEffect(() => {
    console.log(query)
  }, [query])

// get data using RTK Query
  const { data } = useFetchBlogsQuery(query)
  console.log(data)

  return (
    <div className="relative">
      <SearchBar query={query} setQuery={setQuery} />
    </div>
  );
};

export default Blogs;
