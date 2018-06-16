import { Component, OnInit } from '@angular/core';
import {IRecipe} from 'src/app/shared/models/interfaces/IRecipe';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Input } from '@angular/core';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];
  @Input() item:any;
  constructor() { }

  ngOnInit() 
    :void {
      
             this.galleryOptions = [
                 {
                     width: '600px',
                     height: '400px',
                     thumbnailsColumns: 4,
                     imageAnimation: NgxGalleryAnimation.Slide
                 },
                 // max-width 800
                 {
                     breakpoint: 800,
                     width: '100%',
                     height: '600px',
                     imagePercent: 80,
                     thumbnailsPercent: 20,
                     thumbnailsMargin: 20,
                     thumbnailMargin: 20
                 },
                 // max-width 400
                 {
                     breakpoint: 400,
                     preview: false
                 }
             ];
             this.galleryImages = this.item.imageArr;
  }

}
