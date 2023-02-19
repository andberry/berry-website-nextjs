import { settings } from '../../data/settings';
import Layout from '../../components/layout/layout';
import fs from 'fs';
import * as matter from 'gray-matter';
import Link from 'next/link';
// import { HiArrowCircleRight as ArrowIcon } from 'react-icons/hi';
import { HiOutlineArrowNarrowRight as ArrowIcon } from 'react-icons/hi';
import classNames from 'classnames';
import { Tag } from '../../components/Tag/Tag';
import { HeroTitle } from '../../components/typography/HeroTitle';
import Image from 'next/image';

function BlogIndex({ posts }) {
    return (
        <Layout>
            <article className="bg-black text-white">
                <header className="u-container max-w-screen-xl mx-auto py-16 md:py-28">
                    <HeroTitle>
                        Berry&apos;s{' '}
                        <span className="u-text-gradientbg-2">Blog</span>
                    </HeroTitle>
                </header>
                <div
                    className={classNames(
                        'u-container max-w-screen-xl mx-auto pb-16',
                        'md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-24',
                        'lg:grid lg:grid-cols-3 lg:gap-x-12',
                        'xl:gap-x-16'
                    )}>
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="pb-24 md:pb-0 flex flex-col justify-between">
                            <div className="group">
                                {post.heroImage && (
                                    <Link href={post.url} className="group">
                                        <div
                                            className={classNames(
                                                'relative aspect-video rounded-md overflow-hidden',
                                                'duration-200 transition-all ease-linear'
                                            )}>
                                            <Image
                                                src={`${settings.blog.heroBasedir}/${post.heroImage}`}
                                                alt=""
                                                fill
                                                className="object-cover object-center"
                                                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                                            />
                                        </div>
                                    </Link>
                                )}

                                <Link href={post.url} className="group">
                                    <h2 className="u-fancy-tile mt-2 text-2xl font-medium leading-none">
                                        {post.title}
                                    </h2>
                                </Link>

                                <time
                                    dateTime={post.dateMachine}
                                    className="block text-xs mt-1">
                                    {post.date}
                                </time>
                                <div className="mt-6 font-thin">
                                    {post.abstract}
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                {post.tags && (
                                    <div className="flex gap-2">
                                        {post.tags.map((tag, index) => (
                                            <div key={index}>
                                                <Tag tag={tag} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <Link
                                    href={post.url}
                                    className="flex items-center gap-2 group py-2 px-2">
                                    <span>Read the Post</span>
                                    <ArrowIcon
                                        className={classNames(
                                            'relative top-[2px] text-xl',
                                            'group-hover:translate-x-1 ease-outsine transition-all'
                                        )}
                                    />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </article>
        </Layout>
    );
}

export async function getStaticProps() {
    const posts = [];
    const files = fs.readdirSync(settings.blog.contentDir);
    for (const file of files) {
        const postSlug = file.replace('.md', '');
        const { data } = matter(
            fs.readFileSync(`${settings.blog.contentDir}/${file}`)
        );
        posts.push({
            url: `${settings.blog.baseUrl}/${postSlug}`,
            title: data.title,
            heroImage: data.heroImage ? data.heroImage : null,
            date: data.createdAtDisplay,
            dateMachine: `${data.createdAt
                .toString()
                .slice(0, 4)}-${data.createdAt
                .toString()
                .slice(4, 6)}-${data.createdAt.toString().slice(6, 8)}`,
            tags: data.tags ? data.tags : [],
            sortDate: data.createdAt,
            abstract: data.abstract,
            published: data.published,
        });
    }

    return {
        props: {
            posts: posts
                .filter((post) => post.published === true)
                .sort((a, b) => (a.sortDate > b.sortDate ? -1 : 1)),
        },
    };
}

export default BlogIndex;
