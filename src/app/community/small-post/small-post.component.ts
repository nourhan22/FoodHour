import { Component, OnInit,Input } from '@angular/core';
import { ISmallPost } from 'src/app/shared/models/interfaces/ISmallPost';

@Component({
  selector: 'app-small-post',
  templateUrl: './small-post.component.html',
  styleUrls: ['./small-post.component.css']
})
export class SmallPostComponent implements OnInit {
@Input() smallpost:ISmallPost;
  constructor() { }

  ngOnInit() {
  }

}
