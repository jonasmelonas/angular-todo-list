import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoListComponent } from "./todo/todo-list/todo-list.component";
import { TodoCreateComponent } from "./todo/todo-create/todo-create.component";

const routes: Routes = [
    {
      path: "todos",
      component: TodoListComponent,
    },
    {
      path: "todos/add",
      component: TodoCreateComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }