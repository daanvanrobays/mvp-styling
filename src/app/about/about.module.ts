//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

//components
import { AboutComponent } from 'about.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule,
        SharedModule
    ],
    declarations: [
      AboutComponent,
    ],
    exports: [
      RouterModule
    ],
})

export class AboutModule { }
