export const StorageSave = (key, value) => {

    if (!key) {
        throw new Error('StorageSave: No storage key provided.');
    }
    if (!value) {
        throw new Error('StorageSave: No storage value provided ' + key);
    }
    
    localStorage.setItem(key, JSON.stringify(value));

} 

export const storageRead = key => {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    } 
    return null;
}

export const storageDelete = key => {

    localStorage.removeItem(key);
    
}