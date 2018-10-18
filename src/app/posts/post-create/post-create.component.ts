
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onAddPost(form: NgForm) {
    if (form.valid === false) {


      return;
    }

    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
    console.log (post);
  }

}

