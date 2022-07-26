import style from './footer.module.scss';

export default function Footer() {
    return (
        <footer id="page-footer" className={ style.main }>
            <div className="l-container">
                This is the page footer
            </div>
        </footer>
    );
}