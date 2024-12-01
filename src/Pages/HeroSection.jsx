import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BarChart2, Lock, Zap } from 'lucide-react';
import * as THREE from 'three';

const NetworkNode = () => {
  const mountRef = useRef(null);
  const [animationFrameId, setAnimationFrameId] = useState(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create nodes
    const nodes = [];
    const nodeCount = 50;
    const geometry = new THREE.SphereGeometry(0.1, 16, 16);
    const material = new THREE.MeshPhongMaterial({
      color: 0x4299e1,
      specular: 0x555555,
      shininess: 30
    });

    // Particle System
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x4299e1,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Add geometric shapes
    const shapes = [];
    const geometries = [
      new THREE.OctahedronGeometry(0.5),
      new THREE.TetrahedronGeometry(0.5),
      new THREE.IcosahedronGeometry(0.5),
      new THREE.DodecahedronGeometry(0.5)
    ];

    const shapeMaterials = [
      new THREE.MeshPhongMaterial({ color: 0x4299e1, transparent: true, opacity: 0.7 }),
      new THREE.MeshPhongMaterial({ color: 0x48bb78, transparent: true, opacity: 0.7 }),
      new THREE.MeshPhongMaterial({ color: 0xf56565, transparent: true, opacity: 0.7 }),
      new THREE.MeshPhongMaterial({ color: 0xed8936, transparent: true, opacity: 0.7 })
    ];

    for (let i = 0; i < 4; i++) {
      const shape = new THREE.Mesh(geometries[i], shapeMaterials[i]);
      shape.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      shape.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: Math.random() * 0.01,
        floatOffset: Math.random() * Math.PI * 2
      };
      shapes.push(shape);
      scene.add(shape);
    }

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 10;
      mesh.position.y = (Math.random() - 0.5) * 10;
      mesh.position.z = (Math.random() - 0.5) * 10;
      mesh.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )
      };
      nodes.push(mesh);
      scene.add(mesh);
    }

    // Energy field effect
    const energyGeometry = new THREE.TorusGeometry(5, 0.1, 16, 100);
    const energyMaterial = new THREE.MeshPhongMaterial({
      color: 0x4299e1,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide
    });
    const energyField = new THREE.Mesh(energyGeometry, energyMaterial);
    scene.add(energyField);

    // Create connections
    const connections = [];
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4299e1,
      transparent: true,
      opacity: 0.3
    });

    function updateConnections() {
      connections.forEach(line => scene.remove(line));
      connections.length = 0;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.distanceTo(nodes[j].position);
          if (distance < 3) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              nodes[i].position,
              nodes[j].position
            ]);
            const line = new THREE.Line(geometry, lineMaterial);
            connections.push(line);
            scene.add(line);
          }
        }
      }
    }

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x4299e1, 0.8);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    camera.position.z = 8;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    function onMouseMove(event) {
      mouse.x = (event.clientX - windowHalfX) / 100;
      mouse.y = (event.clientY - windowHalfY) / 100;
    }

    window.addEventListener('mousemove', onMouseMove);

    // Animation
    let time = 0;
    function animate() {
      const frameId = requestAnimationFrame(animate);
      setAnimationFrameId(frameId);
      time += 0.01;

      // Update nodes
      nodes.forEach(node => {
        node.position.add(node.userData.velocity);
        ['x', 'y', 'z'].forEach(axis => {
          if (Math.abs(node.position[axis]) > 5) {
            node.userData.velocity[axis] *= -1;
          }
        });
      });

      // Animate shapes
      shapes.forEach(shape => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        // Floating animation
        shape.position.y += Math.sin(time + shape.userData.floatOffset) * shape.userData.floatSpeed;
      });

      // Animate energy field
      energyField.rotation.x = time * 0.2;
      energyField.rotation.y = time * 0.1;
      energyField.material.opacity = 0.2 + Math.sin(time) * 0.1;

      // Animate particle system
      particleSystem.rotation.y += 0.0005;
      const positions = particles.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i]) * 0.001;
      }
      particles.attributes.position.needsUpdate = true;

      // Rotate based on mouse position
      scene.rotation.x += (mouse.y - scene.rotation.x) * 0.05;
      scene.rotation.y += (mouse.x - scene.rotation.y) * 0.05;

      updateConnections();
      renderer.render(scene, camera);
    }

    // Handle window resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

// Rest of the HeroSection component remains exactly the same
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Innovative Solutions",
      description: "Empowering businesses with cutting-edge technology",
      icon: <Zap className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Data-Driven Insights",
      description: "Transform your decision-making with advanced analytics",
      icon: <BarChart2 className="w-12 h-12 text-green-500" />,
    },
    {
      title: "Secure Infrastructure",
      description: "Protect your assets with state-of-the-art cybersecurity",
      icon: <Lock className="w-12 h-12 text-red-500" />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-r from-gray-900/90 to-gray-800/90 overflow-hidden">
      <NetworkNode />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
            K Labs Technology And Solutions
            <br />
            Shaping Tomorrow's Technology
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-center mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Delivering enterprise-grade solutions that drive innovation and accelerate growth.
        </motion.p>

        <div className="w-full max-w-4xl mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              {slides[currentSlide].icon}
              <div className="ml-6">
                <h2 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h2>
                <p className="text-gray-300">{slides[currentSlide].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.a
          href="https://www.klabsindia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-md overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Visit K Labs</span>
          <ExternalLink className="ml-2 w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;