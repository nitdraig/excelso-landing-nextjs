declare module "vanta/dist/vanta.rings.min" {
  import * as THREE from "three";

  // Minimal interface for the Vanta effect
  interface VantaEffectInstance {
    destroy: () => void;
  }

  interface VantaNetworkOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    color?: number;
    backgroundColor?: number;
    mouseControls?: boolean;
    touchControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    points?: number;
    maxDistance?: number;
    // add any other Vanta.NET config options here
    [key: string]: any;
  }

  function VANTA_NET(options: VantaNetworkOptions): VantaEffectInstance;
  export default VANTA_NET;
}
