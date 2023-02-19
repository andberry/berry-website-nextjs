import Layout from '../../components/layout/layout';
import { settings } from '../../data/settings';
import fs from 'fs';
import * as matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '../../components/Tag/Tag';
import { HiOutlineArrowNarrowLeft as ArrowIcon } from 'react-icons/hi';
import { HeroTitle } from '../../components/typography/HeroTitle';

function BlogPost({ post }) {
    return (
        <Layout>
            <article className="bg-black0 text-white">
                <header>
                    <div
                        className={classNames(
                            'u-container',
                            'max-w-screen-xl mx-auto',
                            'pt-8 pb-4',
                            'md:pt-10 md:pb-6',
                            'lg:pt-16',
                            'u-text-shadow'
                        )}>
                        <HeroTitle className="text-white">
                            {post.title}
                        </HeroTitle>
                        <h3 className="mt-4 text-sm">{post.date}</h3>
                    </div>
                    {post.heroImage && (
                        <div className="relative h-[50vh] md:h-[33vh] lg:h-[50vh]">
                            <Image
                                src={`${settings.blog.heroBasedir}/${post.heroImage}`}
                                alt=""
                                fill
                                className="object-cover object-center"
                            />
                            {/*<div className="absolute inset-0 z-20 bg-black0 opacity-0" />*/}
                        </div>
                    )}
                </header>
                {/* <div className="u-container max-w-screen-md mx-auto pb-16 md:pb-28"> */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 xl:gap-20 u-container">
                    <div
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        className={classNames(
                            'pb-16',
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
                            'prose-headings:!mt-16 prose-headings:!mb-3 prose-headings:!ml-4',
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
                            <h3 className="mt-1 text-sm">{post.date}</h3>
                            {post.tags && (
                                <div className="flex gap-2 mt-6 flex-wrap">
                                    {post.tags.map((tag, index) => (
                                        <div key={index}>
                                            <Tag tag={tag} />
                                        </div>
                                    ))}
                                </div>
                            )}
                            <Link
                                href={settings.blog.baseUrl}
                                className="mt-8 inline-block">
                                <span className="flex gap-2 items-center">
                                    <ArrowIcon />
                                    Back to Blog Index
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
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
}

export async function getStaticProps({ params }) {
    const md = new MarkdownIt();
    const { data, content } = matter(
        fs.readFileSync(`${settings.blog.contentDir}/${params.slug}.md`)
    );

    console.log(data.heroImage);

    return {
        props: {
            post: {
                title: data.title,
                date: data.createdAtDisplay,
                content: md.render(content),
                heroImage: data.heroImage ? data.heroImage : null,
                tags: data.tags ? data.tags : [],
            },
        },
    };
}

export default BlogPost;
