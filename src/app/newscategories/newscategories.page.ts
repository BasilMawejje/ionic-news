import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newscategories',
  templateUrl: './newscategories.page.html',
  styleUrls: ['./newscategories.page.scss'],
})
export class NewscategoriesPage {
  public appPages = [
    {
      title: 'Top Headlines',
      url: '/topheadlines',
      image: '../assets/top-headlines.jpg'
    },
    {
      title: 'BBC News',
      url: '/bbcnews',
      image: '../assets/bbc-news.jpg'
    },
    {
      title: 'Techcrunch',
      url: '/techcrunch',
      image: '../assets/tech-crunch.png'
    },
    {
      title: 'Bitcoin',
      url: '/bitcoin',
      image: '../assets/bitcoin.jpg'
    }
  ];

}
