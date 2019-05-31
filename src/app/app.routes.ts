import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ToolsComponent } from './components/tools/tools.component';
import { SoftskillsComponent } from './components/softskills/softskills.component';
import { ContactComponent } from './components/contact/contact.component';

const APP_ROUTES: Routes = [
    { path: 'about_me', component: AboutmeComponent },
    { path: 'proyectos', component: ProjectsComponent},
    { path: 'herramientas', component: ToolsComponent },
    { path: 'habilidades', component:  SoftskillsComponent },
    { path: 'contacto', component: ContactComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'about_me' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

