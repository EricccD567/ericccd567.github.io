export function displayUI(text, onDisplayEnd) {
  const dialogueUI = document.getElementById('textbox-container');
  const dialogue = document.getElementById('dialogue');

  // <div id="textbox-container" style="display: none">
  //   <div id="textbox">
  //     <p id="dialogue" class="ui-text"></p>
  //     <div class="btn-container">
  //       <button id="close" class="ui-close-btn">Close</button>
  //     </div>
  //   </div>
  // </div>

  // computer console
  // resume skills
  // food bag art music about degree

  dialogueUI.style.display = 'block';

  let index = 0;
  let currentText = '';
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialogue.innerHTML = currentText;
      index++;
      return;
    }

    clearInterval(intervalRef);
  }, 15);

  const closeBtn = document.getElementById('close');

  function onCloseBtnClick() {
    onDisplayEnd();
    dialogueUI.style.display = 'none';
    dialogue.innerHTML = '';
    clearInterval(intervalRef);
    closeBtn.removeEventListener('click', onCloseBtnClick);
  }

  closeBtn.addEventListener('click', onCloseBtnClick);

  addEventListener('keypress', (key) => {
    if (key.code === 'Enter') {
      closeBtn.click();
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
