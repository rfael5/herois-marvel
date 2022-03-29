import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  public_key = '2a76adf47e8e26095aed5a47e7faa120';
  hash = '7acf94bf0afe1b38e75c76af9aaf72f3';
  url_api = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.public_key}&hash=${this.hash}`;

  constructor(private http: HttpClient) { }

  getAllCharacters () : Observable<any> {
    return this.http.get<any>(this.url_api)
    .pipe(map((data:any) => data.data.results))
  }

  getAllComics (id:string) : Observable<any> {
    const url_comic = `https:gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=${this.public_key}&hash=${this.hash}`;
    return this.http.get<any>(url_comic)
    .pipe(map((data:any) => {return data.data.results}))
  }
}
