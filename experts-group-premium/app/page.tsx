'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

function Cube() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[2,2,2]} />
      <meshStandardMaterial color="#2563eb" />
    </mesh>
  );
}

export default function Home(){
  return (
    <div style={{background:'#020617',color:'white',minHeight:'100vh'}}>
      <section style={{padding:'40px'}}>
        <h1>Experts Group</h1>
        <p>ERP & Financial Systems</p>
      </section>

      <div style={{height:'400px'}}>
        <Canvas>
          <ambientLight />
          <Cube />
          <OrbitControls />
        </Canvas>
      </div>

      <a href="https://wa.me/201065539244" target="_blank">
        WhatsApp
      </a>
    </div>
  )
}
