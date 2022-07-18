import { createHeaders } from "."
import { STORAGE_KEY_USER } from "../../const/StorageKeys"
import { storageRead, StorageSave } from "../../Utils/Storage"

const apiUrl = process.env.REACT_APP_API_URL;

export const addTranslation = async (translationAdded) => {
    const user = storageRead(STORAGE_KEY_USER)
    let translations = user.translations;

    if (translations.length >= 10) {
        translations.splice(0, 1);
    }
    translations.push(translationAdded);

    user.translations = translations
    StorageSave(STORAGE_KEY_USER, user)

    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations: translations
            })

        })
        if (!response.ok) {
            throw new Error("Could not update translation")
        }
        const result = await response.JSON
        return [null, result]
    }
    catch (error) {
        return [error.message, null]
    }

}

export const translationClearHistory = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Couldn´t update translations');
        }
        const result = await response.json();

        return [null, result];

    } catch (error) {

        return [error.message, null];

    }

}