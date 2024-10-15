import { Inter, Lusitana, Urbanist } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const urbanist = Urbanist({
	subsets: ["latin"],
	weight: "variable",
});
export const lusitana = Lusitana({
	weight: ["400", "700"],
	subsets: ["latin"],
});
