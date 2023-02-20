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
import { Container } from '../../components/Container';
import { BlogCard } from '../../components/BlogCard/BlogCard';

function BlogIndex({ posts }) {
    return (
        <Layout>
            <article className="bg-black0 text-white2">
                <header
                    className={classNames(
                        'pt-32 pb-16 2xl:pt-48 2xl:pb-24 text-white'
                    )}>
                    <Container>
                        <HeroTitle>
                            Berry&apos;s{' '}
                            <span className="u-text-gradientbg-2">Blog</span>
                        </HeroTitle>
                    </Container>
                </header>
                <div className={classNames('pb-16')}>
                    <Container>
                        <div
                            className={classNames(
                                'md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-24',
                                'lg:grid lg:grid-cols-3 lg:gap-x-12',
                                'xl:gap-x-16'
                            )}>
                            {posts.map((post, index) => (
                                <BlogCard post={post} key={index} />
                            ))}
                        </div>
                    </Container>
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
