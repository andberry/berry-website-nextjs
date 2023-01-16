import Link from 'next/link';
import Image from 'next/image';
import ImageBerryTwitter from '../../public/assets/images/berry_twitter.jpg';
import classnames from 'classnames';
import { mainMenu } from '../../data/mainMenu';
import { links } from '../../data/links';
import { IconContext } from 'react-icons';

export default function Header() {
    return (
        <header
            className={classnames(
                'fixed top-0 left-0 w-full h-16 z-40',
                'flex items-center justify-between',
                'u-container py-2 lg:py-0',
                'bg-black0 text-white text-sm'
            )}>
            <div className="flex items-center">
                <div className="lg:mr-4 relative z-40 w-10 lg:w-12">
                    <Link href="/">
                        <Image
                            src={ImageBerryTwitter}
                            alt="Berry picture"
                            className="rounded-full"
                        />
                    </Link>
                </div>

                <nav
                    id="main-menu"
                    className={classnames(
                        'fixed inset-0 lg:static z-40',
                        'flex items-center',
                        'bg-black lg:bg-transparent'
                    )}>
                    <ul
                        className={classnames(
                            'lg:flex w-full',
                            'text-center lg:text-left text-lg lg:text-base',
                            'hidden lg:block'
                        )}>
                        {mainMenu.map((item, index) => (
                            <li key={index} className="py-4 lg:py-0 lg:px-2">
                                <Link
                                    href={item.href}
                                    className={classnames(
                                        'p-2',
                                        'text-3xl md:text-4xl lg:text-lg font-bold uppercase font-exo2',
                                        'hover:text-purple'
                                    )}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="relative z-40">
                <div className="hidden lg:flex lg:items-center gap-4">
                    <IconContext.Provider value={{ size: '1.6rem' }}>
                        {links.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index}>
                                    <Link
                                        href={item.link}
                                        className={classnames(
                                            'p-1 block text-white',
                                            'hover:text-lime'
                                        )}>
                                        <Icon />
                                    </Link>
                                </div>
                            );
                        })}
                    </IconContext.Provider>
                </div>

                <div className="block w-8 lg:hidden">
                    <div className="mobile-menu-toggle">
                        <button
                            data-v-onclick="toggleMobileMenu"
                            className="block">
                            <div
                                id="hamb-menu"
                                className="hamb w-8 h-6 flex flex-col justify-between overflow-hidden">
                                <div className="hamb__item bg-white"></div>
                                <div className="hamb__item bg-white"></div>
                                <div className="hamb__item bg-white"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
