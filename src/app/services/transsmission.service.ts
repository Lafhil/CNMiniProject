import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TransmissionInput, TransmissionOutput} from "../model/model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TranssmissionService {
  private apiUrl = 'http://localhost:5000/transmit';
  constructor(private httpClient:HttpClient) {

  }
  sendMessage(input:TransmissionInput):Observable<TransmissionOutput>{
  console.log(input)
    console.log('Payload envoyé :', JSON.stringify(input));
    return this.httpClient.post<TransmissionOutput>(this.apiUrl,input)
  }
  rep():Observable<string>{
    return this.httpClient.get<string>('http://localhost:5000/rep')
  }
}
