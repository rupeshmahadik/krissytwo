// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useNavigate,
// } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useEffect, useRef } from "react";
import "../App.css";
import bgMusic from "../assets/music/love_song.mp3";
// 22 Dec
import img2201 from "../assets/memories22Dec/img2201.jpg";
import img2202 from "../assets/memories22Dec/img2202.jpg";
import img2203 from "../assets/memories22Dec/img2203.jpg";
import img2204 from "../assets/memories22Dec/img2204.jpg";
import img2205 from "../assets/memories22Dec/img2205.jpg";
import img2206 from "../assets/memories22Dec/img2206.jpg";
import img2208 from "../assets/memories22Dec/img2208.jpg";
import img2209 from "../assets/memories22Dec/img2209.jpg";
import img2210 from "../assets/memories22Dec/img2210.jpg";
import img2211 from "../assets/memories22Dec/img2211.jpg";
import img2212 from "../assets/memories22Dec/img2212.jpg";
import img2213 from "../assets/memories22Dec/img2213.jpg";
// 1 Jan
import img0101 from "../assets/memories01Jan/img0101.jpg";
import img0104 from "../assets/memories01Jan/img0104.jpg";
import img0105 from "../assets/memories01Jan/img0105.jpg";
import img0107 from "../assets/memories01Jan/img0107.jpg";
import img0108 from "../assets/memories01Jan/img0108.jpg";
import img0110 from "../assets/memories01Jan/img0110.jpg";
import img0111 from "../assets/memories01Jan/img0111.jpg";
import img0113 from "../assets/memories01Jan/img0113.jpg";
import img0117 from "../assets/memories01Jan/img0117.jpg";

// 11 feb
import img1101 from "../assets/memories11feb/img1101.jpg";
import img1102 from "../assets/memories11feb/img1102.jpg";
import img1103 from "../assets/memories11feb/img1103.jpg";
import img1104 from "../assets/memories11feb/img1104.jpg";
import img1105 from "../assets/memories11feb/img1105.jpg";
import img1106 from "../assets/memories11feb/img1106.jpg";
import img1107 from "../assets/memories11feb/img1107.jpg";
import img1108 from "../assets/memories11feb/img1108.jpg";
import img1109 from "../assets/memories11feb/img1109.jpg";

// All

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <motion.img
        key={index}
        src={images[index]}
        alt="Memory"
        className="carousel-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <p className="image-counter">{images.length - index - 1} images left</p>
    </div>
  );
};

const memories1Images = [
  img2201,
  img2202,
  img2203,
  img2204,
  img2205,
  img2206,
  img2208,
  img2209,
  img2210,
  img2211,
  img2212,
  img2213,
];
const memories2Images = [
  img1101,
  img1102,
  img1103,
  img1104,
  img1105,
  img1106,
  img1107,
  img1108,
  img1109,
];

const memories3Images = [
  img0101,
  img0104,
  img0105,
  img0107,
  img0108,
  img0110,
  img0111,
  img0113,
  img0117,
];

// const BackgroundMusic = () => {
//   const audioRef = useRef(null);

//   useEffect(() => {
//     audioRef.current.play();
//   }, []);

//   return <audio ref={audioRef} src={bgMusic} loop autoPlay />;
// };

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={bgMusic} loop />
      {!isPlaying && (
        <button onClick={handlePlayMusic} className="play-music-btn">
          🎵 Play Music
        </button>
      )}
    </div>
  );
};

const preloadImages = (imageArray) => {
  return imageArray.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
  });
};

const Home = () => {
  const navigate = useNavigate();

  const [cachedImages, setCachedImages] = useState([]);

  useEffect(() => {
    const allImages = [
      ...memories1Images,
      ...memories2Images,
      ...memories3Images,
    ];
    setCachedImages(preloadImages(allImages)); // Store preloaded images
  }, []);

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello Snehuuu 💖</h1>
      <p>Happy two-month anniversary! Thank you for coming into my life.</p>
      <button onClick={() => navigate("/memories1")}>
        Click Here, Snehuuu
      </button>
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
      <button onClick={() => navigate("/memories2")}>
        Click Here, Snehuuu
      </button>
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
      <ImageCarousel images={memories3Images} />
      <button onClick={() => navigate("/memories3")}>
        Click Here, Snehuuu
      </button>
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
      <h2>Memories from Feb 11 - Your Surprise Visit 🎂</h2>
      <ImageCarousel images={memories2Images} />
      <button onClick={() => navigate("/finalmessage")}>
        Click Here, Snehuuu
      </button>
    </motion.div>
  );
};

const FinalMessage = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {showConfetti && <Confetti />}
      <h2>Thank You Wifey ❤️</h2>
      <p>
        These two months have been the best of my life. we had happy, sad,
        fun,even angry memories in this two months. we have been hurt too but
        lets not fight much from now on baby and love each other a lot
      </p>
      <p>lets make good and happy memories for a life time FUTURE WIFE</p>
      <p>
        R❤️S <span style={{ color: "blue" }}>#RuhhKayaa</span>
      </p>
      <button
        onClick={() => {
          setShowConfetti(true);
          setTimeout(() => setShowMessage(true), 2000);
        }}
      >
        Click Here to Celebrate, Snehuuu
      </button>
      {showMessage && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="love-note"
        >
          You mean the world to me, Snehuuu. Here's to many more memories
          together. ❤️
        </motion.p>
      )}
      <button onClick={() => navigate("/")}>Home</button>
    </motion.div>
  );
};

function Kseven() {
  return (
    <Router>
      <BackgroundMusic />
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

export default Kseven;
