import { Component, inject, OnInit } from '@angular/core';
import { CountriesService } from '../../core/services/countries.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-country-list',
  imports: [AsyncPipe],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent implements OnInit {
  countriesList = inject(CountriesService);
  countries$ = this.countriesList.getCountries();

  ngOnInit(): void {
    // this.countriesList.getCountries();
    this.countries$.subscribe();
  }

}
