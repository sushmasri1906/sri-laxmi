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
