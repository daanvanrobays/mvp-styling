//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

//components
import { ArtistsComponent } from './artists/artists.component';
import { VideoComponent, SafePipe } from './video/video.component';
import { EditorialComponent } from './editorial/editorial.component';
import { PublishedComponent } from './published/published.component';
import { TwoOfAKindComponent } from './editorial/twoofakind/twoofakind.component';
import { FFFFFFComponent } from './editorial/ffffff/ffffff.component';
import { TabooComponent } from './editorial/taboo/taboo.component';
import { FinesseComponent } from './editorial/finesse/finesse.component';
import { GuardianComponent } from './editorial/guardian/guardian.component';
import { EnRoseComponent } from './editorial/213enrose/en-rose.component';
import { PatchesComponent } from './artists/patches/patches.component';
import { TheColorGreyComponent } from './artists/thecolorgrey/thecolorgrey.component';
import { GaidaComponent } from './artists/gaida/gaida.component';

const routes: Routes = [
  { path: 'artists', component: ArtistsComponent },
  { path: 'artists/thecolorgrey', component: TheColorGreyComponent },
  { path: 'artists/patches', component: PatchesComponent },
  { path: 'artists/gaida', component: GaidaComponent },
  { path: 'video', component: VideoComponent },
  { path: 'editorial', component: EditorialComponent },
  { path: 'editorial/taboo', component: TabooComponent },
  { path: 'editorial/twoofakind', component: TwoOfAKindComponent },
  { path: 'editorial/FFFFFF', component: FFFFFFComponent },
  { path: 'editorial/finesse', component: FinesseComponent },
  { path: 'editorial/213-en-rose', component: EnRoseComponent },
  { path: 'editorial/guardian', component: GuardianComponent },
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
      ArtistsComponent,
      SafePipe,
      VideoComponent,
      EditorialComponent,
      PublishedComponent,
      TwoOfAKindComponent,
      FFFFFFComponent,
      TabooComponent,
      FinesseComponent,
      GuardianComponent,
      EnRoseComponent,
      PatchesComponent,
      TheColorGreyComponent,
      GaidaComponent
    ],
    exports: [
      RouterModule
    ],
})

export class MvpStylingModule { }
