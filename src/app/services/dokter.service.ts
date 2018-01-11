import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import {Dokter} from '../models/dokter';
import 'rxjs/add/operator/map'

@Injectable()

export class DokterService{
    constructor(private http:Http){

    }

    getData(){
        return this.http.get('assets/dokters.json')
            .map(this.parseData);
    }

    getDokterById(fid:number){
        return this.http.get('assets/dokters.json')
            .map((res:Response) => {
                let body = res.json();
                if(body){
                    for(let res of body["Huisartsen"]){
                        if(res.fid == fid){
                            let huisarts = new Dokter(res.naam,res.huisnr,res.type,res.straat,res.gemeente,res.postcode,res.telefoon,res.geslacht,res.fid);
                            return huisarts;
                        }
                    }
                }
            },
            
            err => {
                console.log(err.message);
            }
        )
    }

   /* private parseDataByID(res:Response,fid:number){
        let body = res.json();
        console.log(body);
        let huisarts:Dokter;
        fid=res.
    }*/

    private parseData(res:Response){
        let body = res.json();
        console.log(body);
        let huisartsen:Array<Dokter> = [];
        if(body){
            //console.log(body["Huisartsen"]);
            for(let res of body["Huisartsen"]){
                let huisarts = new Dokter(res.naam,res.huisnr,res.type,res.straat,res.gemeente,res.postcode,res.telefoon,res.geslacht,res.fid);
                huisartsen.push(huisarts);
                
            }
        console.log(huisartsen);

        }

        return huisartsen;
    }

    private handleError(err:any):any{
        
            }

    
}