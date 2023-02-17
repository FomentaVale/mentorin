import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext';
import { Router } from './Router';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
