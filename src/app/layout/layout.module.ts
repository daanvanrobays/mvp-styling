import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent
    ]
})

export class LayoutModule { }
