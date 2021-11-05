import Navbar from '@components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			{/* // sm:bg-red-400 md:bg-gray-400 lg:bg-blue-400 xl:bg-green-400 2xl:bg-indigo-200 */}

			<div className="w-screen h-screen flex flex-col sm:flex-row">
				<Navbar />
				<div id="scroll" className="w-full overflow-y-scroll overflow-x-hidden">
					{children}
				</div>
			</div>
		</>
	);
}
