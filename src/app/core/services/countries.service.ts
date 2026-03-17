import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, take } from 'rxjs';
import { Country } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private httpClient: HttpClient) {

  }
  
  url = 'https://restcountries.com/v3.1/all?fields=name,population,flags,cca3';

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}`).pipe(
      shareReplay(1)
    )
    // .subscribe(value => {
    //   console.log('some response?', value);
    // })
  }
}
