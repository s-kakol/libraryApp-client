import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Books from './pages/Books';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
