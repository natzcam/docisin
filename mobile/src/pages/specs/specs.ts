import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Spec } from '../../models/spec';
import { CollectionReference, Query } from '@firebase/firestore-types';
import { Filter } from '../../models/filter';

/**
 * Generated class for the SpecsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specs',
  templateUrl: 'specs.html',
})
export class SpecsPage {

  filter: Filter = new Filter();
  currentItems: Observable<Spec[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFirestore) {
    this.filterItems(null);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecsPage');
  }

  filterItems(ev) {
    if (ev) {
      this.filter.set(ev.target.value);
    } else {
      this.filter.set();
    }

    this.currentItems = this.db.collection<Spec>('specs', ref => {
      let where: Query = ref;
      if (this.filter.start) {
        where = where.where('searchField', '>=', this.filter.start).where('searchField', '<', this.filter.end);
      }
      return where;
    }).valueChanges();
  }

  openItem(spec: Spec) {
    this.navCtrl.push('SearchPage', {
      spec: spec
    });
  }

}
