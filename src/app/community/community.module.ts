import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';

import { PostListingComponent } from './post-listing/post-listing.component';
import { DetailsComponent } from './details/details.component';


import { PostContentComponent } from './post-content/post-content.component';
import { SmallPostComponent } from './small-post/small-post.component';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import { SmallTabComponent } from './small-tab/small-tab.component';

@NgModule({
  imports: [
    CommonModule,
    SearchPipe
  ],
  declarations: [,


    PostComponent,
    PostListingComponent,
    DetailsComponent,
    PostContentComponent,
  

    PostComponent,
    SearchPipe,

    DetailsComponent,
    PostContentComponent,
    SmallPostComponent,

    SmallPostComponent,
    SmallTabComponent
]
,exports:[SmallTabComponent]
})
export class CommunityModule { }
