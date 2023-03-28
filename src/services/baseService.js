import axios from "axios";

export class baseService {

    get = (url) =>{
        return axios({
            url:url,
            method:'GET',
            headers:{
                'Authorization': `Bearer CE9geHOeiQKODsZ72qe18SwdkqcZiF`,

            }
        })
    }

    // post = (url,data) =>{
    //     return axios({
    //         url:url,
    //         data:data,
    //         method:'POST',
    //         headers:{
    //             'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
    //         }
    //     })
    // }

    // put = (url,data) => {
    //     return axios({
    //         url:url,
    //         data:data,
    //         method:'PUT',
    //         headers:{
    //             'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,

    //         }
    //     })
    // }
    // delete = (url) => {
    //     return axios({
    //         url:url,
    //         method:'DELETE',
    //         headers:{
    //             'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
    
    //         }
    //     })
    // }
}
