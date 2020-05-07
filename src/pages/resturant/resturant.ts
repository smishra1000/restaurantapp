import { Component } from "@angular/core";
import { IonicPage, NavController, LoadingController } from "ionic-angular";
import { map } from "rxjs/operators";
import { ModalController } from 'ionic-angular';
import { FilterModalPage } from '../filter-modal/filter-modal';

@IonicPage()
@Component({
  selector: "page-resturant",
  templateUrl: "resturant.html"
})
export class ResturantPage {
  mySlideOptions = {
    initialSlide: 1,
    loop: true,
    autoplay: 2000,
    pager: false
  };

  categories:any [];
  filteredCategories:any[]

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController
  ) {
    this.categories = [
      {
        "id":1,
        "title":"Barbeque",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/barbeque.jpg",
      },
      {
        "id":2,
        "title":"North Indian",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/northindian.jpg",
      },
      {
        "id":3,
        "title":"South Indian",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/southindian.jpg",
      },
      {
        "id":4,
        "title":"Chineese",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/chineese.jpeg",
      },
      {
        "id":7,
        "title":"Fast Food",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/fastfood.jpg",
      },
      {
        "id":8,
        "title":"Arabian",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/arabian.jpg",
      },
      {
        "id":5,
        "title":"Europian",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/europian.jpg",
      },
      {
        "id":6,
        "title":"Italian",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/italian.jpeg",
      },
     
    ]
    this.filteredCategories = this.categories;
  }

  ionViewWillEnter() {
   
  }
  getItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != "") {
      this.filteredCategories = this.filteredCategories.filter(data => {
        return data.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    } else {
      this.filteredCategories = this.categories;
    }
  }

  openModal() {
    let myModal = this.modalCtrl.create(FilterModalPage);
    myModal.onDidDismiss(data => {
     console.log(data);
    });
  
    myModal.present();

  }

  navigate(id) {
    // console.log(id)
    // this.navCtrl.push("ProductListPage", { id: id });
  }
}



