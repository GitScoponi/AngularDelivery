import { Route, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
export const ROUTES : Routes = [
    {path: '', component: HomeComponent},
    {path: 'About', component: AboutComponent}]
