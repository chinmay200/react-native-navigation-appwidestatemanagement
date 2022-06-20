import { createContext, useState } from "react";

export const FavoriteContext = createContext();

function FavoriteContextProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function addFavorite(id) {
    setFavoriteIds((prevIds) => [...prevIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteIds((prevIds) => prevIds.filter((prevIds) => prevIds !== id));
  }

  const value = {
    ids: favoriteIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
