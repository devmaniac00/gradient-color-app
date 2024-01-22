import { useState } from 'react';
import { HousesPage } from './pages/main-page';
import { HousesContext } from './context';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HousesContext.Provider value={{ isLoading, setIsLoading }}>
      <HousesPage />
    </HousesContext.Provider>
  );
}

export default App;
