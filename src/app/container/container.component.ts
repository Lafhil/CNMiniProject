import { Component } from '@angular/core';
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormControl, FormGroup, FormsModule,ReactiveFormsModule} from "@angular/forms";
import {SliderModule} from "primeng/slider";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {SelectButtonModule} from "primeng/selectbutton";
import {TransmissionInput, TransmissionOutput} from "../model/model";
import {TranssmissionService} from "../services/transsmission.service";
import {NgIf, PercentPipe} from "@angular/common";
import {RadioButtonModule} from "primeng/radiobutton";
import {FileUploadModule} from "primeng/fileupload";
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextareaModule,
    FormsModule,
    SliderModule,
    InputTextModule,
    CheckboxModule,
    Button,
    CardModule,
    SelectButtonModule,
    PercentPipe,
    NgIf,
    RadioButtonModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})

export class ContainerComponent {
  image64!:string
  bruit:number=0
  value: any;
  manshester:boolean=false
  filter:boolean=false
  transmissionOutput:TransmissionOutput=new TransmissionOutput()
  transmissionInput:TransmissionInput =new TransmissionInput()
  constructor(private transService:TranssmissionService) {
  }
  mygroup!: FormGroup;
  justifyOptions: any[] = [
    { icon: 'pi pi-align-left', justify: 'texte' },
    { icon: 'pi pi-wave-pulse', justify: 'binaire' },
    { icon: 'pi pi-image', justify: 'image' },
  ];
  originalImageBase64: any;
  receivedImageBase64: any;

  ngOnInit() {

    this.mygroup = new FormGroup({
      select: new FormControl('texte')
    });
  }
  sendMessage(){
    if(this.transmissionInput){
      // this.transmissionInput.modulation='bpsk'
      this.transmissionInput.channel_noise=true
      this.transmissionInput.manshester=this.manshester
      this.transmissionInput.filtre=this.filter
      // console.log(this.transmissionInput)
      // let input: TransmissionInput = {
      //   data: '101010',
      //   modulation: 'bpsk',
      //   channel_noise: true,
      //   snr_db: 10
      // };
      // this.transmissionInput=input
      this.transService.sendMessage(this.transmissionInput).subscribe({
        next: (res) => {
          console.log('Réponse reçue :', res);
          this.transmissionOutput = res;
          this.receivedImageBase64='data:image/png;base64,' + res.received_data
        },
        error: (err) => {
          console.error('Erreur détectée :', err);
        }
      });
    }
  }
  rep(){
    this.transService.rep().subscribe(res=>console.log(res))
  }
  onUpload(event: any) {
    const file: File = event.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.originalImageBase64= reader.result as string;
      this.transmissionInput.data = (reader.result as string).split(',')[1]; // on garde seulement les données
      console.log('Image encodée prête à être envoyée');
    };

    reader.readAsDataURL(file); // encode en base64
    }

  init() {
   this.transmissionInput.data=""
  }
}
