import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Route[] = [
    {
        path: '',
        component: LayoutComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent },
          { path: 'mvp-styling', loadChildren: './mvp-styling/mvp-styling.module#MvpStylingModule' },
          { path: 'fashion-branding', loadChildren: './fashion-branding/fashion-branding.module#FashionBrandingModule' },
          { path: 'special-projects', loadChildren: './special-projects/special-projects.module#SpecialProjectsModule' },
          { path: 'about', loadChildren: './about/about.module#AboutModule' },
        ]
    },
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    HomeComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
