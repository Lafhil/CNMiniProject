import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReceivedImage, TextPrompt} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class TexteToImageService {
url='https://8632-35-227-46-128.ngrok-free.app/img'
  constructor(private http:HttpClient) { }
  sendTexte(text:TextPrompt):Observable<ReceivedImage>{
    return this.http.post<ReceivedImage>(this.url,text)
  }
}
