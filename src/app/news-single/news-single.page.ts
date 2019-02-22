import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
  text = 'Check out this story!';
  article : any;
  constructor(
    private newsService :NewsService,
    private socialSharing: SocialSharing,
    private iab: InAppBrowser
    ) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
  }

  async openBrowser(){
    const options : InAppBrowserOptions = {
      location     : 'yes',
      hardwareback : 'yes'
    }
    this.iab.create(this.article.url, '_system');
  }

  async shareTwitter() {
    // Either URL or Image
    this.socialSharing.shareViaTwitter(null, null, this.article.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }
 
  async shareWhatsApp() {
    // Text + Image or URL works
    this.socialSharing.shareViaWhatsApp(this.text, null, this.article.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }

  async shareEmail() {
    this.socialSharing.shareViaEmail(this.article.url, 'Checkout this story', ['']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

}
