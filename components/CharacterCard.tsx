import { addFavorite, removeFavorite } from "@/redux/features/favoritesSlice";
import { RootState } from "@/redux/store";
import { Button } from "@/stories/Button";
import getLastValueBeforeSlash from "@/utils/getLastValueBeforeSlash";
import { HeartIcon, HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";

interface CharacterProps {
  character: {
    name: string;
    gender: string;
    birth_year: string;
    hair_color: string;
    height: string;
    mass: string;
  };
  onViewDetails: any;
}

export const CharacterCard: React.FC<CharacterProps> = ({
  character,
  onViewDetails,
}: any) => {
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
    <div className="border p-4 rounded shadow">
      <div className="bg-white  ">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-600">{character.name}</h2>
          <button
            onClick={() => {
              if (isFavorite) {
                dispatch(
                  removeFavorite(getLastValueBeforeSlash(character.url))
                );
              } else {
                dispatch(addFavorite(character));
              }
            }}
            data-tooltip-id="fav-tooltip"
            data-tooltip-content={
              isFavorite ? `Remove from favorites` : `Add to favorites`
            }
            className={`p-2 rounded-full transition-all ${
              isFavorite
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {isFavorite ? (
              <SolidHeart className="w-6 h-6 text-red-500" />
            ) : (
              <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500 transition" />
            )}
          </button>

          <Tooltip id="fav-tooltip" place="top" />
        </div>

        <div className="mt-4 space-y-2 text-gray-700">
          <p className="flex items-center gap-2">
            🌍 <span className="font-semibold">Home World:</span> Tatooine
          </p>
          <p className="flex items-center gap-2">
            🏰 <span className="font-semibold">Birth Year:</span>
            {character.birth_year}
          </p>
          <p className="flex items-center gap-2">
            🚻 <span className="font-semibold">Gender:</span> {character.gender}
          </p>
          <p className="flex items-center gap-2">
            🐱 <span className="font-semibold">Hair Color:</span>
            {character.hair_color}
          </p>
          <p className="flex items-center gap-2">
            📏 <span className="font-semibold">Height:</span> {character.height}
            cm
          </p>
          <p className="flex items-center gap-2">
            ⚖️ <span className="font-semibold">Mass:</span> {character.mass} kg
          </p>
        </div>

        <Button
          variant="primary"
          label="View Details"
          onClick={onViewDetails}
        />
      </div>
    </div>
  );
};
