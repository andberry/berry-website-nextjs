import Link from 'next/link';
import Image from 'next/image';
import ImageBerryTwitter from '../../public/assets/images/berry_twitter.jpg';
import classnames from 'classnames';
import { mainMenu } from '../../data/mainMenu';
import { links } from '../../data/links';
import { IconContext } from 'react-icons';
import { isActiveUrl } from '../../utils/nav';
import { useRouter } from 'next/router';
import { motion, Variant } from 'framer-motion';
import { useState } from 'react';
import { easings } from '../../utils/easings';
import { VscClose as CloseIcon } from 'react-icons/vsc';

const motionVariantMenu: { [key: string]: Variant } = {
    hide: {
        x: '-100%',
        transition: {
            type: 'tween',
            ease: easings.easeInQuart,
            duration: 0.4,
        },
    },
    show: {
        x: 0,
        transition: {
            type: 'tween',
            ease: easings.easeInOutQuart,
            duration: 0.6,
        },
    },
};

const motionVariantMenuItem: { [key: string]: Variant } = {
    hide: { opacity: 0, x: -16 },
    show: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            duration: 0.4,
            ease: easings.easeOutQuart,
            delay: i * 0.08 + 0.45,
        },
    }),
};
export default function Header() {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header
            className={classnames(
                'fixed top-0 left-0 w-full z-50',
                'p-5 md:px-12',
                'bg-black0 text-white text-sm'
            )}
        >
            <div className="flex items-center justify-between">
                {/* left side */}
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

                    {/* mobile nav */}
                    <motion.nav
                        variants={motionVariantMenu}
                        animate={isMobileMenuOpen ? 'show' : 'hide'}
                        initial="hide"
                        className={classnames(
                            'fixed inset-0 bg-black0',
                            'flex flex-col justify-center',
                            '-translate-x-full',
                            'lg:hidden'
                        )}
                    >
                        <ul
                            className={classnames(
                                'w-full',
                                'text-center text-lg'
                            )}
                        >
                            {mainMenu.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="py-4"
                                    variants={motionVariantMenuItem}
                                    custom={index}
                                >
                                    <Link
                                        href={item.href}
                                        className={classnames(
                                            'py-3 px-6 text-xl',
                                            'md:text-4xl font-light uppercase font-exo2',
                                            'hover:text-purple inline-block'
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
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>

                    {/* desktop nav */}
                    <nav className="hidden lg:block">
                        <ul
                            className={classnames(
                                'flex w-full',
                                'text-left text-base'
                            )}
                        >
                            {mainMenu.map((item, index) => (
                                <li key={index} className="py-0 px-0">
                                    <Link
                                        href={item.href}
                                        className={classnames(
                                            'py-3 px-6 text-3xl',
                                            'text-lg font-light uppercase font-exo2',
                                            'hover:text-purple inline-block'
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

                {/* right side */}
                <div className="relative z-50">
                    {/* social icons */}
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

                    {/* mobile menu hamburgher */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={classnames(
                            'relative block pb-5',
                            'lg:hidden'
                        )}
                    >
                        {/* hamburgher */}
                        <div
                            className={classnames(
                                'w-8 h-5 flex flex-col justify-between transition-all duration-200',
                                {
                                    'opacity-100 translate-x-0':
                                        !isMobileMenuOpen,
                                },
                                {
                                    'opacity-0 translate-x-full':
                                        isMobileMenuOpen,
                                }
                            )}
                        >
                            {Array(3)
                                .fill(0)
                                .map((item, index) => (
                                    <div
                                        key={index}
                                        className="h-[2px] bg-purple"
                                    />
                                ))}
                        </div>

                        <div
                            className={classnames(
                                'w-9 h-5 absolute inset-x-0 top-0 text-3xl flex items-center justify-center transition-all duration-200 text-lime',
                                {
                                    'opacity-100 scale-100': isMobileMenuOpen,
                                },
                                {
                                    'opacity-0 scale-0': !isMobileMenuOpen,
                                }
                            )}
                        >
                            <CloseIcon />
                        </div>

                        {/* Menu label */}
                        <div
                            className={classnames(
                                'absolute inset-x-0 bottom-0 transition-all duration-100 ease-linear leading-none text-xs text-center',
                                {
                                    'opacity-100 translate-y-0':
                                        !isMobileMenuOpen,
                                },
                                { 'opacity-0': isMobileMenuOpen }
                            )}
                        >
                            Menu
                        </div>

                        {/* MeClosenu label */}
                        <div
                            className={classnames(
                                'absolute inset-x-0 bottom-0 transition-all duration-100 ease-linear leading-none text-xs text-center',
                                {
                                    'opacity-100 translate-y-0':
                                        isMobileMenuOpen,
                                },
                                { 'opacity-0': !isMobileMenuOpen }
                            )}
                        >
                            Close
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}
