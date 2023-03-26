import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  @Output() selectedParameters = new EventEmitter<any>()
  selectedCategory = 'general';
  selectedCountry = 'mx'
  
  categories: any[] = [
    { value: 'general', name: 'General' },
    { value: 'business', name: 'Business' },
    { value: 'entertainment', name: 'Entertainment' },
    { value: 'healt', name: 'Healt' },
    { value: 'science', name: 'Science' },
    { value: 'sports', name: 'Sports' },
    { value: 'technology', name: 'Technology' }
  ];

  countries: any[] = [
    { value: 'mx', name: 'Mexico' },
    { value: 'ar', name: 'Argentina' },
    { value: 'fr', name: 'France' },
    { value: 'gb', name: 'Britain' },
    { value: 'hu', name: 'Hungary' },
    { value: 'br', name: 'Brazil' },
  ];
  constructor() {}

  ngOnInit(): void {}

  searchNew()
  {
    // console.log(this.selectedCategory);
    // console.log(this.selectedCountry);
    const PARAMETERS = {
      category: this.selectedCategory,
      country: this.selectedCountry
    }
    this.selectedParameters.emit(PARAMETERS)
  }
}
