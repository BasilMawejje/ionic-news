import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.page.html',
  styleUrls: ['./topheadlines.page.scss'],
})
export class TopheadlinesPage implements OnInit {
  data : any;
  constructor(private newsService: NewsService, 
              private router: Router,
              public toastController: ToastController) { }

  ngOnInit() {
    this.newsService
        .getData('top-headlines?country=us&category=business')
        .subscribe(data => {
          console.log(data);
          this.data = data;
        });

  }

  doRefresh(event) {
    this.newsService
        .getData('top-headlines?country=us&category=business')
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
      message: 'Fetching new data',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done',
      color: 'dark'
    });
    toast.present();
  }

  onGoToNewsSinglePage(article){
      this.newsService.currentArticle = article;
      this.router.navigate(['/news-single']);
  }

}
