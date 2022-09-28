import Palette from './components/palette';
import Theme from './theme/Theme';

function App() {
  return (
    <div className="App">
      <Theme>
        <Palette />
      </Theme>
    </div>
  );
}

export default App;