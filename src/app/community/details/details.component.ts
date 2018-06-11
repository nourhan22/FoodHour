import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/shared/models/interfaces/IPost';
import { ISmallPost } from 'src/app/shared/models/interfaces/ISmallPost';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:number;
  postItem:IPost;
  popularPosts:ISmallPost[];
  recentPosts:ISmallPost[];
  public txtsearch:string = '';
  constructor(private postService:PostService,private ActivatedRoute:ActivatedRoute,) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(
      
       (params)=>{  this.id = params['id'];}
     )
 
    this.postItem = this.postService.GetById(this.id);

    this.popularPosts = this.postService.popularPots;
    this.recentPosts = this.postService.recentPosts;
  }

  // search()
  // {
  //  var txt = this.txtsearch;
  //   if(txt !='')
  //   {
  //     debugger;

  //     this.popularPosts.filter(function(ele){
  //       console.log(ele.title.toLowerCase().includes(txt.toLowerCase()));
  //       return ele.title.toLowerCase().includes(txt.toLowerCase());
  //     })

  //     debugger;
  
  //   }
  //   else{
  //     this.popularPosts = this.postService.popularPots;
  //   }
  
  // }

}
