import { Component, ReactNode, Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { portfolio, SceneWaypoint } from "@/data/portfolio";

const paper = "#e9e5da";
const graphite = "#12161a";
type SceneProps = { activeSection: string; reducedMotion: boolean; compact: boolean; paused?: boolean };

export function ScrollCameraController({ waypoint, reducedMotion }: { waypoint: SceneWaypoint; reducedMotion: boolean }) {
  const { camera } = useThree();
  const target = useMemo(() => new THREE.Vector3(...waypoint.target), [waypoint]);
  const destination = useMemo(() => new THREE.Vector3(...waypoint.position), [waypoint]);
  const currentLook = useRef(new THREE.Vector3());
  useFrame((_, delta) => {
    const alpha = reducedMotion ? 1 : 1 - Math.exp(-delta * 2.4);
    camera.position.lerp(destination, alpha);
    const look = currentLook.current.set(0, 0, -1).applyQuaternion(camera.quaternion).add(camera.position);
    look.lerp(target, alpha);
    camera.lookAt(look);
  });
  return null;
}

export function FloatingDossier({ position, rotation = [0, 0, 0] }: { position: [number, number, number]; rotation?: [number, number, number] }) {
  return <group position={position} rotation={rotation}>
    <mesh><boxGeometry args={[2.4, 1.35, 0.035]} /><meshStandardMaterial color={graphite} metalness={0.25} roughness={0.65} transparent opacity={0.9} /></mesh>
    <mesh position={[-.72, .48, .04]}><planeGeometry args={[.62, .025]} /><meshBasicMaterial color="#c47b52" transparent opacity={0.8} /></mesh>
    {[0.2, -0.05, -0.3].map((y, index) => <mesh key={y} position={[-0.2 + index * 0.12, y, 0.04]}><planeGeometry args={[1.45 - index * 0.18, 0.018]} /><meshBasicMaterial color={index === 0 ? "#c47b52" : paper} transparent opacity={index === 0 ? 0.75 : 0.18} /></mesh>)}
  </group>;
}

export function PortraitFrame3D() {
  return <group><mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.45, 0.025, 8, 48]} /><meshStandardMaterial color="#c47b52" metalness={0.9} roughness={0.2} emissive="#5d2f1e" emissiveIntensity={0.6} /></mesh><mesh rotation={[Math.PI / 2, 0.45, 0]}><torusGeometry args={[1.82, 0.012, 6, 48]} /><meshBasicMaterial color={paper} transparent opacity={0.23} /></mesh><mesh><icosahedronGeometry args={[0.62, 1]} /><meshStandardMaterial color="#171d22" metalness={0.8} roughness={0.2} wireframe /></mesh><pointLight color="#c47b52" intensity={18} distance={5} /></group>;
}

export function TechObjectCluster() {
  const nodes = useMemo(() => Array.from({ length: 18 }, (_, i) => { const angle = (i / 18) * Math.PI * 2; return [Math.cos(angle) * (2.1 + (i % 3) * 0.23), Math.sin(angle * 2) * 0.9, Math.sin(angle) * (2.1 + (i % 3) * 0.23)] as [number, number, number]; }), []);
  return <group>{nodes.map((position, index) => <mesh key={index} position={position}><octahedronGeometry args={[index % 4 === 0 ? 0.13 : 0.07, 0]} /><meshStandardMaterial color={index % 3 === 0 ? "#8dd5d2" : paper} emissive={index % 3 === 0 ? "#245a59" : "#000000"} /></mesh>)}</group>;
}

export function ProjectDisplayWall() { return <group position={[0, 0, -0.8]}>{portfolio.projects.map((project, index) => <FloatingDossier key={project.id} position={[(index - 1.5) * 1.4, (index % 2) * 0.55 - 0.25, Math.abs(index - 1.5) * -0.35]} rotation={[0, (index - 1.5) * -0.12, 0]} />)}</group>; }
export function ExperienceTimeline3D() {
  const points = useMemo(() => portfolio.experience.map((_, i) => new THREE.Vector3(-2.4 + i * 1.55, Math.sin(i * 1.3) * 0.45, 0)), []);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  return <group position={[0, 0, -0.5]}><mesh><tubeGeometry args={[curve, 24, 0.012, 4, false]} /><meshBasicMaterial color="#c47b52" transparent opacity={0.7} /></mesh>{points.map((point, i) => <mesh key={i} position={point}><sphereGeometry args={[0.1, 10, 10]} /><meshStandardMaterial color={i === 0 ? "#8dd5d2" : paper} emissive={i === 0 ? "#245a59" : "#000"} /></mesh>)}</group>;
}
export function AchievementArchive() { return <group rotation={[0, -0.18, 0]}>{portfolio.achievements.slice(0, 5).map((achievement, i) => <FloatingDossier key={achievement.title} position={[-2.6 + i * 1.3, (i % 2) * 0.7 - 0.35, -Math.abs(2 - i) * 0.45]} />)}</group>; }
export function ContactPortal() { return <group><mesh><torusGeometry args={[1.25, 0.055, 8, 56]} /><meshStandardMaterial color="#8dd5d2" emissive="#245a59" emissiveIntensity={1.2} metalness={0.8} /></mesh><mesh><circleGeometry args={[1.2, 40]} /><meshBasicMaterial color="#8dd5d2" transparent opacity={0.035} side={THREE.DoubleSide} /></mesh></group>; }

export function AmbientParticles({ compact }: { compact: boolean }) {
  const count = compact ? 140 : 300;
  const positions = useMemo(() => { const values = new Float32Array(count * 3); for (let i = 0; i < count; i += 1) { const radius = 4 + ((i * 17) % 80) / 10; const angle = i * 2.399; values[i * 3] = Math.cos(angle) * radius; values[i * 3 + 1] = ((i * 29) % 100) / 10 - 5; values[i * 3 + 2] = Math.sin(angle) * radius; } return values; }, [count]);
  return <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry><pointsMaterial color={paper} size={compact ? 0.018 : 0.025} transparent opacity={0.35} sizeAttenuation /></points>;
}

export function SpatialHeroScene({ activeSection, reducedMotion, compact }: SceneProps) {
  const core = useRef<THREE.Group>(null);
  const waypoint = portfolio.waypoints.find((item) => item.id === activeSection) ?? portfolio.waypoints[0];
  const activeIndex = portfolio.waypoints.findIndex((item) => item.id === waypoint.id);
  const stagePositions: [number, number, number][] = [[2.7, 0.45, -1], [-2.1, 0.1, -0.8], [2.35, 0.2, -1], [0, 0, -1], [-2.2, 0, -1], [0, 0, -1], [2.1, 0.15, -1]];
  useFrame((state, delta) => { if (!core.current || reducedMotion) return; core.current.rotation.y += delta * 0.08; core.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.08; });
  return <><ScrollCameraController waypoint={waypoint} reducedMotion={reducedMotion} /><ambientLight intensity={0.45} /><directionalLight position={[4, 5, 5]} intensity={1.3} color="#e9e5da" /><fog attach="fog" args={["#090b0d", 7, 18]} /><group ref={core} position={compact ? [0.6, 0.9, -1.8] : stagePositions[activeIndex]} scale={compact ? 0.62 : 1}><PortraitFrame3D />{activeIndex === 1 && <FloatingDossier position={[0, 0, 0.2]} />}{activeIndex === 2 && <TechObjectCluster />}{activeIndex === 3 && <ProjectDisplayWall />}{activeIndex === 4 && <ExperienceTimeline3D />}{activeIndex === 5 && <AchievementArchive />}{activeIndex === 6 && <ContactPortal />}</group><AmbientParticles compact={compact} /></>;
}

class SceneErrorBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function SpatialScene({ activeSection, reducedMotion, compact, paused = false }: SceneProps) {
  return <SceneErrorBoundary onError={() => document.documentElement.classList.add("webgl-unavailable")}><Canvas className="spatial-canvas" frameloop={paused ? "never" : "always"} dpr={compact ? [0.75, 1.1] : [1, 1.5]} camera={{ position: [0, 0.2, 7], fov: compact ? 54 : 42 }} gl={{ antialias: !compact, alpha: true, powerPreference: "high-performance" }}><Suspense fallback={null}><SpatialHeroScene activeSection={activeSection} reducedMotion={reducedMotion} compact={compact} /></Suspense></Canvas></SceneErrorBoundary>;
}
