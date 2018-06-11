import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { DetailsComponent } from './details/details.component';
import { PostContentComponent } from './post-content/post-content.component';
import { SmallPostComponent } from './small-post/small-post.component';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    SearchPipe
  ],
  declarations: [,
    PostComponent,
    SearchPipe
,
    DetailsComponent,
    PostContentComponent,
    SmallPostComponent,
    SmallPostComponent
]
})
export class CommunityModule { }
