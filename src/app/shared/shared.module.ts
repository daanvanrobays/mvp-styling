//modules
import { NgModule } from '@angular/core';

//components
import { SideTextComponent } from '../shared/side/side-text.component';

@NgModule({
    declarations: [
      SideTextComponent,
    ],
    exports: [
      SideTextComponent
    ],
})

export class SharedModule { }
