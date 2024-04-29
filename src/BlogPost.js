// BlogPost.js
import "./App.css";
import React from "react";
import { useParams } from "react-router-dom";
import BlogSingleDetails from "./components/Pages/Blogs/BlogDetails/BlogSingleDetails";
import BlogsList from "./components/Pages/Blogs/BlogsList";

function BlogSingle() {
  const { id } = useParams(); // Get the blog post ID from URL params
  console.log(id);

  return (
    <>
    <BlogSingleDetails/>
    </>
  );
}

export default BlogSingle;
