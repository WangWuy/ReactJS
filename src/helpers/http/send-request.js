import axios from 'axios'
export const sendRequest = async (options) => {
    const {url,...resOptions} = options;
    try{
        axios.request({
            url,
            ...resOptions
        })
    }
    catch(err){
        console.log(err)
    }
}