import { Container } from '../components/Container';
import { TechIcon } from '../components/TechIcon/TechIcon';
import { FancyTitle } from '../components/typography/FancyTitle';
import Layout from '../components/layout/layout';
import { HeaderTitle } from '../components/HeaderTitle';
import { SkillsGroup } from '../components/SkillsGroup';
import { useState } from 'react';
import { motion, Variant } from 'framer-motion';
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
import { settings } from '../data/settings';
import fs from 'node:fs';
import { ISkillsData } from '../types/skills';

const motionVariantSection: { [key: string]: Variant } = {
    hide: {},
    show: {
        transition: { staggerChildren: 0.1 },
    },
};

export default function SkillsPage({
    skillsData,
}: {
    skillsData: ISkillsData;
}) {
    const [skillsAreInViewport, setSkillsAreInViewport] = useState(false);
    return (
        <Layout>
            <article className="bg-black0 text-white">
                <HeaderTitle>
                    <span className="u-text-gradientbg">Skills</span> and Tech
                </HeaderTitle>

                <motion.section
                    viewport={{ amount: 0.5, margin: '0px 0px -200px 0px' }}
                    onViewportEnter={() => setSkillsAreInViewport(true)}
                    onViewportLeave={() => setSkillsAreInViewport(false)}
                    variants={motionVariantSection}
                    initial="hide"
                    animate={skillsAreInViewport ? 'show' : 'hide'}
                >
                    <Container>
                        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {skillsData.map((item, index) => (
                                <SkillsGroup
                                    key={index}
                                    title={item.title}
                                    skills={item.skills}
                                    id={index}
                                />
                            ))}
                        </div>
                    </Container>
                </motion.section>

                <section className="py-4 xl:py-24 text-white2">
                    <Container>
                        <div className="py-12 max-w-screen-md mx-auto">
                            <FancyTitle className="text-center text-2xl mb-8">
                                What I use on a daily basis
                            </FancyTitle>
                            <div className="flex flex-wrap gap-12 justify-center">
                                <TechIcon
                                    Icon={TbBrandNextjs}
                                    text="Next.js"
                                ></TechIcon>
                                <TechIcon
                                    Icon={DiReact}
                                    text="React"
                                ></TechIcon>
                                <TechIcon
                                    Icon={SiTailwindcss}
                                    text="TailwindCSS"
                                />
                                <TechIcon
                                    Icon={SiTypescript}
                                    text="TypeScript"
                                ></TechIcon>
                                <TechIcon
                                    Icon={SiJavascript}
                                    text="JavaScript"
                                ></TechIcon>

                                <TechIcon
                                    Icon={SiStorybook}
                                    text="Storybook"
                                ></TechIcon>
                                <TechIcon Icon={SiFramer} text="Motion" />
                                <TechIcon Icon={SiHtml5} text="HTML5" />
                                <TechIcon Icon={SiCss3} text="CSS3" />
                                <TechIcon Icon={TbBrandSass} text="Sass" />

                                <TechIcon
                                    Icon={DiDrupal}
                                    text="Drupal"
                                ></TechIcon>
                                <TechIcon
                                    Icon={SiDocker}
                                    text="DDEV"
                                ></TechIcon>
                                <TechIcon Icon={SiGit} text="Git"></TechIcon>
                                <TechIcon
                                    Icon={DiTerminal}
                                    text="CMDline"
                                ></TechIcon>
                                <TechIcon
                                    Icon={SiVisualstudiocode}
                                    text="VS Code"
                                ></TechIcon>
                                <TechIcon Icon={SiJira} text="Jira"></TechIcon>
                                <TechIcon
                                    Icon={SiTrello}
                                    text="Trello"
                                ></TechIcon>
                                <TechIcon Icon={SiNotion} text="Notion" />
                                <TechIcon Icon={SiSlack} text="Slack" />
                                <TechIcon Icon={SiFigma} text="Figma" />
                                <TechIcon Icon={DiApple} text="MacOS" />
                            </div>
                        </div>
                        <div className="py-12 max-w-screen-md mx-auto">
                            <FancyTitle className="text-center text-2xl mb-8">
                                What I use less frequently
                            </FancyTitle>
                            <div className="flex flex-wrap gap-12 justify-center">
                                <TechIcon
                                    Icon={SiEleventy}
                                    text="Eleventy"
                                ></TechIcon>
                                <TechIcon Icon={DiPhp} text="PHP"></TechIcon>
                                <TechIcon
                                    Icon={DiWordpress}
                                    text="WordPress"
                                ></TechIcon>

                                <TechIcon
                                    Icon={SiStatamic}
                                    text="Statamic"
                                ></TechIcon>
                                <TechIcon
                                    Icon={SiCraftcms}
                                    text="CraftCMS"
                                ></TechIcon>
                                <TechIcon
                                    Icon={DiUikit}
                                    text="UIkit"
                                ></TechIcon>
                                <TechIcon Icon={SiGreensock} text="GSAP" />
                                <TechIcon
                                    Icon={DiBootstrap}
                                    text="Bootstrap"
                                ></TechIcon>
                                <TechIcon
                                    Icon={SiVuedotjs}
                                    text="Vue.js"
                                ></TechIcon>
                                <TechIcon
                                    Icon={SiNuxtdotjs}
                                    text="Nuxt"
                                ></TechIcon>
                                <TechIcon
                                    Icon={DiPython}
                                    text="Python"
                                ></TechIcon>
                                <TechIcon
                                    Icon={DiDjango}
                                    text="Django"
                                ></TechIcon>
                                <TechIcon
                                    Icon={SiVagrant}
                                    text="Vagrant"
                                ></TechIcon>
                                <TechIcon Icon={SiAdobexd} text="Adobe XD" />
                                <TechIcon
                                    Icon={SiLinux}
                                    text="Linux"
                                ></TechIcon>
                            </div>
                        </div>
                    </Container>
                </section>
            </article>
        </Layout>
    );
}

export async function getStaticProps() {
    const fileContent = fs.readFileSync(settings.skills.dataFile, {
        encoding: 'utf8',
    });
    return {
        props: {
            skillsData: JSON.parse(fileContent),
        },
    };
}
