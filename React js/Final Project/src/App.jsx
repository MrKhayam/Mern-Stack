import React, { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import html2canvas from "html2canvas";

function Home({ setImageUrl, setName, name }) {
  const wallpaperRef = useRef();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const generateWallpaper = async () => {
    if (!name) {
      alert("Please enter a name before generating the wallpaper.");
      return;
    }

    try {
      const wallpaperElement = wallpaperRef.current;
      const canvas = await html2canvas(wallpaperElement, {
        scale: 3,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");
      setImageUrl(imgData);
      navigate("/wallpaper"); // Navigate to the wallpaper page after generation
    } catch (error) {
      console.error("Error generating wallpaper:", error);
      alert(
        "An error occurred while generating the wallpaper. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Wallpaper Designer</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        className="border rounded p-2 mb-4"
      />
      <div
        ref={wallpaperRef}
        className="items-center flex justify-center bg-black"
        style={{
          width: "1920px",
          height: "1080px",
          position: "relative",
          border: "1px solid #ddd",
          fontFamily: "CHARLEY",
        }}
      >
        <img src="./por2.png" alt="Porche" className="absolute w-[40%] top-[600px]" />
        <h1
          style={{
            fontSize: "200px",
            fontFamily: "Charley, Sans Serif",
            color: "#fff", // Change the text color for better contrast
            textAlign: "center",
            width: "100%",
            wordWrap: "break-word",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add shadow for better readability
          }}
        >
          {name}
        </h1>
      </div>
      <button
        onClick={generateWallpaper}
        className="bg-blue-500 text-white rounded p-2 mt-4"
      >
        Generate Wallpaper
      </button>
    </div>
  );
}

function Wallpaper({ imageUrl }) {
  const downloadImage = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "wallpaper.png";
      link.click();
    } else {
      alert("No wallpaper to download. Please go back and generate one.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Your Generated Wallpaper</h1>
      {imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt="Generated Wallpaper"
            className="mb-4"
            style={{ maxWidth: "80%", maxHeight: "80%" }}
          />
          <button
            onClick={downloadImage}
            className="bg-green-500 text-white rounded p-2"
          >
            Download Wallpaper
          </button>
        </>
      ) : (
        <p>No wallpaper generated. Please go back and create one.</p>
      )}
    </div>
  );
}

function App() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home setImageUrl={setImageUrl} setName={setName} name={name} />
          }
        />
        <Route path="/wallpaper" element={<Wallpaper imageUrl={imageUrl} />} />
      </Routes>
    </Router>
  );
}

export default App;
