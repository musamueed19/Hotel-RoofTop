import React from "react";
import { useParams } from "react-router-dom";
import {
  useFetchBlogByIdQuery,
  useLazyFetchBlogByIdQuery,
} from "../redux/features/blog/blogApi";
import Loader from "../components/Loader";

const Blog = () => {
  // blog id from query params
  const { id } = useParams();

  const { data, error, isLoading } = useFetchBlogByIdQuery(id);
  // console.log(data?.result)
  //   const {
  //   title,
  //   description,
  //   author,
  //   authorImg,
  //   category,
  //   _id,
  //   content,
  //   coverImg,
  //   publishedDate,
  //   tags,
  //   readingTime,
  // } = data?.result;

  return (
    <div className="relative lg:max-w-6xl mx-auto px-2">
      {/* Manage Blogs */}

      {/* Loader */}
      {isLoading && <Loader />}
      {/* Error Print */}
      {error && (
        <p className="my-8 py-3 px-6 bg-red-100 rounded-lg text-center text-red-600 font-bold text-xl mx-auto w-fit border-red-200 border">
          {error?.data?.message?.toString() || "Failed to Get Blog!"}
        </p>
      )}

      {/* Print Blogs */}
      {data?.result && (
        <div className="flex flex-col gap-y-6 pt-4 pb-8">
          <div>
            <h1 className="text-2xl font-bold">{data?.result?.title}</h1>
          </div>

          {/* author */}
          <div className="flex items-center gap-x-2">
            <div className="size-10 capitalize">
              {data?.result?.authorImg ? (
                <img
                  src={data?.result?.authorImg}
                  alt="authorImg"
                  className="object-cover rounded-full overflow-hidden"
                />
              ) : (
                <span className="bg-link/30 w-full h-full flex justify-center items-center rounded-full font-bold text-xl">
                  {data?.result?.author.slice(0, 1)}
                </span>
              )}
            </div>

            {/* author name, published Date */}
            <div className="h-fit capitalize">
              <p className="text-[#292929] font-bold">{data?.result?.author}</p>
              <p className="text-[13px] text-link/70 font-semibold">
                {data?.result?.publishedDate}
              </p>
            </div>
          </div>
          {/* coverImg */}
          {/* img */}
          <div className="w-full h-full md:h-[26rem] flex items-start justify-center">
            {data?.result?.coverImg ? (
              <img
                src={data?.result?.coverImg}
                alt={`${data?.result?.title} img`}
                className="object-contain rounded-xl overflow-hidden shadow-sm h-full"
              />
            ) : (
              <img
                src={"/images/fallbackCoverImg.png"}
                alt={`fallback img`}
                className="object-contain rounded-xl overflow-hidden shadow-sm h-full"
              />
            )}
          </div>


          <div className="lg:max-w-4xl mx-auto md:text-lg">
            <p>{data?.result?.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
