import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import './App.css';

function App() {
        const dispatch = useDispatch();
        useEffect(() => {
                dispatch(fetchCampsites());
        }, [dispatch]);

        return (
                <div className="App">
                        <Header />
                        <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="contact" element={<ContactPage />} />
                                <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
                                <Route path="directory" element={<CampsitesDirectoryPage />} />
                                <Route path="about" element={<AboutPage />} />
                        </Routes>
                        <Footer />
                </div>
        );
}

export default App;
