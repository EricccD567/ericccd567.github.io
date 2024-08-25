import { data } from './constants';

export function displayUI(item, onDisplayEnd) {
  const itemData = data[item];

  const uiBase = document.getElementById(itemData.uiBase);
  uiBase.classList.remove('hidden');

  const ui = document.getElementById(itemData.ui);
  ui.classList.remove('hidden');

  const uiClose = document.getElementById(itemData.uiClose);

  let onClose = () => {};

  switch (item) {
    case 'computer': {
      break;
    }
    case 'console': {
      const link = itemData.content.link;
      break;
    }
    case 'resume': {
      const link = itemData.content.link;

      const uiDisplay = document.getElementById('resume-content');
      uiDisplay.setAttribute('src', link);

      onClose = () => {
        uiDisplay.removeAttribute('src');
      };

      break;
    }
    case 'skills': {
      break;
    }
    case 'degree':
    case 'about':
    case 'bag':
    case 'food':
    case 'music':
    case 'art': {
      const text = itemData.content.text;
      const textLength = text.length;

      const uiText = document.getElementById('dialogue-content');
      let index = 0;
      let currentText = '';
      const intervalRef = setInterval(() => {
        if (index < textLength) {
          let character = text[index];
          if (character === '<') {
            const startingAngleBracketIndex = index++;
            let closingAngleBracketCount = 0;
            for (index; index < textLength; index++) {
              character = text[index];
              if (character === '>') {
                closingAngleBracketCount++;
                if (closingAngleBracketCount === 2) {
                  break;
                }
              }
            }
            currentText += text.slice(startingAngleBracketIndex, index);
            uiText.innerHTML = currentText;
          } else {
            currentText += character;
            uiText.innerHTML = currentText;
            index++;
          }
          return;
        }
        clearInterval(intervalRef);
      }, 25);

      onClose = () => {
        uiText.innerHTML = '';
        clearInterval(intervalRef);
      };

      break;
    }
    default:
      break;
  }

  function onCloseClick() {
    onClose();
    uiClose.removeEventListener('click', onCloseClick);
    ui.classList.add('hidden');
    uiBase.classList.add('hidden');
    onDisplayEnd();
  }

  uiClose.addEventListener('click', onCloseClick);

  addEventListener('keypress', (key) => {
    if (key.code === 'Enter') {
      uiClose.click();
    }
  });
}

export function move(player, direction) {
  const motion =
    direction === 'right' || direction === 'left' ? 'side' : direction;
  if (player.curAnim() !== `walk-${motion}`) {
    player.play(`walk-${motion}`);
  }
  player.direction = direction;
}

export function setCamScale(k) {
  const resizeFactor = k.width() / k.height();
  if (resizeFactor < 1) {
    k.camScale(k.vec2(1));
    return;
  }

  k.camScale(k.vec2(1.5));
}

{
  /*
<div
  style="
    width: 100%;
    display: flex;
    justify-content: space-between;
  "
>
  <p class="ui-text" style="font-size: 2.5rem">JavaScript</p>
  <div>
    <i class="nes-icon is-medium star"></i>
    <i class="nes-icon is-medium star"></i>
    <i class="nes-icon is-medium star"></i>
    <i class="nes-icon is-medium star is-half"></i>
    <i class="nes-icon is-medium star is-transparent"></i>
  </div>
</div>
<div
  style="
    width: 100%;
    display: flex;
    justify-content: space-around;
  "
>
  <p class="ui-text" style="font-size: 2.5rem">Java</p>
  <div>
    <span
      class="ui-text"
      style="font-size: 2.5rem; vertical-align: top"
    >
      2/5
    </span>
    <i class="nes-icon is-medium star"></i>
  </div>
</div>
*/
}

{
  /*
<div
  style="
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  "
>
  <h2 style="font-size: clamp(1.5rem, 3vw, 2.5rem)">
    Tuesday
  </h2>
  <p style="font-size: clamp(0.9rem, 1.8vw, 1.5rem)">
    <strong>2022</strong>
  </p>
  <div
    style="
      font-size: clamp(0.5rem, 1vw, 0.8rem);
      margin-bottom: 0.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.2rem 0.8rem;
    "
  >
    <a class="nes-badge" style="cursor: default">
      <span class="is-dark">Frontend</span>
    </a>
  </div>
  <p
    style="
      font-size: clamp(1rem, 1.2vw, 1.7rem);
      text-align: justify;
      margin-bottom: 0.5rem;
      max-width: 75ch;
    "
  >
    Team task management system. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Atque autem delectus ut
    nihil voluptatem, ratione qui illum, quibusdam natus
    voluptas porro id maxime doloribus ullam, voluptate nemo
    placeat magni quod!
  </p>
  <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
    style="
      cursor: pointer;
      color: inherit;
      text-decoration: underline #212529 solid 2px;
      margin-bottom: 4px;
    "
  >
    GitHub
  </a>
</div>
*/
}
