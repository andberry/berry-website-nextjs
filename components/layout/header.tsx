import Link from 'next/link';
import Image from 'next/image';
import ImageBerryTwitter from '../../public/assets/images/berry_twitter.jpg';
import classnames from 'classnames';
import { mainMenu } from '../../data/mainMenu';
import { links } from '../../data/links';
import { IconContext } from 'react-icons';
import { isActiveUrl } from '../../utils/nav';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
export default function Header() {
    const router = useRouter();

    return (
        <header
            className={classnames(
                'fixed top-0 left-0 w-full z-40',
                'py-2 px-8 lg:py-0',
                'bg-black0 text-white text-sm'
            )}
        >
            <div
                className={classnames('flex items-center justify-between h-20')}
            >
                <div className="flex items-center">
                    <div className="lg:mr-6">
                        <Link href="/" className="block w-12">
                            <Image
                                src={ImageBerryTwitter}
                                alt="Berry picture"
                                className="rounded-md"
                            />
                        </Link>
                    </div>

                    <nav
                        id="main-menu"
                        className={classnames(
                            'fixed inset-0 lg:static',
                            'flex items-center'
                        )}
                    >
                        <ul
                            className={classnames(
                                'lg:flex w-full',
                                'text-center lg:text-left text-lg lg:text-base',
                                'hidden lg:block'
                            )}
                        >
                            {mainMenu.map((item, index) => (
                                <li
                                    key={index}
                                    className="py-4 lg:py-0 lg:px-0"
                                >
                                    <Link
                                        href={item.href}
                                        className={classnames(
                                            'py-2 px-6 text-3xl',
                                            'md:text-4xl lg:text-lg font-light uppercase font-exo2',
                                            'hover:text-purple block'
                                        )}
                                    >
                                        <div className="relative pb-1">
                                            <span>{item.title}</span>
                                            {isActiveUrl(item.href, router) && (
                                                <motion.div
                                                    layoutId="mainNavActive"
                                                    className="absolute bottom-0 left-0 w-full h-1 bg-purple"
                                                />
                                            )}
                                        </div>
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
                                                'py-1 px-2 block text-white',
                                                'hover:text-lime'
                                            )}
                                        >
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
                                className="block"
                            >
                                <div
                                    id="hamb-menu"
                                    className="hamb w-8 h-6 flex flex-col justify-between overflow-hidden"
                                >
                                    <div className="hamb__item bg-white"></div>
                                    <div className="hamb__item bg-white"></div>
                                    <div className="hamb__item bg-white"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
