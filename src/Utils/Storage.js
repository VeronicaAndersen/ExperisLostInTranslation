// Saves key & value in localstorage that contains everything from the specific user. 
export const StorageSave = (key, value) => {
    if (!key) {
        throw new Error('StorageSave: No storage key provided.')
    }
    if (!value) {
        throw new Error('StorageSave: No storage value provided ' + key)
    }
    localStorage.setItem(key, JSON.stringify(value))
} 

// Get data from localstorage.
export const storageRead = key => {
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    } 
    return null;
}

// Removes items in localstorage.
export const storageDelete = key => {
    localStorage.removeItem(key)
}