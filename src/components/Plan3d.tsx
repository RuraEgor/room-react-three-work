import React, { useRef, useEffect, Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import type { OrbitControls as OrbitControlsType } from 'three-stdlib'
import { Color } from 'three'
import { wallsParams, pointCoords } from '../data/coords'
import Group from '../objects/Group';


interface IComponentProps {
	isActive: boolean;
}


export const Plan3d = (props: IComponentProps) => {
	const controlsRef = useRef<OrbitControlsType>(null);
	const [background, setBackground] = useState<Color | null>(null);
	
	useEffect(() => {
		controlsRef.current?.target0.set(0, 0, 0);
		controlsRef.current?.object.position.set(0, 10, 15);
		controlsRef.current?.update();
	}, [controlsRef.current]);
	
	useEffect(() => {
		if (background)	background.set(0x261414);
	}, [background]);
	
	
	const floarThick: number = 0.4;
	const width: number = 0.4;
	
	return (
		<div
			style={{
				visibility: props.isActive ? 'visible' : 'hidden',
				height: '100vh',
				position: 'absolute',
				width: '100%'
			}}
		>
			<Suspense fallback={null}>
				<Canvas linear flat>
					<color
						ref={setBackground}
						attach="background"
					/>
					<OrbitControls ref={controlsRef}/>
					<Group floarThick={floarThick} width={width} pointCoords={pointCoords} wallsParams={wallsParams}/>
				</Canvas>
			</Suspense>
		</div>
	)
}
