import Header from './header';
import Footer from './footer';
import { ReactNode } from 'react';

export interface IProps {
    children: ReactNode;
}

export default function Layout({ children }: IProps) {
    return (
        <div className="bg-lime">
            <Header />
            <main id="page-main">{children}</main>
            <Footer />
        </div>
    );
}
