import React from 'react'

// sections
import Hero from "../sections/Hero"
import Blogs from "../sections/Blogs"

const Home = () => {
  return (
    <div className="my-8 py-6 px-3 md:px-4 space-y-6 bg-[#fff] rounded-xl">
      {/* Hero */}
      <Hero />

      {/* Blogs */}
      <Blogs />
    </div>
  );
}

export default Home