import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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
    private socialSharing: SocialSharing
    ) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
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

}
