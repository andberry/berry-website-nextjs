import { settings } from '../../data/settings';
import Layout from '../../components/layout/layout';
import fs from 'fs';
import * as matter from 'gray-matter';
import Link from 'next/link';
// import { HiArrowCircleRight as ArrowIcon } from 'react-icons/hi';
import { HiOutlineArrowNarrowRight as ArrowIcon } from 'react-icons/hi';
import classNames from 'classnames';

function BlogIndex({ posts }) {
    return (
        <Layout>
            <article className="bg-black0 text-white">
                <header className="u-container max-w-screen-md mx-auto py-16 md:py-28">
                    <h1 className="u-big-title">
                        Berry&apos;s{' '}
                        <span className="u-text-gradientbg-2">Blog</span>
                    </h1>
                </header>
                <div className="u-container max-w-screen-md mx-auto pb-16">
                    {posts.map((post, index) => (
                        <article key={index} className="py-20">
                            <Link href={post.url} className="block">
                                <h2 className="u-fancy-title text-4xl">
                                    {post.title}
                                </h2>
                            </Link>

                            <time
                                dateTime={post.dateMachine}
                                className="block text-sm mt-1">
                                {post.date}
                            </time>
                            <div className="text-xl font-mulish mt-6">
                                {post.abstract}
                            </div>
                            <div className="flex justify-between items-start mt-8">
                                {post.tags && (
                                    <div className="flex gap-2">
                                        {post.tags.map((tag, index) => (
                                            <div
                                                key={index}
                                                className={classNames(
                                                    'flex items-center',
                                                    'text-sm leading-tight text-center text-white',
                                                    'bg-purple px-2 py-1 rounded-sm'
                                                )}>
                                                {tag}
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
