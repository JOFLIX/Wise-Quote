import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ******IMPORTING MODULES, DIRECTIVES & COMPONENTS****
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import {FormsModule} from '@angular/forms';
import { VoteComponent } from './vote/vote.component';
import {TimeAgoPipe} from 'time-ago-pipe';
@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighlightDirective,
    DateCountPipe,
    QuoteFormComponent,
    VoteComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
