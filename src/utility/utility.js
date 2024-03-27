import toast from 'react-hot-toast';

const getLocalData = () => {
    const getData = localStorage.getItem('read-books');
    if (getData) {
        return JSON.parse(getData);
    }
    return [];
}
const saveLocalData = (id) => {
    const getStoredData = getLocalData();
    const isExit = getStoredData.find(getId => getId == id)
    if (!isExit) {
        getStoredData.push(id)
        localStorage.setItem('read-books', JSON.stringify(getStoredData));
        toast('Successfully Books Added to Read List', {
            style: {
                background: '#59C6D2',
                color: '#ffffff',
                border: '1px solid #000000'
            },
            icon: '✔️'
        });
    }
    else {
        toast('Books Already Added to Read list.', {
            style: {
                background: '#A0153E',
                color: '#ffffff',
                border: '1px solid #000000'
            },
            icon: '❌'
        });
    }

}
const getWhishData = () => {
    const getData = localStorage.getItem('WhishList');
    if (getData) {
        return JSON.parse(getData);
    }
    return [];

}
const saveWishData = (id) => {
    const localData = getLocalData();
    const isRead = localData.find(ld => ld == id);
    const getStoredData = getWhishData();
    const isExit = getStoredData.find(getId => getId == id)



    if (!isRead) {
        if (!isExit) {
            getStoredData.push(id)
            localStorage.setItem('WhishList', JSON.stringify(getStoredData));
            toast('Successfully Books Added to WhisList', {
                style: {
                    background: '#59C6D2',
                    color: '#ffffff',
                    border: '1px solid #000000'
                },
                icon: '✔️'
            });
        }
        else {
            toast('Books Already Added to WhishList.', {
                style: {
                    background: '#A0153E',
                    color: '#ffffff',
                    border: '1px solid #000000'
                },
                icon: '❌'
            });
        }
    }
    else {
        toast('You have already read this book.', {
            style: {
                background: '#A0153E',
                color: '#ffffff',
                border: '1px solid #000000'
            },
            icon: '👏'
        });
    }

}


export { getLocalData, saveLocalData, getWhishData, saveWishData}