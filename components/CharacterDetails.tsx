import { addFavorite, removeFavorite } from "@/redux/features/favoritesSlice";
import { RootState } from "@/redux/store";
import { Button } from "@/stories/Button";
import getLastValueBeforeSlash from "@/utils/getLastValueBeforeSlash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function CharacterDetails({ character }: any) {
  const [charFilms, setCharFilms] = useState<string[]>([]);
  const [starShipsData, setStarShipsData] = useState<string[]>([]);
  const [homeworldName, setHomeWorldName] = useState();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const films = await Promise.all(
          character.films.map((url: string) =>
            fetch(url).then((res) => res.json())
          )
        );

        const starships = await Promise.all(
          character.starships.map((url: string) =>
            fetch(url).then((res) => res.json())
          )
        );

        const homeWorldData = await fetch(character?.homeworld).then((res) =>
          res.json()
        );

        setStarShipsData(starships);
        setHomeWorldName(homeWorldData?.name);
        setCharFilms(films);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favorites.some(
    (fav: any) =>
      getLastValueBeforeSlash(fav.url) ===
      getLastValueBeforeSlash(character.url)
  );

  return (
    <div className="max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">{character.name}</h1>

        <div
          onClick={() => {
            if (isFavorite) {
              dispatch(removeFavorite(getLastValueBeforeSlash(character.url)));
            } else {
              dispatch(addFavorite(character));
            }
          }}
        >
          {isFavorite ? (
            <Button variant="secondary" label="Remove from Favorites" />
          ) : (
            <Button variant="primary" label="Add to Favorites" />
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          <p>
            <strong>Hair Color:</strong> {character.hair_color}
          </p>
          <p>
            <strong>Eye Color:</strong> {character.eye_color}
          </p>
          <p>
            <strong>Height:</strong> {character.height}
          </p>
          <p>
            <strong>Birth Year:</strong> {character.birth_year}
          </p>
        </div>
        <div>
          <p>
            <strong>Home World:</strong> {homeworldName}
          </p>
          <p>
            <strong>Skin Color:</strong> {character.skin_color}
          </p>
          <p>
            <strong>Mass:</strong> {character.mass}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold text-blue-700">
          Character Films and Starships
        </h2>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mt-2">
            <p className="font-semibold">Films:</p>
            <ul className="list-disc ml-6">
              {charFilms?.map((film: any, index) => (
                <li key={index}>{film.title}</li>
              ))}
            </ul>
          </div>

          <div className="mt-2">
            <p className="font-semibold">Starships:</p>
            <ul className="list-disc ml-6">
              {starShipsData.length > 0 ? (
                starShipsData.map((starship: any, index) => (
                  <li key={index}>{starship.name}</li>
                ))
              ) : (
                <p>No starships available</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
