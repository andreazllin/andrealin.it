import Head from 'next/head';
import Link from 'next/link';
import Layout from '@components/Layout';
import Date from '@components/Date';
import { getSortedPostsData } from '@lib/posts';
import Navbar from '@components/Navbar';
import { BsChevronRight } from 'react-icons/bs';

export default function Blog({ allPostsData }) {
	return (
		<>
			<Head>
				<title>Blog posts | Andrea Lin</title>
				<meta name="description" content="Ciao, sono Andrea Lin, attualmente sono uno studente e aspriro a diventare un Full Stack Developer." />
				<meta name="keywords" content="blog, andrea zi liang lin, andrea ziliang lin, andrea zi liang, andrea ziliang, andrea, zi liang, ziliang, andrea lin, zi liang lin, lin, web-dev, mern" />
			</Head>
			<Layout>
				<section className="flex flex-col items-center divide-y sm:items-start p-5 sm:p-10">
					{allPostsData.map(({ id, date, title }) => (
						<Link href={`/posts/${id}`} key={id}>
							<div className="group hover:cursor-pointer flex flex-row items-center justify-between min-w-full py-5 px-10">
								<div className="flex flex-col w-10/12">
									<span>{title}</span>
									<Date dateString={date} />
								</div>
								<div className="transform transition-transform group-hover:translate-x-2">
									<BsChevronRight />
								</div>
							</div>
						</Link>
					))}
				</section>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
