import { removeFavorite } from "@/redux/features/favoritesSlice";
import { Button } from "@/stories/Button";
import getLastValueBeforeSlash from "@/utils/getLastValueBeforeSlash";
import { useState } from "react";
import { useDispatch } from "react-redux";
import EditCharacterModal from "./EditCharacterModal";

export function FavoritesList({ favorites }: any) {
  const dispatch = useDispatch();

  const [editingCharacter, setEditingCharacter] = useState<null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

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
                🚻 <span className="font-semibold">Gender:</span>
                {favorites.gender}
              </p>
              <p className="flex items-center gap-2">
                🐱 <span className="font-semibold">Hair Color:</span>
                {favorites.hair_color}
              </p>
              <p className="flex items-center gap-2">
                📏 <span className="font-semibold">Height:</span>
                {favorites.height}
                cm
              </p>
              <p className="flex items-center gap-2">
                ⚖️ <span className="font-semibold">Mass:</span> {favorites.mass}
                kg
              </p>
            </div>
            <div className="flex">
              <Button
                onClick={() => {
                  setIsOpen(true);
                  setEditingCharacter(favorites);
                }}
                variant="primary"
                label="Edit"
              />
              <div className="pl-2"></div>
              <Button
                onClick={() =>
                  dispatch(
                    removeFavorite(getLastValueBeforeSlash(favorites.url))
                  )
                }
                variant="secondary"
                label="Remove"
              />
            </div>
          </div>
        </>
      )}
      {editingCharacter && (
        <EditCharacterModal
          modalIsOpen={modalIsOpen}
          character={editingCharacter}
          onClose={() => {
            setIsOpen(false);
            setEditingCharacter(null);
          }}
        />
      )}
    </div>
  );
}
