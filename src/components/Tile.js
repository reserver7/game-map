import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export function Tile({ position, image }) {
  const texture = useLoader(THREE.TextureLoader, image);

  return (
    <sprite position={position} scale={[1.5, 1.5, 1]}>
      <spriteMaterial map={texture} />
    </sprite>
  );
}
