import { createContext, useState, useEffect } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    itemIsFavorite: (meetupId) => { },
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    useEffect(() => {
        fetchFavoritesFromServer();
    }, []);

    async function fetchFavoritesFromServer() {
        try {
            const response = await fetch('YOUR_SERVER_ENDPOINT');
            if (!response.ok) {
                throw new Error('Failed to fetch favorites from server');
            }
            const data = await response.json();
            setUserFavorites(data.favorites);
        } catch (error) {
            console.error(error);
        }
    }

    async function addFavoriteHandler(favoriteMeetup) {
        try {
            const response = await fetch('YOUR_SERVER_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(favoriteMeetup),
            });
            if (!response.ok) {
                throw new Error('Failed to add favorite to server');
            }
            setUserFavorites((prevUserFavorites) => {
                return prevUserFavorites.concat(favoriteMeetup);
            });
        } catch (error) {
            console.error(error);
        }
    }

    async function removeFavoriteHandler(meetupId) {
        try {
            const response = await fetch(`YOUR_SERVER_ENDPOINT/${meetupId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to remove favorite from server');
            }
            setUserFavorites((prevUserFavorites) => {
                return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
            });
        } catch (error) {
            console.error(error);
        }
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;
