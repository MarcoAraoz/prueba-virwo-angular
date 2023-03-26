import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prueba-tecnica';
  newsList: any[] = [];
  loading = false;

  constructor(private _api: NewsService) {}
  searchNew(parameter: any) {
    // console.log('Soy el padre');
    // console.log(parameter);
    this.loading = true;
    this._api.getNews(parameter).subscribe(result=>
      {
      console.log(result)
      this.loading = false;
      this.newsList = result.articles
    });
  }
}
