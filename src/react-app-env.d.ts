/// <reference types="react-scripts" />

// ensure react can handle mp3 format
declare module '*.mp3' {
    const src: string;
    export default src;
  }
