import React, { useState } from "react";
import SpritesArea from "./components/SpritesArea";
import MapEditor from "./components/MapEditor";

function App() {
  const [selectedTile, setSelectedTile] = useState(null);

  const tiles = [
    { id: 1, imageSrc: process.env.PUBLIC_URL + "/images/Verse8-1.png" },
    { id: 2, imageSrc: process.env.PUBLIC_URL + "/images/Verse8-2.png" },
    { id: 3, imageSrc: process.env.PUBLIC_URL + "/images/Verse8-3.png" },
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SpritesArea tiles={tiles} setSelectedTile={setSelectedTile} />
      <MapEditor selectedTile={selectedTile} />
    </div>
  );
}

export default App;
