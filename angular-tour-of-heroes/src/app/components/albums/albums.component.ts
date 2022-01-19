import { AlbumService } from './../../services/album.service';
import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums:any;
  constructor(private albumService:AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data:any)=>{
      this.albums=data;
    })
  }

}
