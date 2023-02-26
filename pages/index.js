import Head from 'next/head';
import Layout from '../components/layout/layout';
import { Text } from '../components/Text/Text';
import { HeroTitle } from '../components/typography/HeroTitle';
import ImageBerry from '../public/assets/images/berry.jpg';
import ImageBerryTwitter from '../public/assets/images/berry_twitter.jpg';
import { FancyTitle } from '../components/typography/FancyTitle';
import { DropCap } from '../components/typography/DropCap';
import Image from 'next/image';
import { TechIcon } from '../components/TechIcon/TechIcon';
import classNames from 'classnames';
import { Container } from '../components/Container';

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
                <article className="bg-black0 shadow-purple shadow-sm">
                    <section
                        className={classNames(
                            'text-white',
                            'relative',
                            'min-h-screen flex items-center md:py-32'
                        )}>
                        <Container>
                            <div className="lg:grid lg:grid-cols-6 lg:gap-8">
                                <div
                                    className={classNames(
                                        'w-1/3 mx-auto py-12',
                                        'lg:w-full lg:px-4 lg:py-0',
                                        'lg:col-start-1 lg:col-span-1'
                                    )}>
                                    <Image
                                        src={ImageBerryTwitter}
                                        alt="Berry Image"
                                        className="rounded-lg"
                                    />
                                </div>

                                <div className="lg:col-start-2 lg:col-span-5 relative">
                                    <HeroTitle className="text-center lg:text-left">
                                        <span className="relative z-30">
                                            Hi,{' '}
                                        </span>
                                        I&apos;m{' '}
                                        <span className="u-text-gradientbg">
                                            Berry!
                                        </span>
                                        <br />
                                        I&apos;m a senior{' '}
                                        <span className="u-text-gradientbg-2">
                                            front-end developer
                                        </span>
                                        , and I love building usable and clean
                                        web projects.
                                        {/*
                                    <div className="opacity-0 intro__text__mask absolute inset-0 bg-lime z-20 transform -translate-x-full"></div>
                                    <div className="intro__text__mask--2 absolute bottom-0 left-0 h-0 w-3 bg-lime300 z-30"></div>
                                    */}
                                    </HeroTitle>
                                </div>
                            </div>
                        </Container>
                    </section>

                    <Text
                        contentPosition="right"
                        title="Front-End Developer | Front-End Engineer | Web Developer">
                        <p>
                            I&apos;m <strong>Andrea Berardi (Berry)</strong>,
                            <br />
                            an italian{' '}
                            <strong>
                                {' '}
                                Front-End Developer / Front-End Engineer / Web
                                Developer
                            </strong>
                            <br />
                            with 10+ years of experience, currently located in
                            Halifax, NS, Canada.
                        </p>

                        <p>
                            <strong>I build websites</strong>
                            ,
                            <br /> and my main focus and experience is{' '}
                            <strong>Front-End development</strong>.
                        </p>
                    </Text>

                    <Text contentPosition="left" title="Tech skill">
                        <p>
                            Fallen in love years ago with{' '}
                            <strong>Component-Based development</strong>, I work
                            with frontend frameworks like{' '}
                            <strong>Next.js</strong>, and <strong>CMS</strong>{' '}
                            like Drupal, WordPress, Statamic, CraftCMS, SSG like
                            Eleventy (11ty).
                        </p>

                        <p>
                            Structuring content and implementing pixel perfect{' '}
                            responsive layouts is my daily bread and butter.
                        </p>

                        <p>
                            Attention to details, UI usability, technical SEO
                            best practices are all included in my skills set.
                        </p>
                    </Text>

                    <Text
                        contentPosition="right"
                        title="What am I working on right now?">
                        <p>
                            Currently having fun working on a pretty big
                            headless Next.js/Drupal project, using React,
                            Storybook, and Framer Motion.
                        </p>
                    </Text>
                    <Text contentPosition="left" title="Plans for the future?">
                        <p>
                            Rocket hands-on experience with Jamstack ecostystem,
                            Remix, Svelte and Astro are on my way.
                        </p>
                    </Text>
                </article>
            </Layout>
        </>
    );
}
