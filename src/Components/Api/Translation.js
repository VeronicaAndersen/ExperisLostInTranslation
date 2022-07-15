import { createHeaders } from "."
import { STORAGE_KEY_USER } from "../../const/StorageKeys"
import { storageRead, StorageSave } from "../../Utils/Storage"

const apiUrl = process.env.REACT_APP_API_URL


const user = storageRead(STORAGE_KEY_USER)

const translations = user.translations

export const addTranslation = async (translation) => {
    translations.push(translation)
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
        if (!response.ok){
            throw new Error("Could not update translation")
        }
        const result = await response.JSON
        return [null, result]
    }
    catch(error) {
        return [error.message, null]
    }

}

export const translationClearHistory = (userId) => {

}