import { PhotoService } from './../../services/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photoResult:any;
  constructor(public photoService: PhotoService) { }

  ngOnInit(): void {
// this.photoService.getAllPhotos().subscribe((data:any)=>{
//   this.photoResult=data;
// });
  }

}
