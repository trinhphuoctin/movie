import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeListComponent } from './home-list/home-list.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { MoviemanagementListComponent } from './moviemanagement-list/moviemanagement-list.component';

const routes: Routes = [

  { path: 'moviemanagements', component: MoviemanagementListComponent },
  { path: 'homes', component: HomeListComponent },
  { path: '', component: DefaultComponent, children:[{
    path: '',
    component: DashboardComponent
  },{
    path: 'posts',
    component: PostsComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeListComponent, MoviemanagementListComponent]
