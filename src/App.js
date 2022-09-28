import Palette from './components/palette';
import ViewPort from './components/viewport';
import Theme from './theme/Theme';

function App() {
  return (
    <div className="App">
      <Theme>
        <ViewPort />
      </Theme>
    </div>
  );
}

export default App;