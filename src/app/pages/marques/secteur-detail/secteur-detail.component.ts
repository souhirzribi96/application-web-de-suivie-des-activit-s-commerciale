import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService} from "../../../api.service";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
    selector: 'app-secteur-detail',
    templateUrl: './secteur-detail.component.html',
    styleUrls: ['./secteur-detail.component.scss']
})
export class SecteurDetailComponent implements OnInit {
    marqForm: FormGroup;
    secteurs: any;
    secteur = {};
    marques= {};
    marque: any;
    displayedColumns = ['MarqueName','catalogue','delete'];

    constructor(private route: ActivatedRoute,
                private api: ApiService,
                private router: Router,
                private formBluider: FormBuilder) { }
    ngOnInit() {
        this.getsectttt();
        this.getSecteurDetails(this.route.snapshot.params['id']);
        this.getSecteurDetail(this.route.snapshot.params['id']);
        this.marqForm = this.formBluider.group({
            'MarqueName': [null, Validators.required],
            'Secteur':[null, Validators.required],
            'catalogue':[null, Validators.required],
        });
    }
    /*.............ceréée..............*/
    onFormSubmit(form: NgForm) {
        this.api.postMarque(form).subscribe
        (res => {
            let id = res['_id'];
            console.log(res);
            location.reload();
        }, (err) => {
            console.log(err);
        });
    }
    /*getsecttttttttttttttttttttttt***************************/
    getsectttt() {
        this.api.getSecteurs()
            .subscribe(res => {
                console.log(res);
                this.secteurs = res;
            }, err => {
                console.log(err);
            });
    }
    /*........................detail sur secteur..............................*/
    getSecteurDetails(id) {
        this.api.getSecteur(id)
            .subscribe(data => {
                console.log(data);
                this.secteur = data;
            });
    }
    /*................................detail sur les marques de ce secteur.....................................................*/
    getSecteurDetail(id) {
        this.api.getmarque(id)
            .subscribe(data => {
                console.log('detail sur les marques de ce secteur:');
                console.log(data);
                this.marques = data;
            });
    }
    /*...................................suprimer marque................................................................*/
    deleteMarq(id) {
        this.api.deleteMarque(id).subscribe(res => {
                this.api.getMarques()
                    .subscribe(res => {
                        console.log(res);
                        this.marque = res;
                        location.reload();
                    });                },
            (err) => {
            console.log(err);
            });
    }
}
