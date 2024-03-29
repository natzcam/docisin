import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Doctor } from '../../models/doctor';
import { Spec } from '../../models/spec';
import { Query, DocumentReference } from '@firebase/firestore-types';
import { Filter } from '../../models/filter';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  spec: Spec;
  filter: Filter = new Filter();
  currentItems: Observable<Doctor[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFirestore) {
    this.spec = navParams.get('spec');
    this.filterItems(null);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(doctor: Doctor) {

  }

  filterItems(ev) {
    if (ev) {
      this.filter.set(ev.target.value);
    } else {
      this.filter.set();
    }

    this.currentItems = this.db.collection<Doctor>('doctors', ref => {
      let where: Query = ref;
      if (this.spec) {
        where = where.where('spec', '==', this.db.doc('/specs/' + this.spec.id).ref);
      }
      if (this.filter.start) {
        where = where.where('searchField', '>=', this.filter.start).where('searchField', '<', this.filter.end);
      }
      return where;
    }).valueChanges();
  }

  searchBySpec() {
    this.navCtrl.push('SpecsPage');
  }
}
