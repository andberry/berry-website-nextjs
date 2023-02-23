import Layout from '../../components/layout/layout';
import { settings } from '../../data/settings';
import fs from 'fs';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '../../components/Tag/Tag';

import { HeroTitle } from '../../components/typography/HeroTitle';
import { getPlaiceholder } from 'plaiceholder';
import { getSemanticHtmlDate } from '../../utils/blog';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { BlogPostDate } from '../../components/BlogPostDate';
import { motion, Variant } from 'framer-motion';
import { ArrowButton } from '../../components/ArrowButton';

interface IBlogPagePost {
    title: string;
    date: string;
    semanticHtmlDate: string; // string to be used inside <time> element
    tags: string[];
    heroImage: string;
    heroImageBlurred: string;
    content: string;
}

interface IBlogPage {
    post: IBlogPagePost;
}

function BlogPage({ post }: IBlogPage) {
    return (
        <Layout>
            <article className="bg-black0 text-white c-page-blog">
                <header>
                    <div
                        className={classNames(
                            'u-container',
                            'max-w-screen-xl mx-auto',
                            'pt-32 pb-8 2xl:pt-48 text-white',
                            'u-text-shadow'
                        )}>
                        <HeroTitle className="text-white">
                            {post.title}
                        </HeroTitle>

                        <BlogPostDate
                            dateTime={post.semanticHtmlDate}
                            displayDate={post.date}
                            className="mt-4"
                        />
                    </div>
                    {post.heroImage && (
                        <div className="relative h-[50vh] md:h-[33vh] lg:h-[50vh]">
                            <Image
                                src={`${settings.blog.heroBasedir}/${post.heroImage}`}
                                alt=""
                                fill
                                className="object-cover object-center"
                                priority
                                placeholder="blur"
                                blurDataURL={post.heroImageBlurred}
                            />
                            {/*<div className="absolute inset-0 z-20 bg-black0 opacity-0" />*/}
                        </div>
                    )}
                </header>
                {/* <div className="u-container max-w-screen-md mx-auto pb-16 md:pb-28"> */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 xl:gap-20 u-container">
                    <section
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        className={classNames(
                            'c-page-blog__content',
                            'pt-20 pb-16',
                            'lg:col-span-7 lg:col-start-2',
                            'xl:col-span-7 xl:col-start-2',
                            '2xl:col-span-6 2xl:col-start-3',
                            '3xl:col-span-6 3xl:col-start-3',
                            'text-white2',
                            'prose xl:prose-xl prose-lg',
                            'prose-neutral',
                            'prose-blockquote:text-white prose-a:text-white',
                            'prose-strong:text-white2',
                            'prose-headings:text-purple',
                            'prose-headings:relative',
                            'prose-headings:before:block prose-headings:before:absolute prose-headings:before:-left-4 prose-headings:before:top-0 prose-headings:before:content-[""] prose-headings:before:w-1 prose-headings:before:h-full prose-headings:before:bg-lime',
                            'xl:prose-headings:mt-20 prose-headings:mb-3 prose-headings:ml-4',
                            'prose-code:text-white2'
                        )}
                    />

                    <div
                        className={classNames(
                            'relative',
                            'hidden',
                            'lg:block lg:col-span-4',
                            'xl:col-span-4',
                            '2xl:col-span-3'
                        )}>
                        <div className="sticky top-36 mt-20 bg-black2 py-3 px-4 rounded-md">
                            <div className="text-2xl leading-none">
                                {post.title}
                            </div>

                            <BlogPostDate
                                dateTime={post.semanticHtmlDate}
                                displayDate={post.date}
                                className="mt-2"
                            />

                            {post.tags && (
                                <div className="flex gap-2 mt-6 flex-wrap">
                                    {post.tags.map((tag, index) => (
                                        <div key={index}>
                                            <Tag tag={tag} variant="dark" />
                                        </div>
                                    ))}
                                </div>
                            )}
                            {/*
                            <motion.button
                                className="mt-8 border border-lime px-4 py-2"
                                variants={motionVariantsCta}
                                whileHover="hover">
                                <Link
                                    href={settings.blog.baseUrl}
                                    className="inline-block">
                                    <span className="flex gap-2 items-center">
                                        <motion.span
                                            variants={motionVariantsCtaArrow}>
                                            <ArrowIcon />
                                        </motion.span>
                                        Back to Blog Index
                                    </span>
                                </Link>
                            </motion.button>
                            */}

                            <ArrowButton
                                arrowSide="left"
                                url={settings.blog.baseUrl}
                                text="Back to Blog Index"
                            />
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [];
    for (const file of fs.readdirSync(settings.blog.contentDir)) {
        paths.push({
            params: {
                slug: file.replace('.md', ''),
            },
        });
    }

    return {
        paths: paths,
        fallback: false,
    };
};

interface IParams extends ParsedUrlQuery {
    slug: string;
}

interface IProps {
    post: IBlogPagePost;
}

export const getStaticProps: GetStaticProps<IProps, IParams> = async ({
    params,
}) => {
    const slug = params?.slug || null;
    if (slug === null) {
        return { notFound: true };
    }

    const md = new MarkdownIt();
    const { data, content } = matter(
        fs.readFileSync(`${settings.blog.contentDir}/${slug}.md`)
    );

    let placeholder = undefined;
    if (data.heroImage) {
        try {
            placeholder = await getPlaiceholder(
                `${settings.blog.heroBasedir}/${data.heroImage}`
            );
        } catch (error) {
            console.log('Error generating base64 placeholder: ', error);
        }
    }

    const post: IBlogPagePost = {
        title: data.title,
        date: data.createdAtDisplay,
        semanticHtmlDate: getSemanticHtmlDate(data.createdAt),
        content: md.render(content),
        heroImage: data.heroImage ?? null,
        tags: data.tags ? data.tags : [],
        heroImageBlurred: placeholder?.base64 || '',
    };

    return {
        props: {
            post: post,
        },
    };
};

export default BlogPage;
