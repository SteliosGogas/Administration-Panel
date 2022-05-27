import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'gr'])
    translate.setDefaultLang('en');

  }

  useLanguage(language: string){
    this.translate.use(language);
  }
  ngOnInit(): void {
  }

}
