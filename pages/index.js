import Head from 'next/head';
import Layout from '../components/layout/layout';
import { Text } from '../components/Text/Text';
import ImageBerry from '../public/assets/images/berry.jpg';
import Image from 'next/image';
import classNames from 'classnames';

export default function Homepage() {
    return (
        <>
            <Head>
                <title>andberry.me</title>
                <meta
                    name="description"
                    content="Andrea Berardi web developer personal website"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <article className="bg-black0 text-white shadow-purple shadow-sm">
                    <section
                        className={classNames(
                            'font-righteou',
                            'mx-auto max-w-screen-2xl',
                            'relative',
                            'md:min-h-screen md:flex md:items-center md:py-32'
                        )}>
                        <div className="lg:grid lg:grid-cols-6 lg:gap-8">
                            <div className="w-full lg:col-start-1 lg:col-span-1">
                                <Image
                                    src={ImageBerry}
                                    alt="Berry Image"
                                    className="rounded-full"
                                />
                            </div>

                            <div className="lg:col-start-2 lg:col-span-5 relative">
                                <h1 className="text-hero3 leading-[0.9] font-exo2 font-semibold">
                                    <span className="relative z-30">Hi!</span>
                                    <br />
                                    I&apos;m{' '}
                                    <span className="u-text-gradientbg py-0 px-2">
                                        Berry
                                    </span>
                                    , and I love building web projects
                                    {/*
                                    <div className="opacity-0 intro__text__mask absolute inset-0 bg-lime z-20 transform -translate-x-full"></div>
                                    <div className="intro__text__mask--2 absolute bottom-0 left-0 h-0 w-3 bg-lime300 z-30"></div>
                                    */}
                                </h1>
                            </div>
                        </div>
                    </section>

                    <Text contentPosition="right">
                        <h2>
                            Front-End Developer / Front-End Engineer / Web
                            Developer
                        </h2>
                        <p>
                            I&apos;m <strong>Andrea Berardi</strong>,
                            <br />
                            an italian{' '}
                            <strong>
                                {' '}
                                Front-End Developer / Front-End Engineer / Web
                                Developer
                            </strong>
                            <br />
                            with 10+ years of experience, currently located in
                            Halifax, NS, Canada
                        </p>

                        <p>
                            <strong>I build websites</strong>
                            ,
                            <br /> and my main focus and experience is{' '}
                            <strong>frontend development</strong>.
                        </p>
                    </Text>

                    <Text contentPosition="left">
                        <p>
                            Fallen in love years ago with{' '}
                            <span className="text-violet800">
                                Component-Based development
                            </span>
                            , I work with{' '}
                            <span className="text-violet800 font-bold">
                                CMS
                            </span>{' '}
                            like{' '}
                            <span className="text-violet800">
                                Drupal, Statamic
                            </span>
                            , WordPress, CraftCMS, SSG like Eleventy (11ty), and
                            frontend frameworks like Next.js and Nuxt.js.
                        </p>

                        <p>
                            Content structure and implementing pixel perfect{' '}
                            <span className="text-violet800">
                                responsive layouts
                            </span>{' '}
                            mastering{' '}
                            <span className="text-violet800">CSS</span>,
                            <span className="text-violet800">
                                JavaScript (ES6+)
                            </span>{' '}
                            and using the latest right tool for the job are my
                            daily bread and butter.
                        </p>

                        <p>
                            Attention to details, UI usability, technical SEO
                            best practices and a are good additions to my hard
                            skills set.
                        </p>
                    </Text>

                    <Text contentPosition="center">
                        <p>
                            <span className="text-violet800 font-bold">
                                What am I doing right now?
                            </span>
                            <br />
                            Currently having fun with Statamic, Eleventy and
                            Next.js
                        </p>

                        <p>
                            <span className="text-violet800 font-bold">
                                Plans for the future?
                            </span>
                            <br />
                            Rocket hands-on experience with Jamstack ecostystem,
                            data visualization with Chart.js, and deep dive into
                            technical SEO are on the way.
                        </p>
                    </Text>
                </article>
            </Layout>
        </>
    );
}
