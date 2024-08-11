import { k } from './kaboomCtx';

// vite if in public folder then direct access with ./
k.loadSprite('spritesheet', './spritesheet.png', {
  sliceX: 39, // 624 (img length) / 16
  sliceY: 31, // height
  anims: {},
});
