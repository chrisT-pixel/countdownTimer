/// <reference types="react-scripts" />

// ensure react han handle mp3 format
declare module '*.mp3' {
    const src: string;
    export default src;
  }
