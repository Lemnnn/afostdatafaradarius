import NotYetPage from './pages/not-yet';
import YesPage from './pages/yes';

function App() {
  const showYesPage = false;

  if (showYesPage) {
    return <YesPage />;
  }

  return <NotYetPage />;
}

export default App;
