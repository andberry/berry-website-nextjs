import style from './header.module.scss';

export default function Header() {
    return (
        <header id="page-header" className={ style.main }>
            <div className="l-container">
                This is the page header
            </div>
        </header>
    );
}