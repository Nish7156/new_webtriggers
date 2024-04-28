// BlogPost.js
import "./App.css";
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // Get the blog post ID from URL params
  console.log(id);

  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* Fetch and display content for the specified blog post */}
    </div>
  );
}

export default BlogPost;
