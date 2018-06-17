import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-small-tab',
  templateUrl: './small-tab.component.html',
  styleUrls: ['./small-tab.component.css']
})
export class SmallTabComponent implements OnInit {

  constructor() { }
@Input() popularPosts;
@Input() recentPosts;
  ngOnInit() {
  }

}
