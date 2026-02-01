import { Component } from '@angular/core';
import { BookAPIService } from '../book-api';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  books:any; 
  errMessage:string='' 
  constructor(private _service: BookAPIService){ 
    this._service.getBooks().subscribe({ 
      next:(data)=>{this.books=data}, 
      error:(err)=>{this.errMessage=err} 
    }) 
  } 
} 
