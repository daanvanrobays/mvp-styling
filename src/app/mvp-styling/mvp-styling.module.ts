//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { VideoComponent } from './video/video.component';
import { EditorialComponent } from './editorial/editorial.component';
import { PublishedComponent } from './published/published.component';

const routes: Routes = [
  { path: 'video', component: VideoComponent },
  { path: 'editorial', component: EditorialComponent },
  { path: 'published', component: PublishedComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule
    ],
    declarations: [
      VideoComponent,
      EditorialComponent,
      PublishedComponent
    ],
    exports: [
      RouterModule
    ],
})

export class MvpStylingModule { }
