import type { Metadata } from "next";

import { Montserrat } from "next/font/google";

import "@/app/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Next.JS Tailwind CSS Starter Template",
		template: "%s | Superior Software Solutions",
	},
	description: "Starter template for Next.JS projects using Tailwind CSS.",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
