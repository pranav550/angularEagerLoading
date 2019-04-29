import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonComponent } from "./person/person.component";
import { PageNotfoundComponent } from "./page-notfound/page-notfound.component";
import { ContactComponent } from "./contact/contact.component";
import { CompanyComponent } from "./company/company.component";
const routes: Routes = [
  { path: "", redirectTo: "company", pathMatch: "full" },
  {
    path: "company",
    component: CompanyComponent
  },
  { path: "person", component: PersonComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
