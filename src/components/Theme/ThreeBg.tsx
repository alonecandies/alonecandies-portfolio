import { Box } from '@chakra-ui/react';
import * as THREE from 'three';
import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { max, min } from 'lodash';

const ThreeBg = ({ children }: { children: ReactNode }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [timestamp, setTimestamp] = useState<number | null>(null);
  const [mouseSpeed, setMouseSpeed] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [totalMouseSpeed, setTotalMouseSpeed] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (timestamp === null) {
        setTimestamp(Date.now());
        setMousePos({ x: event.screenX, y: event.screenY });
        return;
      }

      var now = Date.now();
      var dt = now - timestamp;
      var dx = event.screenX - mousePos.x;
      var dy = event.screenY - mousePos.y;
      setMouseSpeed({ x: Math.round((dx / dt) * 100), y: Math.round((dy / dt) * 100) });

      setTimestamp(now);
      setMousePos({ x: event.screenX, y: event.screenY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos.x, mousePos.y, timestamp]);

  useEffect(
    () =>
      setTotalMouseSpeed(
        Math.sqrt(Math.pow(Math.abs(mouseSpeed.x), 2) + Math.pow(Math.abs(mouseSpeed.y), 2)) / 50000
      ),
    [mouseSpeed, mousePos]
  );

  const ref = useRef<HTMLDivElement>(null);

  const renderer = useMemo(() => {
    if (process.browser) return new THREE.WebGLRenderer({ antialias: true, alpha: true });
  }, []);
  const scene = useMemo(() => {
    if (process.browser) return new THREE.Scene();
  }, []);
  const camera = useMemo(() => {
    if (process.browser)
      return new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  }, []);
  const circle = useMemo(() => {
    if (process.browser) return new THREE.Object3D();
  }, []);
  const skelet = useMemo(() => {
    if (process.browser) return new THREE.Object3D();
  }, []);
  const particle = useMemo(() => {
    if (process.browser) return new THREE.Object3D();
  }, []);

  const onWindowResize = useCallback(() => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, [camera, renderer]);

  const init = useCallback(() => {
    renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);
    ref.current && ref.current.appendChild(renderer.domElement);

    camera.position.z = 400;
    scene.add(camera);

    scene.add(circle);
    scene.add(skelet);
    scene.add(particle);

    var geometry = new THREE.TetrahedronGeometry(2, 0);

    var material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
    });

    for (var i = 0; i < 100; i++) {
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      mesh.position.multiplyScalar(90 + Math.random() * 700);
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
      particle.add(mesh);
    }

    var geom = new THREE.IcosahedronGeometry(7, 2);
    var geom2 = new THREE.IcosahedronGeometry(15, 3);

    var mat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
    });

    var mat2 = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      wireframe: true,
      side: THREE.DoubleSide,
    });

    var planet = new THREE.Mesh(geom, mat);
    planet.scale.x = planet.scale.y = planet.scale.z = 16;
    planet.position.x = planet.position.y = planet.position.z = 75;
    circle.add(planet);

    var planet2 = new THREE.Mesh(geom2, mat2);
    planet2.scale.x = planet2.scale.y = planet2.scale.z = 9;
    planet2.position.x = planet2.position.y = planet2.position.z = 75;
    skelet.add(planet2);

    var ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    var lights = [];
    lights[0] = new THREE.DirectionalLight(0xffffff, 1);
    lights[0].position.set(1, 0, 0);
    lights[1] = new THREE.DirectionalLight(0x11e8bb, 1);
    lights[1].position.set(0.75, 1, 0.5);
    lights[2] = new THREE.DirectionalLight(0x8200c9, 1);
    lights[2].position.set(-0.75, -1, 0.5);
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);

    window.addEventListener('resize', onWindowResize, false);
  }, [camera, circle, onWindowResize, particle, renderer, scene, skelet]);

  const animate = useCallback(() => {
    requestAnimationFrame(animate);
    particle.rotation.x -= min([totalMouseSpeed / 4, 0.0001]) || 0.0001;
    particle.rotation.y -= min([totalMouseSpeed / 3, 0.0002]) || 0.0002;
    particle.rotation.z -= min([totalMouseSpeed / 2, 0.0003]) || 0.0003;
    circle.rotation.x -= min([totalMouseSpeed / 5, 0.0001]) || 0.0001;
    circle.rotation.y -= min([totalMouseSpeed / 4, 0.00015]) || 0.00015;
    circle.rotation.z -= min([totalMouseSpeed / 3, 0.0002]) || 0.0002;
    skelet.rotation.x -= min([totalMouseSpeed / 5, 0.0001]) || 0.0001;
    skelet.rotation.y -= min([totalMouseSpeed / 4, 0.00015]) || 0.00015;
    skelet.rotation.z -= min([totalMouseSpeed / 3, 0.0002]) || 0.0002;
    renderer.clear();
    renderer.render(scene, camera);
  }, [camera, circle, particle, renderer, scene, skelet, totalMouseSpeed]);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    animate();
    console.log(totalMouseSpeed);
  }, [animate, totalMouseSpeed]);

  return (
    <Box ref={ref} position="relative" zIndex={-1}>
      {children}
    </Box>
  );
};

export default ThreeBg;
