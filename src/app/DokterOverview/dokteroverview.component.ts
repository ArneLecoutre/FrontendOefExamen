import { Component, OnInit } from '@angular/core';
import { DokterService } from '../services/Dokter.service';
import { Dokter } from '../models/dokter';
import { Router } from '@angular/router';


@Component({
    selector:'overview',
    templateUrl:'./dokteroverview.component.html',
    styleUrls: ['./dokteroverview.component.css']
})

export class DokterOverviewComponent implements OnInit{
    dokters:Array<Dokter>;
    constructor(public dokterSVC:DokterService,private _router:Router){

    }


      ngOnInit(){
          this.dokterSVC.getData().subscribe((data:Array<Dokter>) => this.dokters = data);
          console.log(this.dokters);
    }

   
    

}