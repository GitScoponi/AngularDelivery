import { Injectable } from '@angular/core';
import { IRestaurant } from 'Model/Restaurant.Model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MeatApi } from 'app/app.api';

@Injectable()
export class RestaurantService {
    
    rests: IRestaurant[];
    constructor(private http: Http) { }
    
    getAll(): Observable<IRestaurant[]>
    {
        return this.http.get(`${MeatApi}/restaurants`).map(response => response.json());
    }
}