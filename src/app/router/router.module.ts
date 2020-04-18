import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "../app.component";
import { TransactionsComponent } from "../transactions/transactions.component";
import { HomeComponent } from "../home/home.component";
import { AddComponent } from '../transactions/add/add.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "trans",
    component: TransactionsComponent,
    data: { title: "Transactions" },
    children: [
      {
        path: "add",
        component: AddComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRouterModule {}
