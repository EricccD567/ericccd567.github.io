import { bgColor, scaleFactor } from './constants';
import { k } from './kaboomCtx';
import { displayUI, move, setCamScale } from './utils';

// vite: have direct access to public folder with ./
k.loadSprite('player', './spritesheet-player.png', {
  sliceX: 4, // width 64 / 16
  sliceY: 6, // height 96 / 16
  anims: {
    'idle-down': { from: 0, to: 3, loop: true, speed: 7 },
    'idle-up': { from: 4, to: 7, loop: true, speed: 7 },
    'idle-side': { from: 8, to: 11, loop: true, speed: 7 },
    'walk-down': { from: 12, to: 15, loop: true, speed: 7 },
    'walk-up': { from: 16, to: 19, loop: true, speed: 7 },
    'walk-side': { from: 20, to: 23, loop: true, speed: 7 },
  },
});

k.loadSprite('map', './map.png');

k.setBackground(k.Color.fromHex(bgColor));

k.setCursor('url(./cursor.png), auto');

k.scene('main', async () => {
  const mapData = await (await fetch('./map.json')).json();
  const layers = mapData.layers;

  const map = k.add([k.sprite('map'), k.pos(0), k.scale(scaleFactor)]);

  const player = k.make([
    k.sprite('player', { anim: 'idle-down' }),
    k.anchor('center'),
    k.area({
      shape: new k.Rect(k.vec2(0, 4), 9, 10),
    }),
    k.body(),
    k.pos(),
    k.scale(scaleFactor),
    {
      speed: 250,
      direction: 'down',
      isInUI: false,
    },
    'player',
  ]);

  for (const layer of layers) {
    if (layer.name === 'boundaries') {
      for (const boundary of layer.objects) {
        if (!Object.hasOwn(boundary, 'polygon')) {
          map.add([
            k.area({
              shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
            }),
            k.body({ isStatic: true }),
            k.pos(boundary.x, boundary.y),
            boundary.name,
            boundary.type,
          ]);
        } else {
          const polygonVecs = boundary.polygon.map((vec) =>
            k.vec2(vec.x, vec.y)
          );
          map.add([
            k.area({
              shape: new k.Polygon(polygonVecs),
            }),
            k.body({ isStatic: true }),
            k.pos(boundary.x, boundary.y),
            boundary.name,
            boundary.type,
          ]);
        }

        if (boundary.type === 'interactive') {
          player.onCollide(boundary.name, () => {
            player.isInUI = true;
            displayUI(boundary.name, () => (player.isInUI = false));
          });
        }
      }
      continue;
    }

    if (layer.name === 'spawnpoints') {
      for (const entity of layer.objects) {
        if (entity.name === 'player') {
          player.pos = k.vec2(
            (map.pos.x + entity.x) * scaleFactor,
            (map.pos.y + entity.y) * scaleFactor
          );
          k.add(player);
          continue;
        }
      }
    }
  }

  setCamScale(k);

  k.onResize(() => {
    setCamScale(k);
  });

  k.onUpdate(() => {
    k.camPos(player.pos.x, player.pos.y + 75);
  });

  k.onMouseDown((mouseBtn) => {
    if (mouseBtn !== 'left' || player.isInUI) return;

    const worldMousePos = k.toWorld(k.mousePos());
    player.moveTo(worldMousePos, player.speed);

    const mouseAngle = player.pos.angle(worldMousePos);

    const lowerBound = 50;
    const upperBound = 130;

    if (mouseAngle > lowerBound && mouseAngle < upperBound) {
      move(player, 'up');
      return;
    }

    if (mouseAngle < -lowerBound && mouseAngle > -upperBound) {
      move(player, 'down');
      return;
    }

    if (Math.abs(mouseAngle) > upperBound) {
      player.flipX = false;
      move(player, 'right');
      return;
    }

    if (Math.abs(mouseAngle) < lowerBound) {
      player.flipX = true;
      move(player, 'left');
      return;
    }
  });

  k.onKeyDown((key) => {
    if (player.isInUI) return;

    const keyMap = [
      k.isKeyDown('up'),
      k.isKeyDown('down'),
      k.isKeyDown('right'),
      k.isKeyDown('left'),
    ];

    const keyPressedCount = keyMap.reduce((accumulator, currentValue) => {
      if (currentValue) accumulator++;
      return accumulator;
    }, 0);

    if (keyPressedCount > 1) return;

    if (keyMap[0]) {
      move(player, 'up');
      player.move(0, -player.speed);
      return;
    }

    if (keyMap[1]) {
      move(player, 'down');
      player.move(0, player.speed);
      return;
    }

    if (keyMap[2]) {
      player.flipX = false;
      move(player, 'right');
      player.move(player.speed, 0);
      return;
    }

    if (keyMap[3]) {
      player.flipX = true;
      move(player, 'left');
      player.move(-player.speed, 0);
      return;
    }
  });

  function onRelease() {
    if (player.direction === 'down') {
      player.play('idle-down');
    } else if (player.direction === 'up') {
      player.play('idle-up');
    } else {
      player.play('idle-side');
    }
  }

  k.onMouseRelease(onRelease);
  k.onKeyRelease(onRelease);
});

k.go('main');
