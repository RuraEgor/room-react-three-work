import React from 'react'


export function Box() {
  return (
    <mesh
      position={[0, .5, 0]}
      scale={1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}
