import Layout from '@components/Layout';
import Date from '@components/Date';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '@lib/posts';

export default function Post({ postData }) {
	return (
		<>
			<Head>
				<title>{postData.title} | Andrea Lin</title>
				<meta name="description" content={postData.description} />
				<meta name="keywords" content={postData.keywords} />
			</Head>
			<Layout>
				<section className="py-20 px-10">
					<header className="flex flex-col gap-2">
						<h1 className="font-sans font-semibold text-4xl ">{postData.title}</h1>
						<Date dateString={postData.date} />
					</header>
					<article className="prose prose-sm lg:w-11/12 xl:w-9/12">
						<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
					</article>
				</section>
			</Layout>
		</>
	);
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
