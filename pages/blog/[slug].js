import Layout from '../../components/layout/layout';
import { settings } from '../../data/settings';
import fs from 'fs';
import * as matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import classNames from 'classnames';

function BlogPost({ post }) {
    return (
        <Layout>
            <article className="bg-black0 text-white">
                <header className="u-container max-w-screen-md mx-auto py-16 md:py-28">
                    <h1 className="u-big-title">{post.title}</h1>
                    <h3 className="mb-16 mt-6 text-sm">{post.date}</h3>
                </header>
                <div className="u-container max-w-screen-md mx-auto pb-16">
                    <div
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        className={classNames(
                            'font-mulish text-white',
                            'prose prose-neutral xl:prose-xl',
                            'prose-blockquote:text-white prose-a:text-lime',
                            'prose-strong:text-white',
                            'prose-headings:text-purple',
                            'prose-headings:relative',
                            'prose-headings:before:block prose-headings:before:absolute prose-headings:before:-left-6 prose-headings:before:top-0 prose-headings:before:content-[""] prose-headings:before:w-2 prose-headings:before:h-full prose-headings:before:bg-lime',
                            'prose-headings:!mt-20 prose-headings:!mb-6'
                        )}></div>
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

    return {
        props: {
            post: {
                title: data.title,
                date: data.createdAtDisplay,
                content: md.render(content),
            },
        },
    };
}

export default BlogPost;
