import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {NgbActiveModal, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { MatSort, MatTableDataSource } from '@angular/material';

import { ApiService } from '../../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {
    contacts: any ;
    id: string = '';
    marque_modif_form: FormGroup;
    conctact_form_ajout: FormGroup;
    displayedColumns = [ 'nom', 'prenom', 'email' , 'telBureau' , 'telMobile', 'adresse' ,'edit','delete',];
    dataSource1 = new ContactDataSource(this.api);
    constructor(private formBluider: FormBuilder,
                private router: Router,
                private modalService: NgbModal,
                private api: ApiService,
                private route: ActivatedRoute,
                private formBuilder1: FormBuilder) {
    }
    ngOnInit(): void {
        this.api.getContacts()
            .subscribe(res => {
                console.log(res);
                this.contacts = res;
            }, err => {
                console.log(err);
            });
        this.marque_modif_form = this.formBuilder1.group({
            'nom' : [null, Validators.required],
            'prenom' : [null, Validators.required],
            'email' : [null, Validators.required],
            'telBureau' : [null, Validators.required],
            'telMobile' : [null, Validators.required],
            'adresse' : [null, Validators.required],
        });
        this.conctact_form_ajout = this.formBluider.group({
            'nom' : [null, Validators.required],
            'prenom' : [null, Validators.required],
            'email' : [null, Validators.required],
            'telBureau' : [null, Validators.required],
            'telMobile' : [null, Validators.required],
            'adresse' : [null, Validators.required],
        });
    }
    getcontact(id) {
        this.api.getContact(id).subscribe(data => {
            this.id = data._id;
            this.marque_modif_form.setValue({
                nom: data.nom,
                prenom: data.prenom,
                email: data.email,
                telBureau: data.telBureau,
                telMobile: data.telMobile,
                adresse: data.adresse,
            });
        });
    }
    deleteContact(id) {
        this.api.deleteContact(id).subscribe(res => {
                this.api.getContacts()
                    .subscribe(res => {
                        console.log(res);
                        this.contacts = res;
                        this.router.navigate(['/pages/contacts']);
                        location.reload();
                    });
                },
            (err) => {console.log(err);
            });
    }
    onFormSubmit1(form:NgForm) {
        this.api.updateContact(this.id, form)
            .subscribe(res => {
                    console.log(res);
                    let id = res['_id'];
                    console.log(res);
                    location.reload();
                }, (err) => {
                    console.log(err);
                }
            );
    }
    /*lel ajout*/
    onFormSubmit(form: NgForm) {
        this.api.postContact(form).subscribe
        (res => {
            let id = res['_id'];
            location.reload();
        }, (err) => {
            console.log(err);
        });
    }
    openVerticallyCentered(content) {
        this.modalService.open(content, {centered: true});
    }
}
export class ContactDataSource extends DataSource<any> {
    constructor(private api: ApiService) {
        super()
    }
    connect() {
        return this.api.getContacts();
    }
    disconnect() {
    }
}
