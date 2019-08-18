//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

//components
import { VideoComponent } from './video/video.component';
import { EditorialComponent } from './editorial/editorial.component';
import { PublishedComponent } from './published/published.component';
import { TwoOfAKindComponent } from './editorial/twoofakind/twoofakind.component';
import { FFFFFFComponent } from './editorial/ffffff/ffffff.component';

const routes: Routes = [
  { path: 'video', component: VideoComponent },
  { path: 'editorial', component: EditorialComponent },
  { path: 'editorial/twoofakind', component: TwoOfAKindComponent },
  { path: 'editorial/FFFFFF', component: FFFFFFComponent },
  { path: 'published', component: PublishedComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule,
        SharedModule
    ],
    declarations: [
      VideoComponent,
      EditorialComponent,
      PublishedComponent,
      TwoOfAKindComponent,
      FFFFFFComponent
    ],
    exports: [
      RouterModule
    ],
})

export class MvpStylingModule { }
