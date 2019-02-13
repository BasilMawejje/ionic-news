import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-techcrunch',
  templateUrl: './techcrunch.page.html',
  styleUrls: ['./techcrunch.page.scss'],
})
export class TechcrunchPage implements OnInit {
  data : any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService
        .getData('top-headlines?sources=techcrunch')
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
