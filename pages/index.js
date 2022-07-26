import Head from 'next/head'
import Layout from '../components/layout/layout';
import style from '../styles/pages/homepage.module.scss';



export default function Homepage() {
    return (
        <>
            <Head>
                <title>andberry.me</title>
                <meta name="description" content="Andrea Berardi web developer personal website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Layout>
                <article className={ style.article }>
                    <section id="home-hero" className={ style.hero }>
                        <div className={ `${style.hero__image} intro__image` }>
                            IMG
                        </div>

                        <div className={ `${style.hero__text} intro__text` }>
                            <h1 className={ `${style.hero__title} intro__title` }>
                                <span className="relative z-30">Hello,</span>
                                <br />
                                <span className="relative z-30">I'm </span><span className="text-bg-gradient relative z-30 text-fuchsia400 font-black">Berry</span><span className="relative z-30 text-lime300"></span>,
                                <br />
                                and I love building <span className="text-bg-gradient">websites</span>.

                                <div className="intro__text__mask absolute inset-0 bg-lime z-20 transform -translate-x-full"></div>
                                <div className="intro__text__mask--2 absolute bottom-0 left-0 h-0 w-3 bg-lime300 z-30"></div>
                            </h1>
                            <div className={ `${style.hero__introDescription} intro__description` }></div>
                        </div>
                    </section>


                    <section id="home-intro" className={ style.intro }>
                        <div className={ style.intro__text }>
                            <p>I'm <span className="text-violet800 font-bold">Andrea Berardi</span>,
                                <br />an italian 🇮🇹 <span className="text-violet800 font-bold">Web Developer</span> with 10+ years of experience, currently located in Halifax, NS, Canada 🇨🇦
                            </p>

                            <p><span className="text-violet800 font-bold">I build websites</span>,
                                <br /> and my main focus and experience is <span className="text-violet800">frontend development</span>.
                            </p>
                        </div>
                    </section>

                    <section id="home-tech" className={ style.tech }>
                        <div className={ style.tech__text }>
                            <p>Fallen in love with <span className="text-violet800">Component-Based development</span>, I work with <span className="text-violet800 font-bold">CMS</span> like <span className="text-violet800">Drupal, Statamic</span>, WordPress, CraftCMS, SSG like Eleventy (11ty), and frontend frameworks like Next.js and Nuxt.js.
                            </p>

                            <p>Content structure, semantic markup, implementing pixel perfect <span className="text-violet800">responsive layouts</span> mastering <span className="text-violet800">CSS</span>, and a sweet sprinkling of <span className="text-violet800">JavaScript (ES6+)</span> are my daily bread and butter.</p>

                            <p>Attention to details, and UI usability and technical SEO best practices are good additions to my hard skills set.
                            </p>
                        </div>
                    </section>

                    <section id="home-next-steps" className={ style.next }>
                        <div className={ style.next__text}>
                            <p><span className="text-violet800 font-bold">What am I doing right now?</span>
                                <br />
                                Currently having fun with Statamic, Eleventy and Next.js
                            </p>

                            <p><span className="text-violet800 font-bold">Plans for the future?</span>
                                <br />
                                Rocket hands-on experience with Jamstack ecostystem, data visualization with Chart.js, and deep dive into technical SEO are on the way.
                            </p>
                        </div>
                    </section>
                </article>
            </Layout>
        </>
    );
}
