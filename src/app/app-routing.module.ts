import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LandingComponent} from "./landing/landing.component";
import {AppLandingComponent} from "./app-landing/app-landing.component";
import {BlogLandingComponent} from "./blog-landing/blog-landing.component";
import {ExperimentLandingComponent} from "./experiment-landing/experiment-landing.component";
import {AboutMeComponent} from "./about-me/about-me.component";

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'apps', component: AppLandingComponent},
  {path: 'blogs', component: BlogLandingComponent},
  {path: 'experiments', component: ExperimentLandingComponent},
  {path: 'about', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
