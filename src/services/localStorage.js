export function loadData() {
    try {
        const localData = window.localStorage.getItem('localData');
        return JSON.parse(localData);
    }
    catch(e) {
        console.log('loadData error', e);
    }
}

export function saveData(state) {
    try {
        const stateJson = JSON.stringify(state);
        window.localStorage.setItem('localData', stateJson);
    }
    catch(e) {
        console.log('saveData error', e);
    }
}