import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    // console.log('this.mapRef', this.mapRef);
    this.displayMap();
  }

  displayMap() {
    const location = new google.maps.LatLng('25.070043', '67.284787');

    const options = {
      center: location,
      zoom: 10,
      streetViewControl: false,
      mapTypeId: 'roadmap'
    };

    const map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarker(location, map);
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    })
  }

}
