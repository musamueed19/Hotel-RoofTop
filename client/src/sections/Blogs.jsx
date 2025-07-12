import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

const Blogs = () => {
  const [query, setQuery] = useState({
    search: ""
  });

  // useEffect
  useEffect(() => {
    console.log(query)
  }, [query])


  const {data} = useFetchBlogs

  return (
    <div className="relative">
      <SearchBar query={query} setQuery={setQuery} />
    </div>
  );
};

export default Blogs;
