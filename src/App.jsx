
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home.jsx';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import Products from './Components/Products/Products.jsx';
import ProductDetails from './Components/Products/ProductDetails.jsx';
import MediaDetails from './Components/Home/MediaDetails.jsx';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='product/:id' element={<ProductDetails />} />
          <Route path='media/:id' element={<MediaDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
