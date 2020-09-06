import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MenuService } from '../../theme/components/menu/menu.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {
    }

}
