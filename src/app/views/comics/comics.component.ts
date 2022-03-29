import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from 'src/app/shared/characters-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicsSvs:CharactersApiService, private rota:ActivatedRoute) { }

  allComics: any;

  ngOnInit(): void {
    const {id} = this.rota.snapshot.params
    this.comicsSvs.getAllComics(id).subscribe(allComics => 
      {
        this.allComics = allComics
        console.log(this.allComics)
      })
  }

}
