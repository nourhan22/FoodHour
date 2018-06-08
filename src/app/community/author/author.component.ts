import { Component, OnInit ,Input} from '@angular/core';
import { IAuthor } from 'src/app/shared/models/interfaces/IAuthor';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
@Input()author:IAuthor;
  constructor() { }

  ngOnInit() {
  }

}
