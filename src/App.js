import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Layout from "./components/Layout";
import BlogList from './BlogList';
import BlogPost from './BlogPost'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
