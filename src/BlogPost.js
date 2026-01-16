import React, { useLayoutEffect } from "react";
import BlogSingleDetails from "./components/Pages/Blogs/BlogDetails/BlogSingleDetails";
import { Helmet } from "react-helmet";
import { useParams, useLocation } from "react-router-dom";

function BlogSingle() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
}, [location.pathname]);

  const { id } = useParams(); // Get the blog post ID from URL params
  
  console.log(id);

  return (
    <>
       <Helmet>
        <title>{id}</title>
        <meta
          name="description"
          content="Web development is the process of creating and maintaining websites or web applications, involving tasks such as web design, coding, and server management to ensure optimal functionality and user experience."
        />
        <meta
          name="keywords"
          content="web development,Website design,HTML, programming, coding, front-end, back-end, responsive design"
        />
      </Helmet>
    <BlogSingleDetails/>
    </>
  );
}

export default BlogSingle;
