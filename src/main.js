import { k } from './kaboomCtx';

// with vite, if in public folder then have direct access with ./
k.loadSprite('spritesheet', './spritesheet-player.png', {
  sliceX: 4, // width 64 / 16
  sliceY: 6, // height 96 / 16
  anims: {
    // play around with speed
    'idle-down': { from: 0, to: 3, loop: true, speed: 8 },
    'idle-up': { from: 4, to: 7, loop: true, speed: 8 },
    'idle-side': { from: 8, to: 11, loop: true, speed: 8 },
    'walk-down': { from: 12, to: 15, loop: true, speed: 8 },
    'walk-up': { from: 16, to: 19, loop: true, speed: 8 },
    'walk-side': { from: 20, to: 23, loop: true, speed: 8 },
  },
});
