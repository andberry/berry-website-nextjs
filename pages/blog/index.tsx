import { settings } from '../../data/settings';
import Layout from '../../components/layout/layout';
import fs from 'fs';
import matter from 'gray-matter';
import classNames from 'classnames';
import { HeroTitle } from '../../components/typography/HeroTitle';
import { Container } from '../../components/Container';
import { BlogPostCard } from '../../components/BlogCard/BlogCard';
import { getPlaiceholder } from 'plaiceholder';
import { IBlogCardPost } from '../../components/BlogCard/BlogCard';
import { getBlogPostAbsoluteUrl, getSemanticHtmlDate } from '../../utils/blog';
import { HeaderTitle } from '../../components/HeaderTitle';

interface IBlogIndex {
    posts: IBlogCardPost[];
}

function BlogIndexPage({ posts }: IBlogIndex) {
    return (
        <Layout>
            <article className="bg-black0 text-white2">
                <HeaderTitle>
                    Berry&apos;s{' '}
                    <span className="u-text-gradientbg-2">Blog</span>
                </HeaderTitle>
                <section className={classNames('pb-16')}>
                    <Container>
                        <div
                            className={classNames(
                                'md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-24',
                                'lg:grid lg:grid-cols-3 lg:gap-x-12',
                                'xl:gap-x-16'
                            )}>
                            {posts.map((post, index) => (
                                <BlogPostCard post={post} key={index} />
                            ))}
                        </div>
                    </Container>
                </section>
            </article>
        </Layout>
    );
}

export async function getStaticProps() {
    const posts: IBlogCardPost[] = [];
    const files = fs.readdirSync(settings.blog.contentDir);
    for (const file of files) {
        const postSlug = file.replace('.md', '');
        const { data } = matter(
            fs.readFileSync(`${settings.blog.contentDir}/${file}`)
        );

        // skip unpublished posts
        if (!data.published) {
            continue;
        }

        // generate placeholder image
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

        posts.push({
            url: getBlogPostAbsoluteUrl(postSlug),
            heroImage: data.heroImage,
            heroImageBlurred: placeholder?.base64 ?? '',
            title: data.title,
            semanticHtmlDate: getSemanticHtmlDate(data.createdAt),
            createdAt: data.createdAt,
            createdAtDisplay: data.createdAtDisplay,
            tags: data.tags ?? [],
            published: data.published,
        });
    }

    return {
        props: {
            posts: posts.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)),
        },
    };
}

export default BlogIndexPage;
