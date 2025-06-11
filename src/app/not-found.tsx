import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
			<h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
				Page Under Development
			</h1>
			<p className="text-lg text-black mb-6 max-w-xl">
				This page is currently being built and will be available soon.
			</p>
			<Link
				href="/"
				className="text-orange-600 hover:text-orange-700  text-base md:text-lg transition">
				Return to Home
			</Link>
		</div>
	);
}
