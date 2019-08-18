//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

//components
import { ConceptComponent } from './concept/concept.component';
import { StrategyComponent } from './strategy/strategy.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: 'concept-identity', component: ConceptComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'video', component: VideoComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule,
        SharedModule
    ],
    declarations: [
      ConceptComponent,
      StrategyComponent,
      VideoComponent
    ],
    exports: [
      RouterModule
    ],
})

export class FashionBrandingModule { }
