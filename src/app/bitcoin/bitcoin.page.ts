import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.page.html',
  styleUrls: ['./bitcoin.page.scss'],
})
export class BitcoinPage implements OnInit {
  data : any;
  constructor(private newsService: NewsService, private router: Router) { }
  utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');

  ngOnInit() {
    this.newsService
        .getData('everything?q=bitcoin&from=utc&sortBy=publishedAt')
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
