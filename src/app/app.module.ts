import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { DrawerComponent } from './drawer/drawer.component';
import { PreReqComponent } from './pre-req/pre-req.component';
import { GetsetupComponent } from './getsetup/getsetup.component';
import { WebStandardsComponent } from './web-standards/web-standards.component';
import { BuildcustomElementComponent } from './buildcustom-element/buildcustom-element.component';
import { AngularElementsComponent } from './angular-elements/angular-elements.component';
import { BuildwithElementsComponent } from './buildwith-elements/buildwith-elements.component';
import { PublishComponent } from './publish/publish.component';
import { UseInFrameworkComponent } from './use-in-framework/use-in-framework.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DrawerComponent,
    PreReqComponent,
    GetsetupComponent,
    WebStandardsComponent,
    BuildcustomElementComponent,
    AngularElementsComponent,
    BuildwithElementsComponent,
    PublishComponent,
    UseInFrameworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
