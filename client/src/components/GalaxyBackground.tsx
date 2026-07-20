import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function GalaxyBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 100;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 1);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create galaxy particles
    const particleCount = 5000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Create spiral galaxy pattern
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 200;
      const height = (Math.random() - 0.5) * 100;

      positions[i] = Math.cos(angle) * distance;
      positions[i + 1] = height;
      positions[i + 2] = Math.sin(angle) * distance;

      // Color variation: cyan, blue, purple
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        // Cyan
        colors[i] = 0;
        colors[i + 1] = 0.85;
        colors[i + 2] = 1;
      } else if (colorChoice < 0.7) {
        // Blue
        colors[i] = 0;
        colors[i + 1] = 0.4;
        colors[i + 2] = 1;
      } else {
        // Purple
        colors[i] = 0.6;
        colors[i + 1] = 0;
        colors[i + 2] = 1;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Add nebula-like glow with multiple layers
    const nebulaMaterial = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      transparent: true,
      opacity: 0.1,
    });

    const nebulaGeometry = new THREE.IcosahedronGeometry(150, 4);
    const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    // Add second nebula layer
    const nebulaMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x9d00ff,
      transparent: true,
      opacity: 0.08,
    });
    const nebula2 = new THREE.Mesh(nebulaGeometry, nebulaMaterial2);
    nebula2.scale.set(0.7, 0.7, 0.7);
    scene.add(nebula2);

    // Handle scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgressRef.current = docHeight > 0 ? scrollTop / docHeight : 0;
    };

    window.addEventListener('scroll', handleScroll);

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotate particles
      if (particles) {
        particles.rotation.x += 0.0001;
        particles.rotation.y += 0.0002;
      }

      // Rotate nebula
      nebula.rotation.x += 0.00005;
      nebula.rotation.y += 0.0001;
      nebula2.rotation.x -= 0.00003;
      nebula2.rotation.y -= 0.00008;

      // Camera movement based on scroll
      const scrollProgress = scrollProgressRef.current;
      camera.position.z = 100 - scrollProgress * 50;
      camera.position.x = Math.sin(scrollProgress * Math.PI) * 20;
      camera.position.y = Math.cos(scrollProgress * Math.PI * 0.5) * 15;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      nebulaMaterial.dispose();
      nebulaMaterial2.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
