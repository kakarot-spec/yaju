import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page';
import { GalleryPage } from './pages/gallery/gallery-page';
import { ProjectsPage } from './pages/projects/projects-page';
import { ContactPage } from './pages/contact/contact-page';
import { MissingProjectLinkPage } from './pages/missing-project-link/missing-project-link-page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Yajoo — Musician' },
  { path: 'gallery', component: GalleryPage, title: 'Gallery — Yajoo' },
  { path: 'projects', component: ProjectsPage, title: 'Projects — Yajoo' },
  { path: 'project-link-unavailable', component: MissingProjectLinkPage, title: 'Project Link Unavailable — Yajoo' },
  { path: 'contact', component: ContactPage, title: 'Contact — Yajoo' },
  { path: '**', redirectTo: '' },
];
