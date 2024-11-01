"use client";
import { useEffect, useState } from "react";

import EpisodeList from "@/components/EpisodeList";
import CharacterGrid from "@/components/CharacterGrid";
import {
  fetchAllCharacters,
  fetchCharacterByUrl,
  fetchCharactersByEpisode,
  fetchEpisodes,
} from "@/lib/api";
import Pagination from "@/components/Pagination";

const Home: React.FC = () => {
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [characters, setCharacters] = useState<any[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<any[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(10); // Max characters per page
  const [loading, setLoading] = useState(false); //loading state

  useEffect(() => {
    const getEpisodes = async () => {
      setLoading(true);
      const data = await fetchEpisodes();
      setEpisodes(data.results);
      setLoading(false);
    };
    getEpisodes();
  }, []);

  // Fetch all characters on initial load
  useEffect(() => {
    const getAllCharacters = async () => {
      setLoading(true);
      const data = await fetchAllCharacters();
      setCharacters(data.results);
      setLoading(false);
    };
    getAllCharacters();
  }, []);

  const handleEpisodeClick = async (id: number) => {
    setSelectedEpisode(id);
    setLoading(true);
    const characterUrls = await fetchCharactersByEpisode(id.toString());
    const charactersData = await Promise.all(
      characterUrls.map((url: string) => fetchCharacterByUrl(url))
    );
    setCharacters(charactersData);
    setLoading(false);
    setCurrentPage(1); // Reset to first page
  };

  // Handle resetting the episode selection
  const handleResetEpisodes = async () => {
    setSelectedEpisode(null);
    setLoading(true);
    const allCharacters = await fetchAllCharacters();
    setCharacters(allCharacters.results);
    setLoading(false);
    setCurrentPage(1); // Reset to first page
  };

  // Implement pagination logic
  useEffect(() => {
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    setFilteredCharacters(
      characters.slice(indexOfFirstCharacter, indexOfLastCharacter)
    );
  }, [characters, currentPage]);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Next Page functionality
  const handleNextPage = () => {
    if (currentPage < Math.ceil(characters.length / charactersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous Page functionality
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen ">
      <div className="text-center p-2 text-lg font-bold max-h-[10%]">
        Rick and morty characters
      </div>
      <div className="bg-white mx-4 mb-4 rounded-lg flex max-h-[90%]">
        <EpisodeList
          episodes={episodes}
          selectedEpisode={selectedEpisode}
          onEpisodeClick={handleEpisodeClick}
          onResetEpisodes={handleResetEpisodes}
          loading={loading}
        />
        <div className="flex flex-col mb-2 justify-between h-[88vh] w-full">
          {loading ? ( // Show loading indicator while fetching
            <div className="flex items-center justify-center h-full">
              <p className="text-lg font-bold">Loading...</p>
            </div>
          ) : (
            <>
              <CharacterGrid characters={filteredCharacters} />
              <div className="flex flex-row items-center justify-between px-6">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 border rounded-lg transition-colors duration-200 ease-in-out ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
                  }`}
                >
                  Previous
                </button>
                <Pagination
                  currentPage={currentPage}
                  charactersPerPage={charactersPerPage}
                  totalCharacters={characters.length}
                  paginate={paginate}
                />
                <button
                  onClick={handleNextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(characters.length / charactersPerPage)
                  }
                  className={`px-4 py-2 border rounded-lg transition-colors duration-200 ease-in-out ${
                    currentPage ===
                    Math.ceil(characters.length / charactersPerPage)
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
