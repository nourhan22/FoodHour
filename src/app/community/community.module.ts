import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { DetailsComponent } from './details/details.component';
import { PostContentComponent } from './post-content/post-content.component';
import { AuthorComponent } from './author/author.component';
import { SmallPostComponent } from './small-post/small-post.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [,
    PostComponent,
    DetailsComponent,
    PostContentComponent,
    AuthorComponent,
    SmallPostComponent
]
})
export class CommunityModule { }
