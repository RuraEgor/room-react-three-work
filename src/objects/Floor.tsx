import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'


export function Floor() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  // tslint:disable-next-line:no-console
  console.log("THREE.Mesh-second", THREE.Mesh )

  useEffect(() => {
    // tslint:disable-next-line:no-console
    console.log("THREE.Mesh", THREE.Mesh )
    meshRef.current.rotation.x = -Math.PI / 2
  }, [meshRef.current])

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      scale={1000}
    >
      <planeGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'gray'} />
    </mesh>
  )
}
