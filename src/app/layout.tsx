import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sri Laxmi Sales Corporation",
	description: "Your one-stop solution for all sales needs",
	keywords: [
		"Sri Laxmi Sales Corporation",
		"Crusher Spares",
		"Jaw Crusher",
		"Cone Crusher",
		"Industrial Machinery",
		"Secunderabad",
		"Telangana",
	],
	authors: [{ name: "Sri Laxmi Sales Corporation" }],
	openGraph: {
		title: "Sri Laxmi Sales Corporation",
		description:
			"Delivering reliable and innovative electrical solutions since our inception.",
		url: "https://srilaxmisalescorporation.com",
		siteName: "Sri Laxmi Sales Corporation",
		images: [
			{
				url: "https://res.cloudinary.com/degrggosz/image/upload/v1757136541/29_xxwqnt.png",
				width: 1200,
				height: 630,
				alt: "Sri Laxmi Sales Corporation",
			},
		],
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Sri Laxmi Sales Corporation",
		description:
			"Trusted provider of industrial and commercial electrical solutions.",
		images: [
			"https://res.cloudinary.com/degrggosz/image/upload/v1757136541/29_xxwqnt.png",
		],
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className=" bg-black text-white">
					<NavBar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
