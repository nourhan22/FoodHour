import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { IPost } from 'src/app/shared/models/interfaces/IPost';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addPost',
  templateUrl: './addPost.component.html',
  styleUrls: ['./addPost.component.css']
})
export class AddPostComponent implements OnInit {

  newpost:IPost;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService , private postService : PostService, private router:Router) {
    this.newpost = {};
    this.newpost.id = this.postService.posts.length+1;
    this.newpost.image = '../assets/images/default.png';
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    
  }

  onSave(template: TemplateRef<any>)
  {

     this.postService.AddNewPost(this.newpost);
     this.modalRef.hide();
     console.log(this.newpost.id);
  }

}
