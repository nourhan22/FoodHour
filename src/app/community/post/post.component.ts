import { Component, OnInit, Input } from '@angular/core';
import { IPost } from 'src/app/shared/models/interfaces/IPost';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()  public item: IPost;
  constructor() { }

  ngOnInit() {
  }

}
