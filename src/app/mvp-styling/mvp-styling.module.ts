//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { VideoComponent } from './video/video.component';
import { SideTextComponent } from '../shared/side/side-text.component';

const routes: Routes = [
  { path: 'video', component: VideoComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule
    ],
    declarations: [
      VideoComponent,
      SideTextComponent
    ],
    exports: [
      RouterModule
    ],
})

export class MvpStylingModule { }
