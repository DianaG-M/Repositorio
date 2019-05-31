import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ToolsComponent } from './components/tools/tools.component';
import { SoftskillsComponent } from './components/softskills/softskills.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutmeComponent,
    ProjectsComponent,
    ToolsComponent,
    SoftskillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
