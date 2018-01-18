import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {
  tulos: string = 'Moro';
  apitulos: string = '';
  tulokset: object;

  constructor(private http: HttpClient) { }

  getJson() {
    interface Myinterface {
        license: string;
    }

    this.http.get<Myinterface>('assets/package.json').subscribe((data) => {
      console.log(data);
      this.tulos = data.license;
    });
  }

  getFromAPI() {
      /*
      interface MWinterface {
          filename: string;
      }

      this.http.get<MWinterface>('http://media.mw.metropolia.fi/wbma/media').subscribe((data) => {
          console.log(data);
          this.apitulos = data[0].filename;
      });
      */

      /*
      this.http.get('http://gis.vantaa.fi/rest/tyopaikat/v1/Opetusala').subscribe((data) => {
          this.tulokset = data;
      });
      */

      interface SodexoInterface {
          courses: object;
      }

      this.http.get<SodexoInterface>('https://www.sodexo.fi/ruokalistat/output/daily_json/16435/2018/01/18/fi').subscribe((data) => {
          this.tulokset = data.courses;
          console.log(data);
      });
  }

  ngOnInit() {
    this.getFromAPI();
  }

}
