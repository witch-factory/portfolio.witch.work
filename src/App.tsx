import Intro from './pages/intro';
import Interest from './pages/interest';
import * as styles from './app.css';

function App() {
  return (
    <div className={styles.app}>
      <Intro />
      <Interest />
    </div>
  );
}

export default App;
