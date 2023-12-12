import { GUI } from 'dat.gui';
import { Vector3 } from 'three';
import ImagePlaneCanvas from './components/ImagePlaneCanvas';

const scene = new ImagePlaneCanvas();
scene.addImagePlanes(50, 30, new Vector3(0, 15, 0));
const button = document.body.querySelector('#change_texture');

const gui = new GUI();

gui.add(scene, 'slideTime', 0.1, 2).name('Slide Time').listen();
gui.add(scene, 'playSlide').name('PLAY');
gui.add(scene, 'stopSlide').name('STOP');
gui.add(scene,'mirror');
gui.open();
