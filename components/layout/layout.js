import Header from './header.js';
import Footer from './footer.js';
import styles from './layout.module.scss'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main id="page-main">
                { children }
            </main>
            <Footer />
        </>
    );
}