import axios from "axios"
import { baseService } from "./baseService";


export class QuanLyNguoiDungService extends baseService { 


    getUser = () => {
        return this.get('/users');
    }

}


export const qlNguoiDungService = new QuanLyNguoiDungService();