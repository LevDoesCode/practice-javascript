import { controls } from '../../constants/controls';
import { Fighter } from './fighter';

export async function fight(firstFighter, secondFighter) {
  let events = [];
  return new Promise((resolve) => {
    const player1 = new Fighter(firstFighter, 'left');
    const player2 = new Fighter(secondFighter, 'right');

    const step = 50;
    const strokes = new Map();
    const controlKeydown = function (event) {
      if (event.defaultPrevented) {
        return;
      }

      strokes.set(event.code, true);
      const player1BCR = player1.element.getBoundingClientRect();
      const player2BCR = player2.element.getBoundingClientRect();
      const arena = document.getElementsByClassName('arena___root')[0];
      let isCritHit = false;
      if (!player1.isBlocking) {
        switch (event.code) {
          case controls.Player1Right:
            moveFighter(player1.element, 0, player2BCR.left, step);
            break;
          case controls.Player1Left:
            moveFighter(player1.element, 0, player2BCR.left, -step);
            break;
          case controls.Player1Block:
            block(player1, player2);
            break;
            e;
          case controls.Player1Crit[0]:
          case controls.Player1Crit[1]:
          case controls.Player1Attack:
            if (player1.isCrit && strokes.get(controls.Player1Crit[0]) && strokes.get(controls.Player1Crit[1])) {
              isCritHit = true;
            }
            const winner = hitPlayer(player1, player2, player1BCR.right, player2BCR.left, step, isCritHit);
            if (winner) {
              resolve([winner, events]);
            }
            break;
          default:
            break;
        }
      }
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
          case controls.Player2Attack:
            if (player2.isCrit && strokes.get(controls.Player2Crit[0]) && strokes.get(controls.Player2Crit[1])) {
              isCritHit = true;
            }
            const winner = hitPlayer(player2, player1, player1BCR.right, player2BCR.left, step, isCritHit);
            if (winner) {
              resolve([winner, events]);
            }
            break;
          case controls.Player2Block:
            block(player2);
            break;
          default:
            break;
        }
      }
      event.preventDefault();
    };

    function controlKeyup(event) {
      if (event.defaultPrevented) {
        return;
      }
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
    window.addEventListener('keyup', controlKeyup);
    window.addEventListener('keydown', controlKeydown);
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

function hitPlayer(attacker, defender, player1Right, player2Left, step, isCrit) {
  if (player2Left - player1Right < step / 2) {
    if (isCrit) {
      attacker.isCrit = false;
      defender.element.classList.toggle('fighter___crit');
      setTimeout(() => {
        attacker.isCrit = true;
      }, 2000);
      setTimeout(() => {
        defender.element.classList.toggle('fighter___crit');
      }, 250);
    } else {
      effectHit(defender);
    }
    
    defender.health = Math.max(defender.health - attacker.attack, 0);
    const percentage = parseInt((defender.health / defender.maxHealth) * 100);
    const defenderBar = document.getElementById(`${defender.direction}-fighter-indicator`);
    defenderBar.style.width = percentage + '%';
    
    if (defender.health <= 0) {
      return attacker;
    }
  }
  return false;
}

async function effectHit(defender) {
  let hitClass = 'fighter___hit';
  let hitTime = 100;
  if (defender.isBlocking) {
    hitClass = 'fighter___blocked';
    hitTime = 500;
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
