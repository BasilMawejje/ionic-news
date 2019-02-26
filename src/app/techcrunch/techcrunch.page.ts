import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-techcrunch',
  templateUrl: './techcrunch.page.html',
  styleUrls: ['./techcrunch.page.scss'],
})
export class TechcrunchPage implements OnInit {
  data : any;
  constructor(private newsService: NewsService, 
              private router: Router,
              public toastController: ToastController) { 
                this.doRefresh(0);
              }

  ngOnInit() {
    this.newsService
        .getData('top-headlines?sources=techcrunch')
        .subscribe(data => {
          console.log(data);
          this.data = data;
        });
  }

  doRefresh(event) {
    this.newsService
        .getData('top-headlines?sources=techcrunch')
        .subscribe(data => {
          console.log(data);
          this.data = data;
          if(event != 0){
            event.target.complete();
          }
        });
      this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Fetching Techcrunch News',
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
