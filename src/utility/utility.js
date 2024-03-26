import toast from 'react-hot-toast';


const getLocalData = ()=>{
    const getData = localStorage.getItem('read-books');
    if(getData){
        return JSON.parse(getData);
    }
    return [];

}
const saveLocalData = (data) => {
        const getStoredData = getLocalData();
        const isExit = getStoredData.find(getId => getId.id === data.id)
        if(!isExit){
            getStoredData.push(data)
            localStorage.setItem('read-books', JSON.stringify(getStoredData));
            toast('Books Added to Read List', {
                style: {
                    background: '#23BE0A',
                    color: '#ffffff',
                },
                icon: '✔️'
              });
        }
        else{ toast('Books Added to WhishList.', {
            style: {
              background: '#59C6D2',
              color: '#ffffff',
            },
            icon: '❌'
          });}

}
export { getLocalData, saveLocalData}