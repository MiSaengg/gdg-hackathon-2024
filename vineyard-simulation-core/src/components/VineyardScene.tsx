import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const VineyardScene = () => {
    const [grapeColor, setGrapeColor] = useState('purple');
    const [timeFlow, setTimeFlow] = useState(false);

    const toggleTimeFlow = () => setTimeFlow(!timeFlow);

    return (
        <>
            {/* <button onClick={toggleTimeFlow} style={{ position: 'absolute', top: '10px', left: '10px' }}>
                {timeFlow ? 'Stop Time Flow' : 'Start Time Flow'}
            </button> */}
            <Canvas camera={{ position: [0, 10, 20], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Sun timeFlow={timeFlow} />
                <Ground />
                <VineyardRows grapeColor={grapeColor} />
                <River />
                <OrbitControls />
            </Canvas>
        </>
    );
};

// Ground plane
const Ground = () => (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[100, 100]} /> {/* Changed from planeBufferGeometry to planeGeometry */}
        <meshStandardMaterial color="green" />
    </mesh>
);

// Sun with time flow effect
const Sun = ({ timeFlow }: { timeFlow: boolean }) => {
    const sunRef = useRef<THREE.Mesh>(null!);
    useFrame(({ clock }) => {
        if (timeFlow && sunRef.current) {
            sunRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.1) * 20;
            sunRef.current.position.y = Math.cos(clock.getElapsedTime() * 0.1) * 10 + 10;
        }
    });

    return (
        <mesh ref={sunRef} position={[0, 10, 10]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color="yellow" />
        </mesh>
    );
};

// Vineyard rows with grape clusters
const VineyardRows = ({ grapeColor }: { grapeColor: string }) => {
    const vineTrees = [];
    const rowLength = 20; // Wider vineyard
    const rowCount = 15;

    for (let row = 0; row < rowCount; row++) {
        for (let i = 0; i < rowLength; i++) {
            const x = i * 2 - (rowLength * 2) / 2;
            const z = row * 4 - (rowCount * 2);
            const height = Math.random() * 0.5 + 1.5;
            vineTrees.push(<VineTree key={`${row}-${i}`} position={[x, height, z]} grapeColor={grapeColor} />);
        }
    }

    return <group>{vineTrees}</group>;
};

// Single vine tree with a grape cluster
const VineTree = ({ position, grapeColor }: { position: [number, number, number]; grapeColor: string }) => (
    <group position={position}>
        <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
            <meshStandardMaterial color="brown" />
        </mesh>
        <mesh position={[0, 1, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color={grapeColor} />
        </mesh>
    </group>
);

// River component with basic flow effect
const River = () => {
    const riverRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (riverRef.current) {
            riverRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
        }
    });

    return (
        <mesh ref={riverRef} position={[0, 0.05, -10]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[40, 5]} /> {/* Changed from planeBufferGeometry to planeGeometry */}
            <meshStandardMaterial color="skyblue" transparent opacity={0.8} />
        </mesh>
    );
};

export default VineyardScene;
