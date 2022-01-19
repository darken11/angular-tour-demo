import { PhotoComponent } from './components/photo/photo.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user', component: UsersComponent
  },
  {
    path: 'post', component: PostsComponent
  },
  {
    path: 'album', component: AlbumsComponent
  },
  {
    path: 'photo', component: PhotoComponent
  },
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
