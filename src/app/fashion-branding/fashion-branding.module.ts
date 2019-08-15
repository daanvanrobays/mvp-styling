//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SideTextComponent } from '../shared/side/side-text.component';
import { ConceptComponent } from './concept/concept.component';

const routes: Routes = [
  { path: 'concept-identity', component: ConceptComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule
    ],
    declarations: [
      SideTextComponent,
      ConceptComponent
    ],
    exports: [
      RouterModule
    ],
})

export class FashionBrandingModule { }
