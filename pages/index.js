import Layout from "@components/Layout"
import ContactForm from "@components/ContactForm"
import Skill from "@components/Skill"
import Head from "next/head"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

export default function Home() {
    const birthday = new Date("2002-10-31")

    const calculateAge = (birthday) => {
        let difference = Date.now() - birthday.getTime()
        let date = new Date(difference)
        return Math.abs(date.getUTCFullYear() - 1970)
    }

    const age = calculateAge(birthday)

    return (
        <>
            <Head>
                <title>Andrea Lin | Full Stack Web Developer</title>
                <meta name="description" content="Ciao, sono Andrea Lin, e sono un Full Stack Developer." />
                <meta name="keywords" content="portfolio, andrea zi liang lin, andrea ziliang lin, andrea zi liang, andrea ziliang, andrea, zi liang, ziliang, andrea lin, zi liang lin, lin, web-dev, mern" />
            </Head>

            <Layout>
                <Fade>
                    <div id="aboutme" className="flex gap-10 p-10 items-start flex-col lg:flex-row">
                        <Image className="object-scale-down" height={400} width={400} src="/assets/Photo.jpg" />
                        {/* <div className="flex flex-col gap-5 w-full">
                            <h1 className="font-sans font-semibold text-2xl">Chi sono?</h1>
                            <p className="font-regular text-gray-500 text-sm tracking-wider max-w-sm">Ciao! mi chiamo Andrea Lin, ho {age} anni attualmente lavoro per <a className="font-bold text-black hover:text-black/75 transition transition-opacity" href="https://soluzionifutura.it/" rel="noopener noreferrer" target="_blank">Soluzioni Futura</a>.</p>
                        </div> */}
                        <div className="font-sans text-2xl font-semibold bg-black w-auto sm:w-96 p-10 text-white">
                            Ciao! mi chiamo Andrea Lin, ho {age} anni attualmente sono un developer @ <a className="font-bold text-white/75 hover:text-white/100 transition" href="https://soluzionifutura.it/" rel="noopener noreferrer" target="_blank">Soluzioni Futura</a>.
                        </div>
                    </div>
                </Fade>
                <div id="skills" className="flex flex-col gap-5 p-10 xl:w-11/12 2xl:w-10/12">
                    {/* <Fade>
                            <h1 className="font-sans font-semibold text-2xl">Skills</h1>
                        </Fade>
                        <Fade>
                            <SkillProgress title="Linguaggi" data={languages} />
                        </Fade>
                        <Fade>
                            <SkillProgress title="Librerie / Frameworks" data={libraries} />
                        </Fade>
                        <Fade>
                            <SkillProgress title="Strumenti / Servizi" data={tools} />
                        </Fade> */}
                    <div className="flex flex-col gap-5">
                        <Fade>
                            <h1 className="font-sans font-semibold text-2xl">Skills</h1>
                        </Fade>
                        <Fade>
                            <p className="font-regular text-gray-500 text-lg tracking-wider leading-9">
                                Durante le superiori, a scuola, per lo sviluppo di programmi Desktop ho imparato ad utilizzare <Skill name="C++" color="#00589D" textColor="white" /> <Skill name="Java" color="#E32C2D" textColor="white" /> e a casa ho imparato <Skill name="Python" color="#FCD357" textColor="#306998" />
                                <br />
                                Invece nel campo del Web Development abbiamo studiato <Skill name="HTML" color="#E54C21" textColor="white" /> <Skill name="CSS" color="#0170BA" textColor="white" /> <Skill name="PHP" color="#787CB4" textColor="white" /> <Skill name="JavaScript" color="#F7DF1E" textColor="black" /> quest'ultimo approfondito autonomamente a casa con l'utilizzo di <Skill name="Node.js" color="#026E00" textColor="white" /> e framework come <Skill name="Express.js" color="#969696" textColor="white" /> per il backend e <Skill name="React.js" color="#2A2C2E" textColor="#61DAFB" /> <Skill name="Next.js" color="#1E272E" textColor="white" /> per il frontend.
                                <br />
                                Per la gestione dei database, a scuola, abbiamo utilizzato <Skill name="MySQL" color="#00618A" textColor="#E48E00" />, in autonomia ho utilizzato <Skill name="MongoDB" color="#439240" textColor="white" /> <Skill name="Firebase" color="#F5820B" textColor="white" />
                                <br />
                                Ora lavoro con <Skill name="TypeScript" color="#3178C6" textColor="#FFFFFF" /> sia in frontend che in backend.
                                <br />
                                <br />
                                Fun fact: sono certificato <Skill name="C1" color="#E32C2D" textColor="gold" /> in inglese.
                            </p>
                        </Fade>
                    </div>
                </div>
                <Fade>
                    <div id="contactme" className="flex flex-col gap-5 p-10 w-full sm:w-96 md:w-9/12 xl:w-7/12">
                        <h1 className="font-sans font-semibold text-2xl">Contattami</h1>
                        <ContactForm />
                    </div>
                </Fade>
            </Layout>
        </>
    )
}
