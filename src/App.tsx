import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Books from './pages/Books';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import BookDetails from './pages/BookDetails';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const App = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:genre" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
    <Footer />
  </div>
);

export default App;
