import Header from './header';
import Footer from './footer';
import { ReactNode } from 'react';

export interface IProps {
    children: ReactNode;
}

export default function Layout({ children }: IProps) {
    return (
        <div>
            <Header />
            <main id="page-main" className="pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}
