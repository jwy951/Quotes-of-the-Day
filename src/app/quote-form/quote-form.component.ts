import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quote = new Quote(0, "", "", "", new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  submitQuote() {
    this.addQuote.emit(this.quote);

  }
// export class FormComponent implements OnInit {
//   @Output() emitQuote = new EventEmitter()
//   quoteStr: string
//   quotePublisher: string
//   quoteAuthor: string
//   theQuote: any

//   submitQuote() {
//     this.theQuote = new Quote(this.quotePublisher, this.quoteAuthor, this.quoteStr)
//     this.quoteStr = ''
//     this.quoteAuthor = ''
//     this.quotePublisher = ''
//     this.emitQuote.emit(this.theQuote)
//   }
  constructor() { }

  ngOnInit(): void {
  }

}

