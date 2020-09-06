import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {NgbActiveModal, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { MatSort, MatTableDataSource } from '@angular/material';

import { ApiService } from '../../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marques',
  templateUrl: './marques.component.html',
  styleUrls: ['./marques.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MarquesComponent implements OnInit {

    secteurs: any;
    displayedColumns = ['image','nom','updated_date','edit','delete','plus'];
    dataSource1 = new SecteurDataSource(this.api);
    /*lel ajoute*/
    SecteurForm: FormGroup;
    nom: string = '';
    imagePreview: any;
    /*lel modifier*/
    secteurForm: FormGroup;
    id: string = '';
    constructor(private formBluider: FormBuilder,
                private router: Router,
                private modalService: NgbModal,
                private api: ApiService,
                private route: ActivatedRoute,
                private formBuilder1: FormBuilder) {
    }
    ngOnInit(): void {
             this.api.getSecteurs()
            .subscribe(res => {
                console.log(res);
                this.secteurs = res;

            }, err => {
                console.log(err);
            });
        this.SecteurForm = this.formBluider.group({
            'nom': [null, Validators.required],
            'image': [null, Validators.required],

        });

        this.secteurForm = this.formBuilder1.group({
            'nom' : [null, Validators.required],
        });
    }

    getsecteur(id) {
        this.api.getSecteur(id).subscribe(data => {
            this.id = data._id;
            this.secteurForm.setValue({
                nom: data.nom,
            });
        });
    }
    /*mise a jourrrrrrrrrrrrrrrrrrrrrrrr*/
    onFormSubmit1(form:NgForm) {
        this.api.updateSecteur(this.id, form)
            .subscribe(res => {
                console.log(res);
                    let id = res['_id'];
                    let image = res['image'];
                console.log(res);
                location.reload();
                }, (err) => {
                    console.log(err);
                }
            );
    }
    /*imageeeeeeeeeeeeeee*/
    onImagePicked(event: Event) {
        const file = (event.target as HTMLInputElement).files[0];
        this.SecteurForm.patchValue({image: file});
        this.SecteurForm.get('image').updateValueAndValidity();
        console.log(file);
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
/*
            console.log('hedhi fel base 64 !!!!!!!!!!!!!'+ this.imagePreview );
*/
        };
       /*y affichiha fel fenetre el tswira*/
        reader.readAsDataURL(file);
    }
    /*newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww**************************************/
    deleteSecteur(id) {
        this.api.deleteSecteur(id).subscribe(res => {
                this.api.getSecteurs()
                    .subscribe(res => {
                        console.log(res);
                        this.secteurs = res;
                        this.router.navigate(['/pages/marques']);
                        location.reload();
                    });                },
            (err) => {console.log(err);
        });
    }
/*postttttttttttttttttttttt*/
    onFormSubmit(form: NgForm) {
        this.api.postSecteur(form).subscribe
        (res => {
            let id = res['_id'];
         /*   this.router.navigate(['/pages/marques']);
            this.activeModal.dismiss('true');*/
            location.reload();
        }, (err) => {
            console.log(err);
        });
    }
    openVerticallyCentered(content) {
        this.modalService.open(content, {centered: true});
    }
}
export class SecteurDataSource extends DataSource<any> {
    constructor(private api: ApiService) {
        super()
    }
    connect() {
        return this.api.getSecteurs();
    }
    disconnect() {
    }
}
