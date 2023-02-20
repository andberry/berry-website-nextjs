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
    SiNotion,
    SiFigma,
    SiAdobexd,
    SiSlack,
    SiGreensock,
    SiFramer,
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
    DiTerminal,
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
                                        'w-1/3 mx-auto',
                                        'lg:w-full lg:px-2',
                                        'py-12 lg:py-0',
                                        'lg:col-start-1 lg:col-span-1'
                                    )}>
                                    <Image
                                        src={ImageBerryTwitter}
                                        alt="Berry Image"
                                        className="rounded-full"
                                    />

                                    {/*
                                <div className="font-galada text-[12rem] leading-none">
                                    B
                                </div>

                                <div className="font-baumans text-[12rem] leading-none">
                                    B
                                </div>
                                <div className="font-major text-[12rem] leading-none">
                                    B
                                </div>
                                */}
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
                        title="Front-End Developer | Front-End Engineer | Web Developer"
                        dropcap="F">
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

                    <Text contentPosition="left" title="Tech skill" dropcap="T">
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

                    <section className="py-12 text-white2">
                        <Container>
                            <div className="py-12 max-w-screen-md mx-auto">
                                <FancyTitle className="text-center text-2xl mb-8">
                                    What I use on a daily basis
                                </FancyTitle>
                                <div className="flex flex-wrap gap-12 justify-center">
                                    {/*
                                <TechIcon Icon={SiHtml5} text="HTML5" />
                                <TechIcon Icon={SiCss3} text="CSS3" />
                                */}
                                    <TechIcon
                                        Icon={TbBrandNextjs}
                                        text="Next.js"></TechIcon>
                                    <TechIcon
                                        Icon={DiReact}
                                        text="React"></TechIcon>
                                    <TechIcon
                                        Icon={SiTailwindcss}
                                        text="TailwindCSS"
                                    />

                                    <TechIcon
                                        Icon={SiTypescript}
                                        text="TypeScript"></TechIcon>
                                    <TechIcon
                                        Icon={SiJavascript}
                                        text="JavaScript"></TechIcon>

                                    <TechIcon
                                        Icon={SiStorybook}
                                        text="Storybook"></TechIcon>
                                    <TechIcon Icon={SiFramer} text="Motion" />
                                    <TechIcon Icon={TbBrandSass} text="Sass" />

                                    <TechIcon
                                        Icon={DiDrupal}
                                        text="Drupal"></TechIcon>
                                    <TechIcon
                                        Icon={SiDocker}
                                        text="DDEV"></TechIcon>
                                    <TechIcon
                                        Icon={SiGit}
                                        text="Git"></TechIcon>
                                    <TechIcon
                                        Icon={DiTerminal}
                                        text="CMDline"></TechIcon>
                                    <TechIcon
                                        Icon={SiVisualstudiocode}
                                        text="VS Code"></TechIcon>
                                    <TechIcon
                                        Icon={SiJira}
                                        text="Jira"></TechIcon>
                                    <TechIcon
                                        Icon={SiTrello}
                                        text="Trello"></TechIcon>
                                    <TechIcon Icon={SiNotion} text="Notion" />
                                    <TechIcon Icon={SiSlack} text="Slack" />
                                    <TechIcon Icon={SiFigma} text="Figma" />
                                    <TechIcon Icon={DiApple} text="MacOS" />
                                    {/* <DiApple /> */}
                                </div>
                            </div>
                            <div className="py-12 max-w-screen-md mx-auto">
                                <FancyTitle className="text-center text-2xl mb-8">
                                    What I use less frequently
                                </FancyTitle>
                                <div className="flex flex-wrap gap-12 justify-center">
                                    <TechIcon
                                        Icon={DiPhp}
                                        text="PHP"></TechIcon>
                                    <TechIcon
                                        Icon={DiWordpress}
                                        text="WordPress"></TechIcon>
                                    <TechIcon
                                        Icon={SiEleventy}
                                        text="Eleventy"></TechIcon>
                                    <TechIcon
                                        Icon={SiStatamic}
                                        text="Statamic"></TechIcon>
                                    <TechIcon
                                        Icon={SiCraftcms}
                                        text="CraftCMS"></TechIcon>
                                    <TechIcon
                                        Icon={DiUikit}
                                        text="UIkit"></TechIcon>
                                    <TechIcon Icon={SiGreensock} text="GSAP" />
                                    <TechIcon
                                        Icon={DiBootstrap}
                                        text="Bootstrap"></TechIcon>
                                    <TechIcon
                                        Icon={SiVuedotjs}
                                        text="Vue.js"></TechIcon>
                                    <TechIcon
                                        Icon={SiNuxtdotjs}
                                        text="Nuxt"></TechIcon>
                                    <TechIcon
                                        Icon={DiPython}
                                        text="Python"></TechIcon>
                                    <TechIcon
                                        Icon={DiDjango}
                                        text="Django"></TechIcon>
                                    {/*<TechIcon Icon={SiGulp} text="Gulp"></TechIcon>*/}

                                    <TechIcon
                                        Icon={SiVagrant}
                                        text="Vagrant"></TechIcon>
                                    <TechIcon
                                        Icon={SiAdobexd}
                                        text="Adobe XD"
                                    />
                                    <TechIcon
                                        Icon={SiLinux}
                                        text="Linux"></TechIcon>
                                </div>
                            </div>
                        </Container>
                    </section>

                    <Text
                        contentPosition="left"
                        title="What am I working on right now?"
                        dropcap="N">
                        <p>
                            Currently having fun working on a pretty big
                            headless Next.js/Drupal project, using React,
                            Storybook, and Framer Motion.
                        </p>
                    </Text>
                    <Text
                        contentPosition="right"
                        title="Plans for the future?"
                        dropcap="F">
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
