import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './components/resume/resume.component';
import {ServicesComponent} from './components/services/services.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ContactComponent} from './components/contact/contact.component';
import {BlogComponent} from './components/blog/blog.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
