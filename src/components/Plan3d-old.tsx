import React, { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import type { OrbitControls as OrbitControlsType } from 'three-stdlib'

import { Floor } from '../objects/Floor'
import { Box } from '../objects/Box'


interface IComponentProps {
  isActive: boolean;
}


export const Plan3d = (props: IComponentProps) => {
  const controlsRef = useRef<OrbitControlsType>(null)

  useEffect(() => {
    controlsRef.current?.target0.set(0, 0, 0)
    controlsRef.current?.object.position.set(5, 5, 5)
    controlsRef.current?.update()
  }, [controlsRef.current])

  return (
    <div
      style={{
        visibility: props.isActive ? 'visible' : 'hidden',
        height: '100vh',
        position: 'absolute',
        width: '100%'
      }}
    >
      <Canvas>
        <OrbitControls ref={controlsRef} />
        <ambientLight />
        <pointLight position={[1, 1, -1]} />
        <Floor />
        <Box />
      </Canvas>
    </div>
  )
}
