import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component'; // Import EditComponent here

@NgModule({
  declarations: [
    ManageComponent,
    UploadComponent,
    EditComponent // Add EditComponent to declarations
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    EditComponent // Export EditComponent so it can be used in other modules
  ]
})
export class VideoModule { }
