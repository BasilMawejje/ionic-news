import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.page.html',
  styleUrls: ['./topheadlines.page.scss'],
})
export class TopheadlinesPage implements OnInit {
  data : any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService
        .getData('top-headlines?country=us&category=business')
        .subscribe(data => {
          console.log(data);
          this.data = data;
        });

  }

  onGoToNewsSinglePage(article){
      this.newsService.currentArticle = article;
      this.router.navigate(['/news-single']);
  }

}
