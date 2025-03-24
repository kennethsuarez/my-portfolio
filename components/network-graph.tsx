"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

export default function NetworkGraph() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Setup
    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Nodes and connections
    const nodes: THREE.Mesh[] = []
    const connections: THREE.Line[] = []
    const nodeCount = 30
    const connectionCount = 40

    // Create nodes (spheres)
    const sphereGeometry = new THREE.SphereGeometry(0.05, 16, 16)

    for (let i = 0; i < nodeCount; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5),
      })

      const sphere = new THREE.Mesh(sphereGeometry, material)

      // Random position within a sphere
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const radius = Math.random() * 2 + 1

      sphere.position.x = radius * Math.sin(phi) * Math.cos(theta)
      sphere.position.y = radius * Math.sin(phi) * Math.sin(theta)
      sphere.position.z = radius * Math.cos(phi)

      scene.add(sphere)
      nodes.push(sphere)
    }

    // Create connections (lines)
    for (let i = 0; i < connectionCount; i++) {
      const startNode = nodes[Math.floor(Math.random() * nodes.length)]
      const endNode = nodes[Math.floor(Math.random() * nodes.length)]

      if (startNode !== endNode) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([startNode.position, endNode.position])

        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x8888ff,
          transparent: true,
          opacity: 0.5,
        })

        const line = new THREE.Line(lineGeometry, lineMaterial)
        scene.add(line)
        connections.push(line)
      }
    }

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    let targetRotationX = 0
    let targetRotationY = 0

    const handleMouseMove = (event: MouseEvent) => {
      // Get mouse position relative to the container
      const rect = container.getBoundingClientRect()
      mouseX = ((event.clientX - rect.left) / width) * 2 - 1
      mouseY = -((event.clientY - rect.top) / height) * 2 + 1

      targetRotationX = mouseY * 0.5
      targetRotationY = mouseX * 0.5
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate based on mouse position
      scene.rotation.x += (targetRotationX - scene.rotation.x) * 0.05
      scene.rotation.y += (targetRotationY - scene.rotation.y) * 0.05

      // Slowly rotate when no mouse movement
      scene.rotation.x += 0.001
      scene.rotation.y += 0.001

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return

      const newWidth = containerRef.current.clientWidth
      const newHeight = containerRef.current.clientHeight

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()

      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose geometries and materials
      sphereGeometry.dispose()
      nodes.forEach((node) => {
        if (node.material instanceof THREE.Material) {
          node.material.dispose()
        }
      })

      connections.forEach((connection) => {
        if (connection.geometry) {
          connection.geometry.dispose()
        }
        if (connection.material instanceof THREE.Material) {
          connection.material.dispose()
        }
      })
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[300px] rounded-lg overflow-hidden"
      style={{ aspectRatio: "16/9" }}
    />
  )
}

