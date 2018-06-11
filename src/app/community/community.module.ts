import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';

import { PostListingComponent } from './post-listing/post-listing.component';
import { DetailsComponent } from './details/details.component';


import { DetailsComponent } from './details/details.component';
import { PostContentComponent } from './post-content/post-content.component';
import { AuthorComponent } from './author/author.component';
import { SmallPostComponent } from './small-post/small-post.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [,

    PostComponent,
    PostListingComponent,
    DetailsComponent,
    PostContentComponent,
    AuthorComponent,
    SmallPostComponent

]
})
export class CommunityModule { }
