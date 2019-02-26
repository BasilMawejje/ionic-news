import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

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
    private tts: TextToSpeech,
    private iab: InAppBrowser
    ) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
  }

  async onTextToSpeech(){
    this.tts.speak({
      text: this.article.content,
      locale: 'en-GB',
      rate: 1.50
    })
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  async openBrowser(){
    const options : InAppBrowserOptions = {
      location: 'yes',
      hidden: 'no',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      zoom: 'yes',
      hardwareback: 'yes',
      mediaPlaybackRequiresUserAction: 'no',
      shouldPauseOnSuspend: 'no',
      closebuttoncaption: 'Close',
      disallowoverscroll: 'no',
      toolbar: 'yes',
      enableViewportScale: 'no',
      allowInlineMediaPlayback: 'no',
      presentationstyle: 'pagesheet',
      fullscreen: 'yes',
      footer: 'yes'
    }
    this.iab.create(this.newsService.currentArticle.url, '_system', options);
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

  async share() {
    // Either URL or Image
    this.socialSharing.shareViaTwitter(null, null, this.article.url).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }

}
