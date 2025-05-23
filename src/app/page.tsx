import SearchBar from "@/components/searchBar";

import Header from "@/components/header";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header />
      <SearchBar />
      <div className="flex h-svh w-full items-center justify-center bg-gray-500">
        <h1 className="text-7xl text-white">
          Welcome to Fit Flow - By Elite Coders
        </h1>
      </div>
    </div>
  );
}
