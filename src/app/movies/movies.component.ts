import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const url: string =
  "https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  list;
  p: number = 1;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.list = data.results;
    });
  }
}
