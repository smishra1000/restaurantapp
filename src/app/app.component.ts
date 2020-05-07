import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, Events } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";


@Component({
  templateUrl: "app.html",
  selector: "MyApp",
  providers: [StatusBar, SplashScreen]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  Cart: any = [];
  noOfItemsInCart: any;
  noOfItemsInFevrt: any;
  noOfItemsInNews: any;
  noOfItemsInOffer: any;
  name: any;
  imageUrl: any = "assets/img/profile.jpg";
  rootPage: string = "HomePage";
  public uid: string;

  constructor(

    public platform: Platform,
    public statusbar: StatusBar,
    public splashscreen: SplashScreen,
    private events: Events,
  ) {
    this.initializeApp();
  }

  ngOnInit() {
  
  }

  initializeApp() {
    
    if (this.platform.ready()) {
      this.platform.ready().then(res => {
      });
    }
  }

  home() {
    this.nav.setRoot("HomePage");
  }
  resturant(){
    this.nav.push("ResturantPage");
  }

}
