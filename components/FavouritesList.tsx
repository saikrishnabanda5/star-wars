export function FavoritesList({
  favorites,
  onEditFavorite,
  onRemoveFavorite,
}: any) {
  return (
    <div>
      {favorites.length === 0 ? (
        <p>No favorite characters yet.</p>
      ) : (
        <>
          <div className="border p-4 rounded shadow bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-blue-600">
                {favorites.name}
              </h2>
            </div>

            <div className="mt-4 space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                🌍 <span className="font-semibold">Home World:</span> Tatooine
              </p>
              <p className="flex items-center gap-2">
                🏰 <span className="font-semibold">Birth Year:</span>
                {favorites.birth_year}
              </p>
              <p className="flex items-center gap-2">
                🚻 <span className="font-semibold">Gender:</span>{" "}
                {favorites.gender}
              </p>
              <p className="flex items-center gap-2">
                🐱 <span className="font-semibold">Hair Color:</span>
                {favorites.hair_color}
              </p>
              <p className="flex items-center gap-2">
                📏 <span className="font-semibold">Height:</span>{" "}
                {favorites.height}
                cm
              </p>
              <p className="flex items-center gap-2">
                ⚖️ <span className="font-semibold">Mass:</span> {favorites.mass}{" "}
                kg
              </p>
            </div>
            <button
              onClick={() => onEditFavorite("character")}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onRemoveFavorite(favorites.id)}
              className="bg-red-500 text-white px-3 py-1 rounded ml-2"
            >
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  );
}
