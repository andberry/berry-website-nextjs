import { motion, Variant } from 'framer-motion';
import Link from 'next/link';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigFile from '../tailwind.config';
const tailwindConfig: any = resolveConfig(tailwindConfigFile);
import { easings } from '../utils/easings';
import {
    HiOutlineArrowNarrowLeft,
    HiOutlineArrowNarrowRight,
} from 'react-icons/hi';
import classNames from 'classnames';
import { useMediaQuery } from 'usehooks-ts';
import { useEffect, useState } from 'react';

const motionVariantsCta: { [key: string]: Variant } = {
    base: {},
    hover: {
        color: tailwindConfig.theme.colors.lime,
        transition: {
            duration: 0.1,
            ease: 'linear',
        },
    },
};

const motionVariantsCtaArrowLeft: { [key: string]: Variant } = {
    base: {},
    hover: {
        x: -4,
        color: tailwindConfig.theme.colors.lime,
        transition: {
            duration: 0.3,
            ease: easings.easeOutQuart,
        },
    },
};

const motionVariantsCtaArrowRight: { [key: string]: Variant } = {
    base: {},
    hover: {
        x: 4,
        color: tailwindConfig.theme.colors.lime,
        transition: {
            duration: 0.3,
            ease: easings.easeOutQuart,
        },
    },
};

export interface IArrowButton {
    url: string;
    text: string;
    arrowSide?: 'left' | 'right';
}

export const ArrowButton = ({
    url,
    text,
    arrowSide = 'right',
}: IArrowButton) => {
    const isDesktopMQ = useMediaQuery('(min-width: 1024px)');
    const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setIsDesktop(isDesktopMQ);
    }, [isDesktopMQ]);

    return (
        <motion.button
            className={classNames('mt-8')}
            variants={motionVariantsCta}
            whileHover={isDesktop ? 'hover' : undefined}
        >
            <Link
                href={url}
                className={classNames(
                    'inline-block py-2',
                    { 'pl-4 pr-2': arrowSide === 'right' },
                    { 'pr-4 pl-2 ': arrowSide === 'left' }
                )}
            >
                <span className="flex gap-2 items-center">
                    {arrowSide === 'left' && (
                        <motion.span variants={motionVariantsCtaArrowLeft}>
                            <HiOutlineArrowNarrowLeft />
                        </motion.span>
                    )}

                    {text}

                    {arrowSide === 'right' && (
                        <motion.span variants={motionVariantsCtaArrowRight}>
                            <HiOutlineArrowNarrowRight />
                        </motion.span>
                    )}
                </span>
            </Link>
        </motion.button>
    );
};
