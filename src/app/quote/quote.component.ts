import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
  export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    
    new Quote(1, 'Yegon', 'Success is tyring to succeed.', 'Coders', new Date(2021, 16, 5)),
    new Quote(2, 'Geff', 'Programming isn not about what you know it is about what you can figure out.', 'coder 1', new Date(2021, 16, 5)),
    new Quote(3, 'Charles', "The only way to learn a new programming language is by writing programs in it.", 'Coder2', new Date(2019, 5, 6)),
    new Quote(4, 'Davii', "Any fool can write code that a computer can understand. Good programmers write code that humans can understand", 'Martin Fowler', new Date(2018, 5, 6))
  ];

showDetails(index) {
    this.quotes[index].describe = !this.quotes[index].describe;

  }
  deleteQuotes(deletes, index) {
    if (deletes) {
      this.quotes.splice(index, 1);
    }
  }
  upVote(upvote, index) {
    console.log(index);
    if (upvote) {

      this.quotes[index].upvote += 1;

    }
  }
  downVote(downvote, index) {
    console.log(index);
    if (downvote) {
      this.quotes[index].downvote += 1;

    }
  }
  addQuote(quote) {
    let len = this.quotes.length;
    quote.id = len + 1;
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit() {
  }

}
