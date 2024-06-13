import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';
import { HashDemoComponent } from './pages/hash-demo/hash-demo.component';
import { Jssha256Component } from './pages/jssha256/jssha256.component';
import { Pbkdf2Component } from './pages/pbkdf2/pbkdf2.component';
import { EncrypComponent } from './pages/encryp/encryp.component';
import { AesComponent } from './pages/aes/aes.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'labs',
        component: LabsComponent
    },
    {
        path: 'hash',
        component: HashDemoComponent
    },
    {
        path: 'jssha',
        component: Jssha256Component
    }    ,
    {
        path: 'df2',
        component: Pbkdf2Component
    },
    {
        path: 'encrypt',
        component: EncrypComponent
    },
    {
        path: 'aes',
        component: AesComponent
    }
];
