import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.page.html',
  styleUrls: ['./bitcoin.page.scss'],
})
export class BitcoinPage implements OnInit {
  data : any;
  constructor(private newsService: NewsService, 
              private router: Router,
              public toastController: ToastController) { }
  utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');

  ngOnInit() {
    this.newsService
        .getData('everything?q=bitcoin&from=utc&sortBy=publishedAt')
        .subscribe(data => {
          console.log(data);
          this.data = data;
        });
  }

  doRefresh(event) {
    this.newsService
        .getData('everything?q=bitcoin&from=utc&sortBy=publishedAt')
        .subscribe(data => {
          console.log(data);
          this.data = data;
        });
    setTimeout(() => {
      event.target.complete();
    }, 2000);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Fetching Bitcoin News',
      color: 'dark',
      duration: 2000
    });
    toast.present();
  }

  onGoToNewsSinglePage(article){
      this.newsService.currentArticle = article;
      this.router.navigate(['/news-single']);
  }

}
