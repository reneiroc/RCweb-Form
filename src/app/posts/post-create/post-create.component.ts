
import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']

})

export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  // Output decorator permiter accesar el aveneto desde otro componente
  // accible del componte padra, solo del componente padre
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost() {

    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
    console.log (post);
  }

}

