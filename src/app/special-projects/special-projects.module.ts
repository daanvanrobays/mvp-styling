//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

//components
import { BelmodoComponent } from './belmodo/belmodo.component';
import { AmfiFashionShowComponent } from './amfifashionshow/amfi-fashion-show.component';
import { VisualCultureComponent } from './visual/visual-culture.component';

const routes: Routes = [
  { path: 'belmodo', component: BelmodoComponent },
  { path: 'amfi-fashion-show', component: AmfiFashionShowComponent },
  { path: 'visual-culture', component: VisualCultureComponent }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule,
        SharedModule
    ],
    declarations: [
      BelmodoComponent,
      AmfiFashionShowComponent
      VisualCultureComponent
    ],
    exports: [
      RouterModule
    ],
})

export class SpecialProjectsModule { }
