import { FaGithubAlt, FaInstagram, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { ScrollRotate } from 'react-scroll-rotate';
import Link from 'next/link';

export default function Navbar() {
    return (
		<nav className="flex flex-col w-full sm:w-max px-16 py-8 sm:p-16 gap-8">
			<div className="flex flex-row sm:flex-col gap-10 sm:pl-2">
				<div className="flex flex-col gap-8">
					<ScrollRotate target="scroll" method="perc" loops={1} animationDuration={0.2}>
						<div className="w-24 sm:w-32">
							<Link href="/">
								<img className="object-fit" src="/assets/Logo.svg" alt="Logo Andrea Lin" />
							</Link>
						</div>
					</ScrollRotate>
					<h1 className="text-gray-400 text-xs tracking-wider">Full Stack Web Developer</h1>
				</div>
				<div className="flex flex-row items-center sm:items-start px-2 py-1 sm:flex-col gap-8">
					<ul className="tracking-wide font-mono text-md leading-loose">
						<li>
							<Link href="/#aboutme">Chi sono</Link>
						</li>
						<li>
							<Link href="/#skills">Skills</Link>
						</li>
						<li>
							<Link href="/#contactme">Contattami</Link>
						</li>
						<li>
							<Link href="/posts">Blog</Link>
						</li>
						<li>
							<Link href="/links">Links</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-row gap-2 text-md">
				<a className="text-gray-400 hover:text-black transition-all" href="https://github.com/nilaerdna" rel="noopener noreferrer" target="_blank">
					<FaGithubAlt />
				</a>
				<a className="text-gray-400 hover:text-black transition-all" href="https://www.linkedin.com/in/andrea-lin-583653206" rel="noopener noreferrer" target="_blank">
					<FaLinkedin />
				</a>
				<a className="text-gray-400 hover:text-black transition-all" href="mailto:info@andrealin.it?subject=Ciao Andrea! Abbiamo una proposta interessante per te." rel="noopener noreferrer" target="_blank">
					<FaEnvelope />
				</a>
				<a className="text-gray-400 hover:text-black transition-all" href="https://twitter.com/nilaerdna" rel="noopener noreferrer" target="_blank">
					<FaTwitter />
				</a>
				<a className="text-gray-400 hover:text-black transition-all" href="https://www.instagram.com/andreazllin" rel="noopener noreferrer" target="_blank">
					<FaInstagram />
				</a>
			</div>
		</nav>
	);
}
