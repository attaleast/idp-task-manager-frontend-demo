import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ProjectBoard } from './pages/ProjectBoard';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ProjectBoard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
