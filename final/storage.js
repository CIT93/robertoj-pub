const saveLS = mrData => {
    const serializedArr = JSON.stringify(mrData);
    localStorage.setItem("mrd", serializedArr);
};

const getLS = mrData => {
    const retrievedArr = localStorage.getItem("mrd")
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
};

const mrData = getLS();

export { mrData, saveLS, getLS };