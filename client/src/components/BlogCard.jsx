import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
    const {
    title,
    description,
    author,
    authorImg,
    category,
    _id,
    content,
    coverImg,
    publishedDate,
    tags,
    readingTime,
    } = item;
    
    const [imgSrc, setImgSrc] = useState(coverImg);

  return (
    <Link to={`/${_id}`}>
      <div className="h-full flex flex-col gap-y-4 bg-white p-4 rounded-xl">
       
       
              {/* img */}
        <div className="h-fit w-full flex items-center justify-center">
          <img
            src={imgSrc}
            alt={`${title} img`}
            onError={() => setImgSrc("/images/fallbackCoverImg.png")}
            className="object-contain rounded-xl overflow-hidden shadow-sm w-full"
          />
        </div>
        
              
              {/* categories */}
        {/* text-link/88 bg-gray-200/75 */}
        <div className="bg-blue-200/60 text-[15px] py-1 px-2 rounded-xl text-blue-600 font-bold w-fit capitalize border-blue-200 border">
          {category}
              </div>
              

        {/* title */}
              <h2 className="text-[#292929] font-bold text-lg">{title}</h2>
              


        {/* content */}
        <p className="text-link">{content}</p>
        {/* author, publishedDate, comments or bookmark */}
              <div className="flex items-center justify-between">
                  {/* author */}
                  <div className="flex items-center gap-x-2">
                      <div className="size-10">
                          <img src={authorImg} alt="authorImg" className="object-cover rounded-full overflow-hidden" />
                      </div>

                      {/* author name, published Date */}
                      <div className="h-fit">
                          <p className="text-[#292929] font-bold">{author}</p>
                          <p className="text-sm text-link/70 font-medium">{publishedDate}</p>
                      </div>
                  </div>

                  {/* bookmarks, comments */}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
