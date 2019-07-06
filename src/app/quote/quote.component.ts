import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes:Quote[] = [
        new Quote(1,'Joflix(Dr.Prof.Eng.CGHE)','Success is determined first by the belief system then hardwork and determination',new Date(2018,3,14)),
        new Quote(2,'Joflix','Respect is not give, respect is earned!',new Date(2018,6,9)),
        new Quote(3, 'Joflix(Dr.Prof.Eng.CGHE)','True sapience is when one falls in love, but do not get into confluence, but even truest, is when one do not fall in love!',new Date(2018,1,12)),
        new Quote(4, 'Joflix(Dr.Prof.Eng.CGHE)','Mistakes are good, you should make more!',new Date(2018,0,18)),
        new Quote(5, 'Joflix(Dr.Prof.Eng.CGHE)','Most of the time we fear to fail, forgetting that we are not judged by how much we fail but by how much stronger we come out of the failure!',new Date(2018,2,14) ),
        new Quote(6, 'Joflix(Dr.Prof.Eng.CGHE)','We only have one true friend, a universal friend, the our shadow!',new Date(2019,7,14)),

    ];
    addNewQuote(quote){
     let quoteLength = this.quotes.length;
     quote.id=quoteLength++;
     quote.completeDate = new Date(quote.completeDate)
     this.quotes.push(quote)
     alert('quote added successfully')

 }

    deletequote(isComplete, index){
      if(isComplete){
        let toDelete=confirm(`Are you sure you wanna delete' ${this.quotes[index.name]}`)

        if(toDelete){
          this.quotes.splice(index,1)
        }
      }
    }
    toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    completeQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1);
        }
      }


  constructor() { }
  ngOnInit() {
  }
}
