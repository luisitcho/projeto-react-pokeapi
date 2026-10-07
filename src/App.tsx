import './App.css';
import AppRoutes from './routes/AppRoutes';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export default function App() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-24">
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
}
