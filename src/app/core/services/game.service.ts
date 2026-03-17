import { inject, Injectable, signal } from '@angular/core';
import { CountriesService } from './countries.service';
import { Country } from '../interfaces/interface';
import { Observable } from 'rxjs';


function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}

@Injectable({
  providedIn: 'root',
})
export class GameService {

private countries: Country[] = [];

  constructor() {
   this.countryService.getCountries().subscribe(data => {
      this.countries = data;
   })
}

  countryService = inject(CountriesService);

  countryOne = signal<Country | null>(null);
  countryTwo = signal<Country | null>(null);


  nextRound() {
    const indexA = getRandomInt(this.countries.length);
    const indexB = getRandomInt(this.countries.length);

    this.countryOne.set(this.countries[indexA]);
    this.countryTwo.set(this.countries[indexB]);
   
    // this.countryOne.set(this.countries.s)
  }

}


