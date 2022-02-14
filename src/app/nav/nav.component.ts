import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  loadArabic = false;
  translate: any;
  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en', 'ar']);
    translateService.setDefaultLang('en');
  }

  tranlateTo(langauge: string) {
    this.translateService.use(langauge);
  }
  ngOnInit(): void {
  }

}

