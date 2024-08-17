/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function FilteredTileDisplay({ tiles, onTileClick }) {
  return (
    <div css={spritesContainerStyle}>
      {/* 빈 타일을 선택하여 초기화하는 영역 추가 */}
      <div css={spriteWrapperStyle}>
        <div
          css={spriteImageStyle}
          onClick={() => onTileClick(null)} // 빈 타일 클릭 시 선택 초기화
        />
      </div>

      {tiles.map((tile, index) => (
        <div css={spriteWrapperStyle} key={index}>
          <img
            src={tile.imageSrc}
            alt={`Tile ${index}`}
            css={spriteImageStyle}
            draggable={false}
            onClick={() => onTileClick(tile)} // 타일을 클릭하여 선택
          />
        </div>
      ))}
    </div>
  );
}

const spritesContainerStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 8px;
`;

const spriteWrapperStyle = css`
  width: 64px;
  height: 64px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #444;
  border-radius: 5px;
`;

const spriteImageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

export default FilteredTileDisplay;
