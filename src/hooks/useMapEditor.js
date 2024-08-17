import { useState, useRef, useCallback } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export const useMapEditor = (selectedTile) => {
  const [tiles, setTiles] = useState([]);
  const [currentTile, setCurrentTile] = useState(null);
  const cameraRef = useRef(null);
  const editorRef = useRef(null);

  const handleMouseMove = useCallback(
    (event) => {
      if (!selectedTile) return;

      // 빈 타일이 선택된 경우 타일 미리보기를 없앰
      if (selectedTile === null) {
        setCurrentTile(null);
        return;
      }

      const rect = editorRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      const mouse = new THREE.Vector2(x, y);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, cameraRef.current);

      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const intersectPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersectPoint);

      const gridSize = 1;
      const snappedX =
        Math.floor(intersectPoint.x / gridSize) * gridSize + gridSize / 2;
      const snappedZ =
        Math.floor(intersectPoint.z / gridSize) * gridSize + gridSize / 2;

      setCurrentTile({
        position: [snappedX, 0, snappedZ],
        image: selectedTile.imageSrc,
      });
    },
    [selectedTile]
  );

  const handleMouseLeave = () => {
    setCurrentTile(null); // 캔버스 영역을 벗어나면 미리보기를 제거
  };

  const handleCanvasClick = useCallback(() => {
    // 빈 타일이 선택된 경우 모든 타일 삭제
    if (selectedTile === null) {
      setTiles([]);
      return;
    }

    if (currentTile) {
      const existingTiles = tiles.filter(
        (tile) =>
          tile.position[0] === currentTile.position[0] &&
          tile.position[2] === currentTile.position[2]
      );

      const newY = existingTiles.length; // 쌓인 타일 수만큼 Y 값을 증가시킴

      setTiles((prevTiles) => [
        ...prevTiles,
        {
          id: prevTiles.length,
          position: [currentTile.position[0], newY, currentTile.position[2]],
          image: currentTile.image,
        },
      ]);

      setCurrentTile(null); // 타일이 고정된 후 현재 드래그 중인 타일 초기화
    }
  }, [currentTile, tiles, selectedTile]);

  const Setup = () => {
    const { camera } = useThree();
    cameraRef.current = camera;
    return null;
  };

  return {
    tiles,
    currentTile,
    editorRef,
    handleMouseMove,
    handleMouseLeave,
    handleCanvasClick,
    Setup,
  };
};
