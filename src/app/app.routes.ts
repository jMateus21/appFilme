import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Overview } from './pages/overview/overview';

export const routes: Routes = [
    {
        path: '', component: Home
    },
    {
        path: 'overview/:id', component: Overview
    }
];
