import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {ItemlocPage} from '../itemloc/itemloc';
import { ExptrackPage } from '../exptrack/exptrack';

@Component({
  selector : 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ExptrackPage;
  tab2Root = ItemlocPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
