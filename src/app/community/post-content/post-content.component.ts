import { Component, OnInit ,Input} from '@angular/core';
import { IPost } from 'src/app/shared/models/interfaces/IPost';


@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
@Input() postContent:IPost;
  constructor() { }

  ngOnInit() {
  }

}
