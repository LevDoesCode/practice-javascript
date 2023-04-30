import { controls } from '../../constants/controls';
import { Fighter } from './fighter';
import punchSound1 from '../../../resources/sound/sfx-punch1.mp3';
import punchSound2 from '../../../resources/sound/sfx-punch2.mp3';
import punchSound3 from '../../../resources/sound/sfx-punch3.mp3';
import punchSound4 from '../../../resources/sound/sfx-punch4.mp3';
import critSound from '../../../resources/sound/sfx-punch5.mp3';
import blockSound from '../../../resources/sound/block-6839.mp3';
import fightSound from '../../../resources/sound/Fight-Sound-Effect.mp3'

export async function fight(firstFighter, secondFighter) {
  let events = [];
  const sounds = [punchSound1, punchSound2, punchSound3, punchSound4, critSound, blockSound];
  const fightStart = new Audio(fightSound);
  fightStart.play();
  return new Promise((resolve) => {
    const player1 = new Fighter(firstFighter, 'left');
    const player2 = new Fighter(secondFighter, 'right');

    const step = 50;
    const strokes = new Map();
    let winner = false;
    const arena = document.getElementsByClassName('arena___root')[0];

    const controlKeydown = function (event) {
      strokes.set(event.code, true);
      const player1BCR = player1.element.getBoundingClientRect();
      const player2BCR = player2.element.getBoundingClientRect();

      // Player 1 can perform actions if not blocking
      if (!player1.isBlocking) {
        switch (event.code) {
          case controls.Player1Right:
            moveFighter(player1.element, 0, player2BCR.left, step);
            break;
          case controls.Player1Left:
            moveFighter(player1.element, 0, player2BCR.left, -step);
            break;
          case controls.Player1Crit[0]:
          case controls.Player1Crit[1]:
          case controls.Player1Crit[2]:
            const completeCombo1 =
              strokes.has(controls.Player1Crit[0]) &&
              strokes.has(controls.Player1Crit[1]) &&
              strokes.has(controls.Player1Crit[2]);
            if (completeCombo1 && player1.critHitAvailable) {
              player1.critHitAvailable = false;
              winner = hitPlayer(player1, player2, player1BCR.right, player2BCR.left, step, sounds);
            }
            break;
          case controls.Player1Attack:
            winner = hitPlayer(player1, player2, player1BCR.right, player2BCR.left, step, sounds);
            break;
          case controls.Player1Block:
            block(player1);
            break;
          default:
            break;
        }
      }
      // Player 2 can perform actions if not blocking
      if (!player2.isBlocking) {
        switch (event.code) {
          case controls.Player2Right:
            moveFighter(player2.element, player1BCR.right, arena.clientWidth, step);
            break;
          case controls.Player2Left:
            moveFighter(player2.element, player1BCR.right, arena.clientWidth, -step);
            break;
          case controls.Player2Crit[0]:
          case controls.Player2Crit[1]:
          case controls.Player2Crit[2]:
            const completeCombo2 =
              strokes.has(controls.Player2Crit[0]) &&
              strokes.has(controls.Player2Crit[1]) &&
              strokes.has(controls.Player2Crit[2]);
            if (completeCombo2 && player2.critHitAvailable) {
              player2.critHitAvailable = false;
              winner = hitPlayer(player2, player1, player1BCR.right, player2BCR.left, step, sounds);
            }
            break;
          case controls.Player2Attack:
            winner = hitPlayer(player2, player1, player1BCR.right, player2BCR.left, step, sounds);
            break;
          case controls.Player2Block:
            block(player2);
            break;
          default:
            break;
        }
      }

      if (winner) {
        resolve([winner, events]);
      }
    };

    const controlKeyup = function (event) {
      strokes.delete(event.code);
      switch (event.code) {
        case controls.Player1Block:
          block(player1);
          break;
        case controls.Player2Block:
          block(player2);
          break;
        default:
          break;
      }
      event.preventDefault();
    }

    events.push(controlKeyup, controlKeydown);
    document.addEventListener('keyup', controlKeyup);
    document.addEventListener('keydown', controlKeydown);
  });
}

export function getDamage(attacker, defender) {
  // return damage
}

export function getHitPower(fighter) {
  // return hit power
}

export function getBlockPower(fighter) {
  // return block power
}

//-----

function moveFighter(player, boundMin, boundMax, step) {
  const playerCoords = player.getBoundingClientRect();
  if (playerCoords.left + step <= boundMin) {
    step = boundMin - playerCoords.left;
  }
  if (playerCoords.right + step >= boundMax) {
    step = boundMax - playerCoords.right;
  }
  const offset = player.style.left ? getPixels(player.style.left) : 0;
  player.style.left = offset + step + 'px';
}

function getPixels(pixelString) {
  return parseInt(pixelString.replace('px', ''));
}

function hitPlayer(attacker, defender, player1Right, player2Left, step, sounds) {
  if (player2Left - player1Right <= step / 2) {
    let soundEffect = null;
    const isCritHit = !attacker.critHitAvailable;
    if (defender.isBlocking) {
      soundEffect = new Audio(sounds[sounds.length - 1]);
    } else {
      if (isCritHit) {
        soundEffect = new Audio(sounds[4]);
      } else {
        const randomIndex = Math.floor(Math.random() * (sounds.length - 1));
        soundEffect = new Audio(sounds[randomIndex]);
      }
      defender.health = Math.max(defender.health - attacker.attack, 0);
      const percentage = parseInt((defender.health / defender.maxHealth) * 100);
      const defenderBar = document.getElementById(`${defender.direction}-fighter-indicator`);
      defenderBar.style.width = percentage + '%';
    }

    effectHit(defender, attacker);
    soundEffect.play();

    if (defender.health <= 0) {
      return attacker;
    }
  }
  return false;
}

async function effectHit(defender, attacker) {
  let hitClass = 'fighter___hit';
  let hitTime = 100;
  const isCritHit = !attacker.critHitAvailable

  if (isCritHit) {
    setTimeout(() => {
      attacker.critHitAvailable = true;
    }, 2000);
  }

  if (defender.isBlocking) {
    hitClass = 'fighter___blocked';
    hitTime = 250;
  } else if (isCritHit) {
    hitClass = 'fighter___crit'; 
    hitTime = 250;
  }

  defender.element.classList.add(hitClass);

  setTimeout(() => {
    defender.element.classList.remove(hitClass);
  }, hitTime);
}

function block(player) {
  player.isBlocking = !player.isBlocking;
  player.element.classList.toggle('fighter___block');
}
