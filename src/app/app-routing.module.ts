import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { PreReqComponent } from './pre-req/pre-req.component';
import { GetsetupComponent } from './getsetup/getsetup.component';
import { BuildcustomElementComponent } from './buildcustom-element/buildcustom-element.component';
import { AngularElementsComponent } from './angular-elements/angular-elements.component';
import { BuildwithElementsComponent } from './buildwith-elements/buildwith-elements.component';
import { PublishComponent } from './publish/publish.component';
import { UseInFrameworkComponent } from './use-in-framework/use-in-framework.component';
import { WebStandardsComponent } from './web-standards/web-standards.component';


const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'prerequisites',
    component: PreReqComponent
  },
  {
    path: 'gettingsetup',
    component: GetsetupComponent
  },
  {
    path: 'webstandards',
    component: WebStandardsComponent
  },
  {
    path: 'angularelements',
    component: AngularElementsComponent
  },
  {
    path: 'createwithngelement',
    component: BuildwithElementsComponent
  },
  {
    path: 'buildwebcomponent',
    component: BuildcustomElementComponent
  },
  {
    path: 'publish',
    component: PublishComponent
  },
  {
    path: 'usewebcomponent',
    component: UseInFrameworkComponent
  },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
