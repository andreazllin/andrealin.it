import React from "react"
import { NextPage } from "next"
import Link from "next/link"
import Balancer from "react-wrap-balancer"
import { Fade } from "react-awesome-reveal"
import ContactForm from "@/components/ContactForm"
import Head from "@/components/Head"
import Layout from "@/components/Layout"
import { getAge } from "@/utilities/utils"
import Certification from "@/components/Certification"
import certificates from "@/utilities/constants/certificates"

const Home: NextPage = () => {
  return (
    <>
      <Head
        title="Andrea Lin | Full Stack Developer"
        description="Hello, I'm Andrea Lin and I'm a Full Stack Developer."
        keywords={["andrea", "zi liang", "lin", "portfolio", "web-dev"]}
      />
      <Layout>
        <div className="flex flex-col gap-4">
          <Fade>
            <blockquote className="border-l-4 border-l-stone-200 pl-4 py-2 text-2xl font-medium bg-gradient-to-r from-stone-50 to-transparent">
              <Balancer ratio={0.75}>
                {`Hello! My name is Andrea, I am ${getAge("31/10/2002")} years old and I'm currently a developer`} <Link href="https://soluzionifutura.it" className="font-bold underline underline-offset-4"> @soluzionifutura </Link>
              </Balancer>
            </blockquote>
          </Fade>
          <Fade>
            <div id="aboutme">
              <h1 className="text-2xl font-bold">
                About me
              </h1>
              <Balancer className="text-gray-500 text-base tracking-wider leading-normal">
                {`During high school, I learned to use C++ and Java for desktop programming.
                Additionally, I continued to learn Python independently at home.
                In the field of Web Development, I studied HTML, CSS, PHP and JavaScript, delving deeper into the latter using Node and frameworks such as Express for the backend and React for the frontend.
                Regarding database management, I used MySQL in school and MongoDB and Firebase independently.
                Currently, I work with TypeScript for both frontend and backend.
                As an interesting personal fact, I am certified C1 in English, which allows me to communicate effectively in a professional environment in an international setting.`}
              </Balancer>
            </div>
          </Fade>
          <Fade>
            <div id="certificates">
              <h2 className="text-xl font-bold">
                Certificates
              </h2>
              <div className="flex gap-2">
                {
                  // to filter expired certs
                  certificates.map((props, index) => <Certification key={index} {...props} />)
                }
              </div>
            </div>
          </Fade>
          <Fade>
            <h2 className="text-xl font-bold">
              Contact me!
            </h2>
            <ContactForm />
          </Fade>
        </div>
      </Layout>
    </>
  )
}

export default Home
