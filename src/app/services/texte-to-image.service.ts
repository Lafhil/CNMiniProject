import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReceivedImage, TextPrompt} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class TexteToImageService {
url='http://localhost:8000/img'
  constructor(private http:HttpClient) { }
  sendTexte(text:TextPrompt):Observable<ReceivedImage>{
    return this.http.post<ReceivedImage>(this.url,text)
  }
}
