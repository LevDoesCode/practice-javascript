import { createFighters } from './components/fightersView';
import { fighterService } from './services/fightersService';
import { selectSound } from './components/fighterSelector';

class App {
  static rootElement = document.getElementById('root');
  static loadingElement = document.getElementById('loading-overlay');
  static async startApp() {
    try {
      App.loadingElement.style.visibility = 'visible';
      const fighters = await fighterService.getFighters();
      const fightersElement = createFighters(fighters);

      const clickOverlay = function (event) {
        selectSound.currentTime = 0;
        selectSound.play();
        App.rootElement.appendChild(fightersElement);
        App.loadingElement.style.visibility = 'hidden';
      }

      this.loadingElement.addEventListener('click', clickOverlay, {once: true});
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = 'Failed to load data';
    } finally {
      
    }
  }
}

export default App;
