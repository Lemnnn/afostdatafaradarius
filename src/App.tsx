import NotYetPage from './pages/not-yet';
import YesPage from './pages/yes';

function App() {
  const showYesPage = true; // toggle this to true to show YesPage

  if (showYesPage) {
    return <YesPage />;
  }

  return <NotYetPage />;
}

export default App;
