import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bbcnews',
  templateUrl: './bbcnews.page.html',
  styleUrls: ['./bbcnews.page.scss'],
})
export class BbcnewsPage implements OnInit {
  data : any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService
        .getData('top-headlines?sources=bbc-news')
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
