import { Routes } from '@angular/router';
import { BiographyComponent } from './components/biography/biography.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { QueryComponent } from './components/query/query.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'biography', pathMatch: 'full' },
  { path: 'biography', component: BiographyComponent, title: 'Biography' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects' },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent,
    title: 'Project Details',
  },
  { path: 'query', component: QueryComponent, title: 'Query' },
  { path: '**', redirectTo: 'biography' },
];
