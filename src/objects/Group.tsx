import React, { useEffect, useRef } from 'react';
import Floar from './Floar';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Texture, RepeatWrapping, MeshBasicMaterial } from 'three';
import { useWallsParam } from '../hooks/useWallsParam';
import { ICoord, IWall, IWallParam } from '../models/models';
import * as THREE from 'three';
import {Vector3} from 'three';

interface IGroup {
	floarThick: number
	width: number
	wallsParams: IWall[]
	pointCoords: ICoord[]
}

export default function Group({floarThick, width, wallsParams, pointCoords}: IGroup) {
	const textBrick: Texture = useLoader(TextureLoader, './bricks.jpg');
	textBrick.wrapS = textBrick.wrapT = RepeatWrapping;
	textBrick.repeat.set( 5, 2 );

	const textBrickTop: Texture = useLoader(TextureLoader, './bricks-top.jpg');
	textBrickTop.wrapS = textBrickTop.wrapT = RepeatWrapping;
	textBrickTop.repeat.set( 5, 0.35 );

	const textBrickEdge: Texture = useLoader(TextureLoader, './bricks-edge.jpg');
	textBrickEdge.wrapS = textBrickEdge.wrapT = RepeatWrapping;
	textBrickEdge.repeat.set( 0.35, 2 );
	
	let masWalls: IWallParam[] = [];
	const groupRef = useRef<THREE.Group>(null);
	
	masWalls = useWallsParam(wallsParams, groupRef);
	
	return (
		<group ref={groupRef}>
			{masWalls.map( (el: any) => (
				<mesh
					key={el.id}
					position={el.position}
					rotation={el.rotation}
					material={[
						new MeshBasicMaterial({ map: textBrickEdge }),
						new MeshBasicMaterial({ map: textBrickEdge }),
						new MeshBasicMaterial({ map: textBrickTop }),
						new MeshBasicMaterial({ map: textBrickTop }),
						new MeshBasicMaterial({ map: textBrick }),
						new MeshBasicMaterial({ map: textBrick }),
					]}>
					<boxGeometry args={el.param} />
				</mesh>)
			)}
			<Floar floarThick={floarThick} width={width} pointCoords={pointCoords} />
		</group>
	)
}
