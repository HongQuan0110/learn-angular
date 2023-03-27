import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FormatDataPipe } from './pipes/format-data.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TemplateVariablesComponent } from './components/template-variables/template-variables.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StructuralDirectiveComponent,
    ComponentInteractionComponent,
    PipeComponent,
    FormatDataPipe,
    FilterPipe,
    SortPipe,
    TemplateVariablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
