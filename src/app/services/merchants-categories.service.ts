import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MerchantsCategoriesService {
 url="http://azure01.cubicsystems.com/paylater-murabaha-ecommerce/wservice.php/getmerchantcategories"
  constructor(private http:HttpClient) { }
  merchants(){
    return this.http.get(this.url);
  }
}
