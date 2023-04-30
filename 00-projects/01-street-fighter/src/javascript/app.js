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

      this.loadingElement.addEventListener('click', () => {
        selectSound.play();
        App.rootElement.appendChild(fightersElement);
        App.loadingElement.style.visibility = 'hidden';
      });
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = 'Failed to load data';
    } finally {
      
    }
  }
}

export default App;
