/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Tile } from "./Tile";
import { useMapEditor } from "../hooks/useMapEditor"; // 커스텀 훅 임포트

function MapEditor({ selectedTile }) {
  const {
    tiles,
    currentTile,
    editorRef,
    handleMouseMove,
    handleMouseLeave,
    handleCanvasClick,
    Setup,
  } = useMapEditor(selectedTile);

  return (
    <div
      css={mapEditorStyle}
      ref={editorRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCanvasClick}
    >
      <Canvas>
        <OrthographicCamera makeDefault position={[10, 10, 10]} zoom={50} />
        <Setup />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <gridHelper args={[40, 40, "#ffffff", "#ffffff"]} />

        {tiles.map((tile) => (
          <Tile key={tile.id} position={tile.position} image={tile.image} />
        ))}

        {currentTile && (
          <Tile position={currentTile.position} image={currentTile.image} />
        )}
      </Canvas>
    </div>
  );
}

const mapEditorStyle = css`
  flex-grow: 1;
  background-color: #333;
  position: relative;
  height: 100vh;
`;

export default MapEditor;
