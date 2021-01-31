import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManualComponent } from './manual/manual.component';
import { CliComponent } from './cli/cli.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ExponentialPipe } from './pipes/exponential-pipe';
import { DirectivesComponent } from './directives/directives.component';
import { Highlight } from './directives/highlighter.directive';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent, ManualComponent, CliComponent, ExponentialPipe, DirectivesComponent,
    Highlight,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
