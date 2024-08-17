import { useState, useCallback } from "react";

export const useSpritesArea = (tiles, setSelectedTile) => {
  const [filteredTiles, setFilteredTiles] = useState(tiles);

  const handleSelectChange = useCallback(
    (e) => {
      const selectedValue = e.target.value;
      if (selectedValue) {
        const selectedTile = tiles.find(
          (tile) => tile.imageSrc === selectedValue
        );
        setFilteredTiles([selectedTile]); // 선택된 타일만 필터링
      } else {
        setFilteredTiles(tiles); // 초기화 시 전체 타일 표시
      }
      setSelectedTile(null); // 선택된 타일 초기화
    },
    [tiles, setSelectedTile]
  );

  const handleTileClick = useCallback(
    (tile) => {
      setSelectedTile(tile);
    },
    [setSelectedTile]
  );

  return {
    filteredTiles,
    handleSelectChange,
    handleTileClick,
  };
};
