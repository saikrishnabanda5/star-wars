import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FavoritesList } from "@/components/FavouritesList";
import getLastValueBeforeSlash from "@/utils/getLastValueBeforeSlash";

const FavoritesPage = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorite Characters</h1>
      {favorites.length === 0 ? (
        <p className="h-screen text-center flex items-center justify-center text-xl">
          No favorites added yet.
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {favorites.map((character: any) => (
            <FavoritesList
              key={getLastValueBeforeSlash(character.url)}
              favorites={character}
              onEditFavorite={() => {}}
              onRemoveFavorite={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
