import { useEffect, useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import Content from "./components/Content";
import Footer from "./components/Footer";
import getChracaters from "./services/fetchData";

function App() {
    const [search, setSearch] = useState("");
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getChracaters().then((data) => {
            setCharacters(data);
            setFilteredCharacters(data);
            setLoading(false);
        });
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        setFilteredCharacters(
            characters.filter((character) =>
                character.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, characters]);

    console.log(filteredCharacters);

    return (
        <div className="grid overflow-hidden grid-cols-none grid-rows-9 gap-2 items-center justify-center">
            <div className="h-24">
                <div className="box col-start-1 col-span-4 flex items-center justify-center">
                    <div className="flex flex-col gap-2 my-4">
                        <h1 className="text-center">
                            Ricky & Morty{" "}
                            <span className="text-blue-400">Database</span>
                        </h1>
                        <input
                            className="placeholder:ml-4 placeholder:opacity-50 border-2 border-gray-300 rounded-md p-2 focus:outline-none text-black"
                            type="text"
                            placeholder="Search"
                            onChange={handleSearch}
                            value={search}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                {loading ? (
                    <FadeLoader color="white" />
                ) : (
                    <Content props={filteredCharacters} />
                )}
            </div>
            <div className="flex flex-col items-center justify-center">
                <Footer />
            </div>
        </div>
    );
}

export default App;
