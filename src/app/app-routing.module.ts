import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DokterOverviewComponent } from './DokterOverview/dokteroverview.component';
import { DokterDetailComponent } from './DokterDetail/dokterdetail.component';

const appRoutes:Routes=[
    {path:'',component:DokterOverviewComponent},
    {path:'detail/:fid', component:DokterDetailComponent},
];

export const routing = RouterModule.forRoot(appRoutes);