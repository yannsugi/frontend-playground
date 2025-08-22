import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SingletonPage from './patterns/singleton/SingletonPage';
import ProviderPage from './patterns/provider/ProviderPage';
import PrototypePage from './patterns/prototype/PrototypePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="singleton" element={<SingletonPage />} />
          <Route path="provider" element={<ProviderPage />} />
          <Route path="prototype" element={<PrototypePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
