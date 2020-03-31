import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { GenreComponent } from './genre/genre.component';
import { BookInstanceComponent } from './book-instance/book-instance.component';
import { GenreInstanceComponent } from './genre-instance/genre-instance.component';
import { AuthorInstanceComponent } from './author-instance/author-instance.component';
import { AllBookInstanceComponent } from './all-book-instance/all-book-instance.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AuthorComponent, BookComponent, BookComponent, GenreComponent, BookInstanceComponent, GenreInstanceComponent, AuthorInstanceComponent, AllBookInstanceComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
