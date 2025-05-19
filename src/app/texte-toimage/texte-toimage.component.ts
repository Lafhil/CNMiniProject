import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {CheckboxModule} from "primeng/checkbox";
import {FileUploadModule} from "primeng/fileupload";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {NgIf, PercentPipe} from "@angular/common";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SelectButtonModule} from "primeng/selectbutton";
import {SliderModule} from "primeng/slider";
import {TexteToImageService} from "../services/texte-to-image.service";
import {ReceivedImage, TextPrompt} from "../model/model";

@Component({
  selector: 'app-texte-toimage',
  standalone: true,
  imports: [
    Button,
    CardModule,
    CheckboxModule,
    FileUploadModule,
    FloatLabelModule,
    InputTextModule,
    InputTextareaModule,
    NgIf,
    PercentPipe,
    RadioButtonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    SliderModule,
    FormsModule
  ],
  templateUrl: './texte-toimage.component.html',
  styleUrl: './texte-toimage.component.css'
})
export class TexteToimageComponent {
  text:TextPrompt=new TextPrompt()
  image64!:ReceivedImage
  constructor(private txtToimageServ:TexteToImageService) {
  }
  sendTexte(){
    if(this.text){
      this.text.category="animal"
      console.log(this.text)
      this.txtToimageServ.sendTexte(this.text).subscribe(res=>this.image64=res)
    }
  }

}
