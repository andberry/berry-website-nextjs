import Head from 'next/head';
import Layout from '../components/layout/layout';
import { Text } from '../components/Text/Text';
import ImageBerry from '../public/assets/images/berry.jpg';
import ImageBerryTwitter from '../public/assets/images/berry_twitter.jpg';
import Image from 'next/image';
import classNames from 'classnames';
import {
    SiTypescript,
    SiJavascript,
    SiVisualstudiocode,
    SiHtml5,
    SiCss3,
    SiGit,
    SiTailwindcss,
    SiJira,
    SiTrello,
    SiStorybook,
    SiGulp,
    SiLinux,
    SiNuxtdotjs,
    SiVuedotjs,
    SiEleventy,
    SiStatamic,
    SiCraftcms,
    SiVagrant,
    SiDocker,
} from 'react-icons/si';
import { TbBrandNextjs, TbBrandSass } from 'react-icons/tb';
import {
    DiApple,
    DiDjango,
    DiDrupal,
    DiWordpress,
    DiPhp,
    DiReact,
    DiPython,
    DiBootstrap,
    DiUikit,
} from 'react-icons/di';

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
                            'mx-auto max-w-screen-2xl u-container',
                            'relative',
                            'min-h-screen flex items-center md:py-32'
                        )}>
                        <div className="lg:grid lg:grid-cols-6 lg:gap-8">
                            <div
                                className={classNames(
                                    'w-1/3 mx-auto md:w-1/4 lg:w-28 xl:w-36',
                                    'py-12 lg:py-0',
                                    'lg:col-start-1 lg:col-span-1'
                                )}>
                                <Image
                                    src={ImageBerryTwitter}
                                    alt="Berry Image"
                                    className="rounded-full"
                                />
                            </div>

                            <div className="lg:col-start-2 lg:col-span-5 relative">
                                <h1 className="text-hero3 leading-[0.9] font-exo2 font-semibold">
                                    <span className="relative z-30">Hi, </span>
                                    I&apos;m{' '}
                                    <span className="u-text-gradientbg">
                                        Berry!
                                    </span>
                                    <br />
                                    I&apos;m a{' '}
                                    <span className="u-text-gradientbg-2">
                                        web developer
                                    </span>
                                    , and I love building usable and clean web
                                    projects.
                                    {/*
                                    <div className="opacity-0 intro__text__mask absolute inset-0 bg-lime z-20 transform -translate-x-full"></div>
                                    <div className="intro__text__mask--2 absolute bottom-0 left-0 h-0 w-3 bg-lime300 z-30"></div>
                                    */}
                                </h1>
                            </div>
                        </div>
                    </section>

                    <Text
                        contentPosition="right"
                        title="Front-End Developer | Front-End Engineer | Web Developer">
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

                    <section className="py-12 u-container mx-auto max-w-screen-lg">
                        <div className="py-12">
                            <h2 className="leading-none uppercase font-thin text-2xl u-text-gradientbg inline-block mb-6">
                                What I used on a daily basis
                            </h2>
                            <div className="flex flex-wrap gap-12 justify-center text-5xl">
                                <SiHtml5 />
                                <SiCss3 />
                                <TbBrandSass />
                                <SiTailwindcss />
                                <SiJavascript />
                                <SiTypescript />
                                <TbBrandNextjs />
                                <DiReact />
                                <SiStorybook />
                                <SiGit />
                                <DiDrupal />
                                <SiVisualstudiocode />
                                <SiJira />
                                <SiTrello />
                                <DiApple />
                            </div>
                        </div>
                        <div className="py-12">
                            <h2 className="leading-none uppercase font-thin text-2xl mb-3 u-text-gradientbg inline-block mb-6">
                                What I use less frequently
                            </h2>
                            <div className="flex flex-wrap gap-12 justify-center text-5xl">
                                <DiPhp />
                                <DiWordpress />
                                <SiEleventy />
                                <SiStatamic />
                                <SiCraftcms />
                                <DiUikit />
                                <DiBootstrap />
                                <SiVuedotjs />
                                <SiNuxtdotjs />
                                <DiPython />
                                <DiDjango />
                                <SiGulp />
                                <SiDocker />
                                <SiVagrant />
                                <SiLinux />
                            </div>
                        </div>
                    </section>

                    <Text
                        contentPosition="right"
                        title="What am I doing right now?">
                        <p>
                            Currently I&apos;m having fun with React and
                            Storybook, working on a headless Next.js/Drupal
                            project.
                        </p>
                    </Text>
                    <Text contentPosition="left" title="Plans for the future?">
                        <p>
                            Rocket hands-on experience with Jamstack ecostystem,
                            I'd love to learn Remix and Svelte.
                        </p>
                    </Text>
                </article>
            </Layout>
        </>
    );
}
