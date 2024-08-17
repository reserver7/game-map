/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TileSelect from "./TileSelect";
import FilteredTileDisplay from "./FilteredTileDisplay";
import { useSpritesArea } from "../hooks/useSpritesArea";

function SpritesArea({ tiles, setSelectedTile }) {
  const { filteredTiles, handleSelectChange, handleTileClick } = useSpritesArea(
    tiles,
    setSelectedTile
  );

  return (
    <div css={spritesAreaStyle}>
      <h2 css={spritesTitleStyle}>Sprites</h2>

      {/* 드롭다운 필터 */}
      <TileSelect tiles={tiles} onSelectChange={handleSelectChange} />

      {/* 필터링된 타일을 표시하는 영역 */}
      <FilteredTileDisplay
        tiles={filteredTiles}
        onTileClick={handleTileClick}
      />
    </div>
  );
}

const spritesAreaStyle = css`
  width: 150px;
  background-color: #2c2c2c;
  padding: 15px;
  color: white;
  border-right: 1px solid #444;
`;

const spritesTitleStyle = css`
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  color: #ccc;
`;

export default SpritesArea;
