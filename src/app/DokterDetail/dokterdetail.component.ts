import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { DokterService } from '../services/Dokter.service';
import { Dokter } from '../models/dokter';

@Component({
    selector:'detail',
    templateUrl: './dokterdetail.component.html',
    styleUrls:['./dokterdetail.component.css']
})

export class DokterDetailComponent implements OnInit{
    @Input() doktertje:Dokter;
    constructor(private activatedRoute:ActivatedRoute, private dokterSVC:DokterService){

    }

    ngOnInit(){
        this.activatedRoute.params.subscribe((params: Params) => {
            let userId = params['fid'];
            console.log(userId);
            return this.dokterSVC.getDokterById(userId).subscribe(data => this.doktertje = data);
        })

        console.log(this.doktertje);
    }
}