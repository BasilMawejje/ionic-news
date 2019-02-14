import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'News Category',
      url: '/newscategories',
      icon: 'apps'
    },{
      title: 'BBC News',
      url: '/bbcnews',
      icon: 'clock'
    },
    {
      title: 'Techcrunch',
      url: '/techcrunch',
      icon: 'laptop'
    },
    {
      title: 'Bitcoin',
      url: '/bitcoin',
      icon: 'logo-bitcoin'
    },
    {
      title: 'TopHeadlines',
      url: '/topheadlines',
      icon: 'flame'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
