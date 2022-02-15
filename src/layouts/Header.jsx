import React from "react";
import { Link } from "react-location";
import Dropdown from "../components/Dropdown";
import { useSearch } from "../hooks/useSearch";

const Header = () => {
  const [query, setQuery] = React.useState("");
  const { search } = useSearch(query);

  const clearSearchOnClick = () => {
    setQuery("");
  };
  return (
    <header className="max-w-screen-2xl ml-auto mr-auto flex flex-col sm:flex-row items-center justify-between p-4">
      <Link to="/">
        <h1 className="text-gray-200 text-2xl font-bold">FlakeRank</h1>
      </Link>

      <div className="flex items-center max-w-lg w-full gap-4 relative flex-col mt-4 sm:mt-0">
        <input
          type="search"
          className="bg-gray-700 w-full p-2 px-4 rounded-md text-white"
          placeholder="Search by name or owner address"
          value={query}
          onInput={(e) => setQuery(e.target.value)}
        />
        <Dropdown
          data={search.data?.data}
          clearSearchOnClick={clearSearchOnClick}
        />
      </div>
    </header>
  );
};

export default Header;
