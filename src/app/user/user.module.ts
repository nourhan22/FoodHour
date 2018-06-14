import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [,
    UserListingComponent,
    UserItemComponent,
    UserDetailsComponent
]
})
export class UserModule { }
