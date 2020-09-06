import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MenuService } from '../../theme/components/menu/menu.service';

@Component({
  selector: 'app-activite-commerce',
  templateUrl: './activite-commerce.component.html',
  styleUrls: ['./activite-commerce.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ActiviteCommerceComponent implements OnInit {
    ngOnInit(): void {
    }

}
