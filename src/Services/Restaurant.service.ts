import { IMenuItem } from './../Model/MenuItem.Model';
import { ErrorHandler } from './../app/app.errorHandler';
import { Injectable } from '@angular/core';
import { IRestaurant } from 'Model/Restaurant.Model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MeatApi } from 'app/app.api';

@Injectable()
export class RestaurantService {
    
    rests: IRestaurant[];
    constructor(private http: Http) { }
    
    getAll(): Observable<IRestaurant[]>
    {
        return this.http.get(`${MeatApi}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError    );
    }
    getById(id: string): Observable<IRestaurant>
    {
        return this.http.get(`${MeatApi}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError );
    }
    getReviews(id: string): Observable<any>
    {
        return this.http.get(`${MeatApi}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError );
    }
    getMenu(id: string): Observable<IMenuItem[]>
    {
        return this.http.get(`${MeatApi}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError );
    }
}