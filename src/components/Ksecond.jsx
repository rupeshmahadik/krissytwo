import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useState } from "react";
import "../App.css";
import image01 from "../assets/memoriesAll/img01.jpg";

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevImage} className="arrow left">
        ⬅
      </button>
      <motion.img
        key={index}
        src={images[index]}
        alt="Memory"
        className="carousel-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <button onClick={nextImage} className="arrow right">
        ➡
      </button>
    </div>
  );
};

const memories1Images = [
  image01,
  image01,
  image01,
  image01,
  image01,
  image01,
  image01,
  image01,
  image01,
  image01,
];

const memories2Images = [
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
  "img15.jpg",
  "img16.jpg",
  "img17.jpg",
  "img18.jpg",
  "img19.jpg",
  "img20.jpg",
];

const memories3Images = [
  "img21.jpg",
  "img22.jpg",
  "img23.jpg",
  "img24.jpg",
  "img25.jpg",
  "img26.jpg",
  "img27.jpg",
  "img28.jpg",
  "img29.jpg",
  "img30.jpg",
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello Krissy 💖</h1>
      <p>Happy two-month anniversary! Thank you for coming into my life.</p>
      <button onClick={() => navigate("/memories1")}>Click Here, Krissy</button>
    </motion.div>
  );
};

const Memories1 = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="container"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Memories from Dec 22</h2>
      <ImageCarousel images={memories1Images} />
      <button onClick={() => navigate("/memories2")}>Click Here, Krissy</button>
    </motion.div>
  );
};

const Memories2 = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Memories from Jan 1 - Mumbai</h2>
      <ImageCarousel images={memories2Images} />
      <button onClick={() => navigate("/memories3")}>Click Here, Krissy</button>
    </motion.div>
  );
};

const Memories3 = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Memories from Feb 11 - Your Surprise Visit</h2>
      <ImageCarousel images={memories3Images} />
      <button onClick={() => navigate("/finalmessage")}>
        Click Here, Krissy
      </button>
    </motion.div>
  );
};

const FinalMessage = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {showConfetti && <Confetti />}
      <h2>Thank You ❤️</h2>
      <p>These two months have been the best of my life.</p>
      <button onClick={() => setShowConfetti(true)}>
        Click Here to Celebrate, Krissy
      </button>
      <button onClick={() => navigate("/")}>Home</button>
    </motion.div>
  );
};

function Ksecond() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories1" element={<Memories1 />} />
        <Route path="/memories2" element={<Memories2 />} />
        <Route path="/memories3" element={<Memories3 />} />
        <Route path="/finalmessage" element={<FinalMessage />} />
      </Routes>
    </Router>
  );
}

export default Ksecond;
