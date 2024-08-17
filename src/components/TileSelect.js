/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function TileSelect({ tiles, onSelectChange }) {
  return (
    <div css={spritesContainerStyle}>
      <select css={spriteSelectStyle} onChange={onSelectChange}>
        <option value="">-- Select a Tile --</option>
        {tiles.map((tile, index) => (
          <option key={index} value={tile.imageSrc}>
            Tile {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

const spritesContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const spriteSelectStyle = css`
  background-color: #333;
  color: white;
  border: 1px solid #444;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

export default TileSelect;
