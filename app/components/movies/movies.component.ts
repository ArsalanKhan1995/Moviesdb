import { Component } from '@angular/core';
import {MovieService} from '../../services/movie.service'
@Component({
  moduleId: module.id,
  selector: 'movies',
  templateUrl: `movies.component.html`,
})
export class MoviesComponent  {
  popularList:Array<Object>;
  theatresList:Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  constructor(private _moviesService: MovieService){
    this._moviesService.getPopular().subscribe(res=>{
      this.popularList=res.results;
    });
    this._moviesService.getInTheatre().subscribe(res=>{
      this.theatresList=res.results;
    });
  }
  searchMovies(){
    this._moviesService.searchMovies(this.searchStr).subscribe(res=>{
      this.searchRes=res.results;
    })
  }
}
