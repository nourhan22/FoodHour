import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostListingComponent } from './post-listing/post-listing.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [,
    PostComponent,
    PostListingComponent,
    DetailsComponent
]
})
export class CommunityModule { }
