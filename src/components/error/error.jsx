import { useLocation } from 'react-router-dom';
import Blob from '../home/blob';

const Error = () => {
        const Location = useLocation();
        const LocationPath = Location.pathname;
        const body = document.body;
        if (LocationPath !== '/' || LocationPath !== '/portfolio') {
                body.style.overflowY = 'hidden';
        }
        return (
                <section className="h-screen pt-40">
                        <p className="text-text text-5xl text-center">
                                Désolé cette page n&apos;existe pas.{' '}
                        </p>
                        <Blob />
                </section>
        );
};

export default Error;
