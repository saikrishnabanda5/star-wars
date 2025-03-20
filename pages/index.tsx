import { useState, useEffect } from "react";
import Pagination from "@/components/Pagination";
import { CharacterCard } from "@/components/CharacterCard";
import { useRouter } from "next/router";
import getLastValueBeforeSlash from "@/utils/getLastValueBeforeSlash";
 
const TOTAL_PAGES = 9;

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/all-characters/${currentPage}`);

        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
      setLoading(false);
    };

    fetchCharacters();
  }, [currentPage]);

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Star Wars Characters</h1>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {characters.map((character: any) => (
            <CharacterCard
              key={getLastValueBeforeSlash(character.url)}
              character={character}
              onViewDetails={() => {
                router.push(`/character/${getLastValueBeforeSlash(character.url)}`);
              }}
            />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
