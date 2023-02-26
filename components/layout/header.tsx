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

const motionVariantMenu: { [key: string]: Variant } = {
    hide: {
        opacity: 0,
        x: '-100%',
        transition: {
            type: 'tween',
            ease: easings.easeOutCubic,
            duration: 0.4,
        },
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            ease: easings.easeOutCubic,
            duration: 0.4,
        },
    },
};

const motionVariantMenuItem: { [key: string]: Variant } = {
    hide: { opacity: 0, x: -12 },
    show: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            duration: 0.4,
            ease: easings.easeOutCubic,
            delay: i * 0.1 + 0.2,
        },
    }),
};
export default function Header() {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header
            className={classnames(
                'fixed top-0 left-0 w-full z-40',
                'py-2 px-8',
                'bg-black0 text-white text-sm'
            )}
        >
            <div className={classnames('flex items-center justify-between ')}>
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

                    <motion.nav
                        variants={motionVariantMenu}
                        animate={isMobileMenuOpen ? 'show' : 'hide'}
                        className={classnames(
                            'fixed inset-0 bg-black0',
                            'flex flex-col justify-center',
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
                                            'py-3 px-6 text-3xl',
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
                </div>

                <div className="relative z-50">
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

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={classnames(
                            'w-8 h-7 lg:hidden',
                            'flex flex-col justify-between'
                        )}
                    >
                        {Array(3)
                            .fill(0)
                            .map((item, index) => (
                                <div key={index} className="h-1 bg-lime" />
                            ))}
                    </button>
                </div>
            </div>
        </header>
    );
}
