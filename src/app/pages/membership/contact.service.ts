import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Contact} from "./contact.model";
import {Organisme} from "./membership.model";


@Injectable()
export class ContactService {
  public headers = new Headers({'Content-Type': 'application/json'});
  public options = new RequestOptions({headers: this.headers});

  public urlContactGet = "/api/contacts/organisme";
  public urlContact = "/api/contacts"

  constructor(public http: Http) {
  }

/*  getContacts(idOrganisme: number): Observable<Contact[]> {
    return this.http.get(this.urlContactGet + "/" + idOrganisme)
      .map(this.extractData).catch(this.handleError);
  }

  addContact(contact: Contact, organisme: Organisme){
    contact.organisme = organisme;
    console.log("JSON.stringify(contact)  addContact      "+JSON.stringify(contact));
    return this.http.post(this.urlContact, contact, this.options)
      .map(this.extractData).catch(this.handleError);
  }

  updateContact(contact: Contact, organismeid: number): Observable<Contact> {
    contact.organisme.id = organismeid;
    console.log("JSON.stringify(contact)  updateOrganisme      "+JSON.stringify(contact));
    return this.http.put(this.urlContact, contact, this.options)
      .map(this.extractData).catch(this.handleError);
  }*/

  deleteContact(id: number){
    return this.http.delete(this.urlContact + "/" + id);
  }

  private extractData(res: Response) {
    let body = res.json();
    // console.log("waawa        "+JSON.stringify(body));
    if (body)
      return body || {};
    else
      return null;
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
