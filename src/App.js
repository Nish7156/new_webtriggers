import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Layout from "./components/Layout";
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import Terms from './components/Pages/Terms/Terms';
import Refund from './components/Pages/Refund/Refund';
import Privacy from './components/Pages/Privacy/Privacy';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
