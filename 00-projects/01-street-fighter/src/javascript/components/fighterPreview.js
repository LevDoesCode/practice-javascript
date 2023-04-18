import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  // todo: show fighter info (image, name, health, etc.)
  console.log(fighter);
  if (fighter) {
    fighterElement.appendChild(createFighterImage(fighter));
    let nameElement = createElement({ tagName: 'p', className: 'fighter-preview___name' });
    nameElement.innerHTML = fighter.name.toUpperCase();
    fighterElement.appendChild(nameElement);
    
    let stats = createElement({ tagName: 'div', className: 'fighter-preview___stats' });
    for (const detail in fighter) {
      if (detail !== 'name' && detail !== '_id' && detail !== 'source') {
        let statRow = createElement({ tagName: 'div', className: 'fighter-preview___stats-row' });
        let statRowHead = createElement({ tagName: 'div', className: 'fighter-preview___stats-row-head' });
        statRowHead.innerHTML = `${detail}`;
        let statRowValue = createElement({ tagName: 'div', className: 'fighter-preview___stats-row-value' });
        statRowValue.innerHTML = `${fighter[detail]}`;
        statRow.appendChild(statRowHead);
        statRow.appendChild(statRowValue);
        stats.appendChild(statRow);
      }
    }
    fighterElement.appendChild(stats);
  }
  
  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
