import { mainData } from './constants';

export function displayUI(item, onDisplayEnd) {
  if (item === 'console') return;

  const itemData = mainData[item];

  const uiBase = document.getElementById(itemData.uiBase);
  uiBase.classList.remove('hidden');

  const ui = document.getElementById(itemData.ui);
  if (item !== 'computer') ui.classList.remove('hidden');

  const uiClose = document.getElementById(itemData.uiClose);

  let onClose = () => {};

  switch (item) {
    case 'computer': {
      const uiBoot = document.getElementById('boot');
      uiBoot.classList.remove('hidden');

      const progressBar = document.getElementById('progress-bar');
      const intervalRef = setInterval(() => {
        const progress = parseInt(progressBar.getAttribute('value'));
        if (progress < 100) {
          progressBar.setAttribute('value', (progress + 1).toString());
          return;
        }
        uiBoot.classList.add('hidden');
        progressBar.setAttribute('value', '0');
        ui.classList.remove('hidden');
        clearInterval(intervalRef);
      }, 7);

      const uiNavbarDesktop = document.getElementById('computer-menu-desktop');
      const uiNavbarMobile = document.getElementById('computer-menu-mobile');

      const mediaQuery = window.matchMedia('(min-width: 30em)');

      const handleUINavbar = (mq) => {
        if (mq.matches) {
          uiNavbarDesktop.classList.remove('hidden');
          uiNavbarMobile.classList.add('hidden');
        } else {
          uiNavbarDesktop.classList.add('hidden');
          uiNavbarMobile.classList.remove('hidden');
        }
      };

      handleUINavbar(mediaQuery);

      const updateUINavbar = (e) => {
        handleUINavbar(e);
      };

      mediaQuery.addEventListener('change', updateUINavbar);

      const uiNavbarDesktopProjects = document.getElementById(
        'menu-desktop-projects'
      );
      const uiNavbarDesktopExperience = document.getElementById(
        'menu-desktop-experience'
      );
      const uiNavbarMobileProjects = document.getElementById(
        'menu-mobile-projects'
      );
      const uiNavbarMobileExperience = document.getElementById(
        'menu-mobile-experience'
      );

      const uiProjects = document.getElementById('projects-content');
      const uiExperience = document.getElementById('experience-content');

      const clickProjects = () => {
        uiProjects.style.zIndex = '2';
        uiExperience.style.zIndex = '1';
      };
      const clickExperience = () => {
        uiProjects.style.zIndex = '1';
        uiExperience.style.zIndex = '2';
      };

      uiNavbarDesktopProjects.addEventListener('click', clickProjects);
      uiNavbarMobileProjects.addEventListener('click', clickProjects);

      uiNavbarDesktopExperience.addEventListener('click', clickExperience);
      uiNavbarMobileExperience.addEventListener('click', clickExperience);

      const projectsArray = itemData.content.projects;
      const experienceArray = itemData.content.experience;

      const projectsCount = projectsArray.length;
      const uiProjectsCount = document.getElementById('projects-count');
      uiProjectsCount.innerText = projectsCount.toString();

      const experienceCount = experienceArray.length;
      const uiExperienceCount = document.getElementById('experience-count');
      uiExperienceCount.innerText = experienceCount.toString();

      const handleTasksArray = (tasksArray) => {
        const tasksHTML = tasksArray.reduce((accumulator, currentValue) => {
          const name = currentValue.name;
          const year = currentValue.year;
          const tags = currentValue.tags;
          const tagsHTML = tags.reduce((acc1, cv1) => {
            acc1 += `
              <a class="nes-badge" style="cursor: default">
                <span class="is-dark">${cv1}</span>
              </a>
            `;
            return acc1;
          }, '');
          const description = currentValue.description;
          const links = currentValue.links;
          const linksHTML = links.reduce((acc2, cv2) => {
            const host = cv2.host;
            const link = cv2.link;
            acc2 += `
              <a
                href="${link}"
                target="_blank"
                rel="noopener noreferrer"
                style="
                  cursor: pointer;
                  font-size: clamp(0.9rem, 1.8vw, 1.5rem);
                  color: inherit;
                  text-decoration: underline #212529 solid 2px !important;
                  margin-bottom: 6px;
                "
              >
                ${host}
              </a>
            `;
            return acc2;
          }, '');
          accumulator += `
            <div
              style="
                margin-bottom: 2rem;
                display: flex;
                flex-direction: column;
                align-items: center;
              "
            >
              <h2
                style="
                  font-size: clamp(1.5rem, 3vw, 2.5rem);
                  text-align: center;
                "
              >
                ${name}
              </h2>
              <p style="font-size: clamp(0.9rem, 1.8vw, 1.5rem)">
                <strong>${year}</strong>
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
                ${tagsHTML}
              </div>
              <p
                style="
                  font-size: clamp(0.9rem, 1.8vw, 1.5rem);
                  margin-bottom: 0.5rem;
                  max-width: 70ch;
                "
              >
                ${description}
              </p>
              ${linksHTML}
            </div>
          `;
          return accumulator;
        }, '');
        return tasksHTML;
      };

      const projects = document.getElementById('projects');
      projects.innerHTML = handleTasksArray(projectsArray);

      const experience = document.getElementById('experience');
      experience.innerHTML = handleTasksArray(experienceArray);

      onClose = () => {
        mediaQuery.removeEventListener('change', updateUINavbar);
        uiNavbarDesktopProjects.removeEventListener('click', clickProjects);
        uiNavbarMobileProjects.removeEventListener('click', clickProjects);
        uiNavbarDesktopExperience.removeEventListener('click', clickExperience);
        uiNavbarMobileExperience.removeEventListener('click', clickExperience);
        uiProjectsCount.innerText = '';
        uiExperienceCount.innerText = '';
        projects.innerHTML = '';
        experience.innerHTML = '';
      };

      break;
    }
    case 'resume': {
      break;
    }
    case 'skills': {
      const techSkillsArray = itemData.content.technical;
      const softSkillsArray = itemData.content.soft;

      const mediaQuery = window.matchMedia('(min-width: 55em)');

      const handleSkillsArray = (skillsArray, mq) => {
        let skillsHTML = '';
        if (mq.matches) {
          skillsHTML = skillsArray.reduce((accumulator, currentValue) => {
            const skill = currentValue.skill;
            const level = currentValue.level;
            let firstStar = '';
            let secondStar = '';
            let thirdStar = '';
            let fourthStar = '';
            let fifthStar = '';
            switch (level) {
              case 0:
                firstStar = 'is-transparent';
                secondStar = 'is-transparent';
                thirdStar = 'is-transparent';
                fourthStar = 'is-transparent';
                fifthStar = 'is-transparent';
                break;
              case 1:
                firstStar = 'is-half';
                secondStar = 'is-transparent';
                thirdStar = 'is-transparent';
                fourthStar = 'is-transparent';
                fifthStar = 'is-transparent';
                break;
              case 2:
                secondStar = 'is-transparent';
                thirdStar = 'is-transparent';
                fourthStar = 'is-transparent';
                fifthStar = 'is-transparent';
                break;
              case 3:
                secondStar = 'is-half';
                thirdStar = 'is-transparent';
                fourthStar = 'is-transparent';
                fifthStar = 'is-transparent';
                break;
              case 4:
                thirdStar = 'is-transparent';
                fourthStar = 'is-transparent';
                fifthStar = 'is-transparent';
                break;
              case 5:
                thirdStar = 'is-half';
                fourthStar = 'is-transparent';
                fifthStar = 'is-transparent';
                break;
              case 6:
                fourthStar = 'is-transparent';
                fifthStar = 'is-transparent';
                break;
              case 7:
                fourthStar = 'is-half';
                fifthStar = 'is-transparent';
                break;
              case 8:
                fifthStar = 'is-transparent';
                break;
              case 9:
                fifthStar = 'is-half';
                break;
              case 10:
                break;
              default:
                break;
            }
            accumulator += `
              <div
                style="
                  margin-bottom: 1rem;
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <p class="ui-text" style="font-size: 2.5rem">${skill}</p>
                <div>
                  <i class="nes-icon is-medium star ${firstStar}"></i>
                  <i class="nes-icon is-medium star ${secondStar}"></i>
                  <i class="nes-icon is-medium star ${thirdStar}"></i>
                  <i class="nes-icon is-medium star ${fourthStar}"></i>
                  <i class="nes-icon is-medium star ${fifthStar}"></i>
                </div>
              </div>
            `;
            return accumulator;
          }, '');
        } else {
          skillsHTML = skillsArray.reduce((accumulator, currentValue) => {
            const skill = currentValue.skill;
            const level = currentValue.level / 2;
            accumulator += `
              <div
                style="
                  margin-bottom: 0.25rem;
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <p
                  class="ui-text"
                  style="font-size: clamp(1.4rem, 4vw, 2.5rem)"
                >
                  ${skill}
                </p>
                <div
                  style="
                    margin-left: 1rem;
                    margin-right: 0.5rem;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 0 0.3rem;
                  "
                >
                  <p
                    class="ui-text"
                    style="font-size: clamp(1.4rem, 4vw, 2.5rem)"
                  >
                    ${level}
                  </p>
                  <i
                    class="nes-icon is-medium star"
                    style="transform: scale(1.75); margin-right: 0"
                  ></i>
                </div>
              </div>
            `;
            return accumulator;
          }, '');
        }
        return skillsHTML;
      };

      const uiTechHeading = document.getElementById('tech-skills-heading');
      const uiSoftHeading = document.getElementById('soft-skills-heading');

      const handleUISkills = (mq) => {
        uiTechHeading.insertAdjacentHTML(
          'afterend',
          handleSkillsArray(techSkillsArray, mq)
        );
        uiSoftHeading.insertAdjacentHTML(
          'afterend',
          handleSkillsArray(softSkillsArray, mq)
        );
      };

      handleUISkills(mediaQuery);

      const clearUISkills = () => {
        document.querySelectorAll('#skills-content > div').forEach((el) => {
          el.parentNode.removeChild(el);
        });
      };

      const updateUISkills = (e) => {
        clearUISkills();
        handleUISkills(e);
      };

      mediaQuery.addEventListener('change', updateUISkills);

      onClose = () => {
        mediaQuery.removeEventListener('change', updateUISkills);
        clearUISkills();
      };

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
