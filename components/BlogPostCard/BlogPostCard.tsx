import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { settings } from '../../data/settings';
import { Tag } from '../Tag/Tag';
import { HiOutlineArrowNarrowRight as ArrowIcon } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Variant } from 'framer-motion';
import { easings } from '../../utils/easings';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigFile from '../../tailwind.config';
const tailwindConfig: any = resolveConfig(tailwindConfigFile);
import { useMediaQuery } from 'usehooks-ts';

export interface IBlogCardPost {
    url: string;
    title: string;
    abstract?: string;
    createdAt: string;
    createdAtDisplay: string;
    semanticHtmlDate: string; // string to be used inside <time> element
    published: boolean;
    tags: string[];
    heroImage: string;
    heroImageBlurred: string;
}

interface IBlogCard {
    post: IBlogCardPost;
}

const motionVariantsCard: { [key: string]: Variant } = {
    base: {},
    hover: {},
};

const motionVariantsImage: { [key: string]: Variant } = {
    base: {
        opacity: 0.9,
        scale: 1.1,
    },
    hover: {
        scale: 1.12,
        translateY: '-0.5rem',
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: easings.easeOutCubic,
        },
    },
};

const motionVariantsTitleBefore: { [key: string]: Variant } = {
    base: {
        opacity: 0,
        width: 0,
        x: 0,
    },
    hover: {
        opacity: 1,
        width: 4,
        x: -10,
        transition: {
            duration: 0.3,
            ease: easings.easeOutQuart,
        },
    },
};

const motionVariantsTitle: { [key: string]: Variant } = {
    base: {},
    hover: {
        color: tailwindConfig.theme.colors.purple,
        transition: {
            duration: 0.3,
            ease: easings.easeOutQuart,
            delay: 0.05,
        },
    },
};

const motionVariantsCta: { [key: string]: Variant } = {
    base: {},
    hover: {
        color: tailwindConfig.theme.colors.purple,
        transition: {
            duration: 0.1,
            ease: 'linear',
            delay: 0.05,
        },
    },
};

const motionVariantsCtaArrow: { [key: string]: Variant } = {
    base: {},
    hover: {
        x: 4,
        color: tailwindConfig.theme.colors.lime,
        transition: {
            duration: 0.3,
            ease: easings.easeOutQuart,
            delay: 0.05,
        },
    },
};

export const BlogPostCard = ({ post }: IBlogCard) => {
    const [hoverOnCard, setHoverOnCard] = useState(false);
    const isDesktopMQ = useMediaQuery('(min-width: 1024px)');
    const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setIsDesktop(isDesktopMQ);
    }, [isDesktopMQ]);

    return (
        <motion.article
            className="pb-24 md:pb-0 flex flex-col justify-between"
            onHoverStart={isDesktop ? () => setHoverOnCard(true) : undefined}
            onHoverEnd={isDesktop ? () => setHoverOnCard(false) : undefined}
            variants={motionVariantsCard}
            initial="base"
            animate={hoverOnCard ? 'hover' : 'base'}
        >
            <Link href={post.url} className="block">
                {post.heroImage && (
                    <div
                        className={classNames(
                            'aspect-video overflow-hidden',
                            'rounded-md',
                            'duration-200 transition-all ease-linear'
                        )}
                    >
                        <motion.div
                            variants={motionVariantsImage}
                            className="w-full h-full relative"
                        >
                            <Image
                                src={`${settings.blog.heroBasedir}/${post.heroImage}`}
                                alt=""
                                fill
                                className="object-cover object-center translate-y-"
                                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                                placeholder="blur"
                                blurDataURL={post.heroImageBlurred}
                            />
                        </motion.div>
                    </div>
                )}

                <div className="relative">
                    <motion.div
                        className="w-1 bg-lime h-full absolute opacity-0"
                        variants={motionVariantsTitleBefore}
                    />
                    <motion.h2
                        variants={motionVariantsTitle}
                        className="u-fancy-tile mt-2 text-3xl font-medium leading-none"
                    >
                        {post.title}
                    </motion.h2>
                </div>

                {/*
                    <time
                        dateTime={post.dateMachine}
                        className="block text-xs mt-1">
                        {post.date}
                    </time>
                    
                    <div className="mt-6 font-thin">
                        {post.abstract}
                    </div>
                */}

                <div className="flex justify-between items-center mt-6">
                    {post.tags && (
                        <div className="flex gap-2">
                            {post.tags.map((tag, index) => (
                                <div key={index}>
                                    <Tag tag={tag} />
                                </div>
                            ))}
                        </div>
                    )}
                    <button className="flex items-center gap-2 group py-2 px-2">
                        <motion.span variants={motionVariantsCta}>
                            Read the Post
                        </motion.span>
                        <motion.div variants={motionVariantsCtaArrow}>
                            <ArrowIcon
                                className={classNames(
                                    'relative top-[2px] text-xl',
                                    'group-hover:translate-x-1 ease-outsine transition-all'
                                )}
                            />
                        </motion.div>
                    </button>
                </div>
            </Link>
        </motion.article>
    );
};
