import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http, Headers, RequestOptions } from '@angular/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PriceSheetService {
  constructor(private jsonp: Jsonp, private http: Http) {}
  private animalUrl = 'http://localhost:8181/pricesheet/led';
  /*
  private animalUrl = '';
   * http://rest-service.guides.spring.io/greeting
   */
  /*
   * http://api.petfinder.com
   */
  obj: Object;

  getAnimals(animal: string, location: string) {
    console.log('coming here');
    const endPoint = 'pet.find';
    const params = new URLSearchParams();
    params.set('key', '555f8155d42d5c9be4705beaf4cce089');
    /*params.set('location', location);
    params.set('animal', animal);
    params.set('format', 'json');*/
    params.set('callback', 'JSONP_CALLBACK');

    this.obj = this.jsonp
                  .get(this.animalUrl, { search: params })
                  .map(response => response.json());
        /*this.obj = this.http
                  .get(this.animalUrl)
                  ;*/
    console.log('End ' + this.obj);

    const endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44db6a862fba0b067b1930da0d769e98';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http
            .get(this.animalUrl, options)
            .map(res => res.json().main)
            .subscribe(res => console.log('weather json response = ' + JSON.stringify(res))
            );
  }
}

