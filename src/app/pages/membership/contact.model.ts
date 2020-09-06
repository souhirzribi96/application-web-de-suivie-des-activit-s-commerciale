import {Organisme} from "./membership.model";


export class Contact

{
  id: number;
  contactName: string;
  cin: string;
  numPasseport: string;
  fonction: string;
  email: string;
  siteWeb: string;
  fax: string;
  telBureau: string;
  telMobile: string;
  rue: string;
  rue2: string;
  ville: string;
  pays: string;
  codePostal:string;
  photo: string;
  photoContentType: string;
  organisme: Organisme;
}
