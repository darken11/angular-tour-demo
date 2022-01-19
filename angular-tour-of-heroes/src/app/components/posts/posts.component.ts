import { UserService } from './../../services/user.service';
import { Post } from './../../post';
import {User} from './../../users';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
//  id=1;
//  title='Post';
//  userId='1';
//  body="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
postsResult:any;
user?:User;
  constructor(private postService:PostService,private userService:UserService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data:any)=>{

      this.postsResult=data;
    });
    this.userService.getUserById(this.postsResult?.[0].userId).subscribe((data:User)=>{
     this.user=data;
    })
  }

}
