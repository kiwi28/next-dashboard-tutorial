"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
	const saearchParams = useSearchParams();
	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		// Handle search
		const params = new URLSearchParams(event.target.value);
		// console.log(event.target.value);
	};
	return (
		<div className="relative flex flex-1 flex-shrink-0">
			<label
				htmlFor="search"
				className="sr-only"
			>
				Search
			</label>
			<input
				className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
				placeholder={placeholder}
				onChange={handleSearch}
			/>
			<MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
		</div>
	);
}
