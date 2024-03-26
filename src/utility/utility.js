const getLocalData = ()=>{
    const getData = localStorage.getItem('read-books');
    if(getData){
        return JSON.parse(getData);
    }
    return [];

}
const saveLocalData = (id) => {
        const getStoredData = getLocalData();
        const isExit = getStoredData.find(getId => getId === id)
        if(!isExit){
            getStoredData.push(id)
            localStorage.setItem('read-books', JSON.stringify(getStoredData))
        }
        else{alert('alreadudd')}

}
export { getLocalData, saveLocalData}