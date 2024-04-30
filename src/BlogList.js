import React, { useLayoutEffect } from "react";
import BlogsList from "./components/Pages/Blogs/BlogsList";
import { Helmet } from "react-helmet";
import { Link, Outlet, useLocation } from "react-router-dom";

function BlogList() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
}, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Blogs</title>
        <meta
          name="description"
          content="Web development is the process of creating and maintaining websites or web applications, involving tasks such as web design, coding, and server management to ensure optimal functionality and user experience."
        />
        <meta
          name="keywords"
          content="web development,Website design,HTML, programming, coding, front-end, back-end, responsive design"
        />
      </Helmet>
    <BlogsList/>
    </>
  );
}

export default BlogList;
