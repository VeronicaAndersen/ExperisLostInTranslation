import { createHeaders } from '.'
import { STORAGE_KEY_USER } from '../../const/StorageKeys'
import { storageRead, StorageSave } from '../../Utils/Storage'

const apiUrl = process.env.REACT_APP_API_URL;

export const addTranslation = async (translationAdded) => {

    const user = storageRead(STORAGE_KEY_USER)

    /*Checks if the amount of translations is over 10. If it over 10 it removes the first translation. 
    This keeps the maximum amount always at 10*/

    if (user.translations.length >= 10) {
        user.translations.splice(0, 1)
    }
    user.translations.push(translationAdded)

    StorageSave(STORAGE_KEY_USER, user)

    //Fetches the user api and sets the translation array to the modified array
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: user.translations
            })

        })
        if (!response.ok) {
            throw new Error('Could not update translation')
        }
        const result = await response.JSON
        return [null, result]
    }
    catch (error) {
        return [error.message, null]
    }

}

export const translationClearHistory = async (userId) => {

    //Fetches the user and makes the array of translations empty
    try {
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        // Throws error if it fails to update the translations
        if (!response.ok) {
            throw new Error('Couldn´t update translations');
        }
        const result = await response.json()

        return [null, result]

    } catch (error) {

        return [error.message, null]

    }

}