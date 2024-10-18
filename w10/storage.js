const saveLS = (cfpData) => {
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
};

const getLS = cfpData => {
    const retrievedArray = localStorage.getItem("cfp")
    if (retrievedArray !== null) {
        return JSON.parse(retrievedArray);
    } else {
        return [];
    }
};

const cfpData = getLS();

export { cfpData, saveLS, getLS };