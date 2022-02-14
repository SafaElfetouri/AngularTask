import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MerchantsCategoriesService } from '../services/merchants-categories.service';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  loadArabic = false;
  dynamicCSSUrlar: string;
  dynamicCSSUrleng: string;
  translate: any;
  merchants: any;
  textDirection: string;
  getData(data: NgForm) {
    console.log(data);
  }
  constructor(
    private merchantsData: MerchantsCategoriesService , public translateService: TranslateService) {
    this.merchantsData.merchants().subscribe((data) => {
    this.merchants = data;
    });
  }

  tranlateTo(langauge: string) {
    this.translateService.use(langauge);
  }

  ngOnInit(): void {
  }
}
