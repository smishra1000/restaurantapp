import { Component } from "@angular/core";
import { IonicPage, NavController, LoadingController } from "ionic-angular";
import { ModalController } from 'ionic-angular';
import { FilterModalPage } from '../filter-modal/filter-modal';
import { map } from "rxjs/operators";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  mySlideOptions = {
    initialSlide: 1,
    loop: true,
    autoplay: 2000,
    pager: false
  };

  categories:any [];
  filteredCategories:any[];

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController
  ) {
    this.categories = [
      {
        "id":1,
        "title":"United Kitches of India",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/united.jpg",
      },
      {
        "id":2,
        "title":"Srikanya Resturantces",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/srikanya.jpeg",
      },
      {
        "id":3,
        "title":"Paridise Hotel",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/slice.jpeg",
      },
      {
        "id":4,
        "title":"Park Hyatt",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/united.jpg",
      },
      {
        "id":5,
        "title":"Lemon Tree",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/lemontree.jpeg",
      },
      {
        "id":7,
        "title":"Bawarchi",
        "description":`Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that 
        is so prevalent in Greek cuisine`,
        "thumb":"assets/img/bawarchi.jpg",
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
