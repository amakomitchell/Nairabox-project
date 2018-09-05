import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { EventsComponent } from "./events/events.component";

const appRoutes : Routes = [
    {path: '', component: HeaderComponent},
    {path: 'events', component: EventsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}