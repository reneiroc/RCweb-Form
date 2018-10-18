import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})


export class PostListComponent {
  // posts = [
  //   {title: 'Primer Post', content: 'Contenido del primer post'},
  //   {title: 'Segundo Post', content: 'Contenido del segundo post'},
  //   {title: 'Terce Post', content: 'Contenido del tercer post'}
  // ];
  @Input() posts: Post[] = [];
}
