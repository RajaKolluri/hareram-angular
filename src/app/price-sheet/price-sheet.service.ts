import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PriceSheetService {
  constructor(private jsonp: Jsonp) {}
  private animalUrl = 'http://localhost:8181/pricesheet/led';
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
    console.log(this.obj);
  }
}
