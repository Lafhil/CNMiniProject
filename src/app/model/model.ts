import {SafeUrl} from "@angular/platform-browser";

export class Adherant {
  id!: number
  actif!: boolean
  adresse!: string
  cin!: string
  dateAdhesion!: Date
  dateDernierGrade!: Date
  datenaissance!: Date
  lieuNaissance!: string
  metier!: any
  nom!: string
  photo!: any
  prenom!: string
  telPhonne!: string
  adherantSps!: AdherantSp[]
  //image?:File
  imageDto?:string;
}
export interface FileHandel{
  file:File,
  url:SafeUrl
}
export class Specialite {
  id!: number
  descSp!: string
  prix!: number
  signe!: string
  tikwando!: boolean
  adherantSps!: AdherantSp[]
  icon!:string;
}
export class AdherantSp {
  numInscription!: string
  dateAssurance!: Date
  dateInscription!: Date
  etat!: boolean
  idAdh!:number
  montantMensuelle!: number
  numAssurance!: string
  tikwando!: boolean
  payements!: Payement[]
  idCeinture!: Ceinture
  idSp?:Specialite
  nomAdherant?:string;
}
export class ReceivedImage {
  image!: string
}

export class Payement {
  id!: number
  annepayement!: number
  datepayement!: Date
  etatpayement!: boolean
  moispayement!: number
  montant: number=0
  montantAnex: number=0
  idType!: Type
}

export class Type {
  id!: number
  descType!: string
}

export class Ceinture {
  id!: number
  descSeinture!: string
}
export class Entraineur {
  id!: number
  nom!: string
  prenom!: string
  specialites!: Specialite[]
}
export class User {
  idUser!: string
  motPass!: string
  nomUser!: string
}

export interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}
export class TransmissionInput {
  data!: string;
  modulation!: string;
  channel_noise!: boolean;
  snr_db!: number;
  manshester!:boolean;
  filtre!:boolean
  data_type!:string
}
export class TransmissionOutput {
received_data!: string;
ber!: number;
signal_plot!: string
}
export class TextPrompt {
  category!: string
  text!: string
}
