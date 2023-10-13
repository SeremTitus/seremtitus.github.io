import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/*' element={<HomePage/>}/>
                <Route path='/home' element={<HomePage/>}/>
            </Routes>             
        </Layout>
    );
}

