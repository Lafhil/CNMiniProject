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
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputGroupModule} from "primeng/inputgroup";
import {ImageModule} from "primeng/image";
import {ProgressSpinnerModule} from "primeng/progressspinner";

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
    FormsModule,
    InputGroupAddonModule,
    InputGroupModule,
    ImageModule,
    ProgressSpinnerModule
  ],
  templateUrl: './texte-toimage.component.html',
  styleUrl: './texte-toimage.component.css'
})
export class TexteToimageComponent {
  text:TextPrompt=new TextPrompt()
  image64!:ReceivedImage
  loding: boolean=false;
  constructor(private txtToimageServ:TexteToImageService) {
  }
  sendTexte(){
    this.loding=true
    if(this.text){
      this.text.category="animal"
      console.log(this.text)
      this.txtToimageServ.sendTexte(this.text).subscribe(res=> {
        this.image64 = res
        this.image64.image='data:image/png;base64,'+this.image64.image
        this.loding=false
        console.log(res.image)
      })
    }
  }

}
