import { invoices } from "@/app/lib/placeholder-data";

import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// console.log("invoices", invoices);
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
