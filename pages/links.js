import Layout from '@components/Layout';
import { links } from '@content/links';
import Head from 'next/head';
import Link from 'next/link';

export default function Links() {
	return (
		<>
			<Head>
				<title>Link utili | Andrea Lin</title>
				<meta name="description" content="Raccolta con link o risorse che ritengo utili o interessanti." />
			</Head>

			<Layout>
				<div className="py-20 px-10">
					<nav className="flex flex-wrap gap-x-10">
						{links.map(({ title }, index) => {
							return (
								<Link href={`#${title}`} key={index}>
									<span className="font-mono tracking-wide text-black hover:text-black/50 transition-all cursor-pointer">{title}</span>
								</Link>
							);
						})}
					</nav>
					<div className="flex flex-col gap-y-7 p-10">
						{links.map(({ icon, title, resources }, index) => {
							return (
								<div id={title} className="flex flex-col gap-y-2" key={index}>
									<span className="flex flex-row gap-x-2">
										<h2 className="font-bold text-xl">{title}</h2>
									</span>

									<ul className="flex flex-col list-outside list-disc">
										{resources.map(({ name, link, description }, i) => {
											return (
												<li key={i}>
													<a className="font-mono tracking-wide text-black hover:text-black/50 transition-all" href={link} title={description} target="_blank" rel="noopener noreferrer">
														{name}
													</a>
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</div>
			</Layout>
		</>
	);
}
