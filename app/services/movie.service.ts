import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
    apikey:string;

  constructor(private _jsonp:Jsonp){
    this.apikey='3a3c27bebd4a37531bb5f7bcadb3e069';
    console.log('MovieServiceInitialized...');
  }
  getPopular(){
     return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
    .map(res => res.json());
  }
  getInTheatre(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-10-15&primary_release_date.lte=2016-12-31&api_key='+this.apikey)
    .map(res=>res.json());
  }

  searchMovies(searchStr:string){
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
    .map(res=>res.json());
  }

  getMovie(id:string){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
   .map(res => res.json());
  }
}
