import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { IPost } from 'src/app/shared/models/interfaces/IPost';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';


@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.css']
})
export class PostListingComponent implements OnInit {
  public post:IPost[];
  constructor(public postServices:PostService) { }

  modalRef: BsModalRef;
 


  ngOnInit() {
    this.postServices.getAll().subscribe(
      (data)=>{
        this.post=data;
      }
    );
  }

}
