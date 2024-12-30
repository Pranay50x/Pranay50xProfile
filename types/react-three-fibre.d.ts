// react-three-fiber.d.ts

import { Fog, Color, PointLight } from 'three';
import { Object3DNode } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      color: Object3DNode<Color, typeof Color>;
      fog: Object3DNode<Fog, typeof Fog>;
      pointLight: Object3DNode<PointLight, typeof PointLight>;
    }
  }
}