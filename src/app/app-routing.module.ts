import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AuthGuard } from './services/auth.guard';
import { SonComponent } from './son/son.component';
import { UserListComponent } from './user-list/user-list.component';
import { Table2Component } from './table2/table2.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { NoPageComponent } from './no-page/no-page.component';
import { DynamicNewComponent } from './dynamic-new/dynamic-new.component';
import { ChildComponent } from './child/child.component';



const routes: Routes = [
  {
   component:ChildComponent,
   path:'child' 
  },
  {
   component:ReactiveComponent,
   path:'reactive',
   children:[
    {path:'form',component:FormComponent}
   ]
  },
  
  {
    component:FormComponent,
    path:'form',
   
  },
  {
    component:UserListComponent,
    path:'userlist'
  },
  {
    component:SonComponent,
    path:'son',
    canActivate:[AuthGuard]
  },
{
  component:Table2Component,
  path:'table2'
},
{
  component:DynamicComponent,
  path:'dynamic',
  children:[
    {
      path:'new',
      component:DynamicNewComponent
    }
  ]

},
// {
//   component:DynamicComponent,
//   path:'dynamic/:id'
// },
{
  component:NoPageComponent,
  path:'**'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
