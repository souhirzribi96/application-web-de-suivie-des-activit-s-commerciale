import {Component, ViewEncapsulation, ViewChild, HostListener, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'app-back-top',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./back-top.component.scss'],
  template: `
    <i #backTop class="fa fa-angle-up back-to-top transition" title="Back to Top"></i>
  `
})
export class BackTopComponent {

  @Input() position:number = 400;
  @Input() showSpeed:number = 500;
  @Input() moveSpeed:number = 700;


  ngAfterViewInit () {
    this._onWindowScroll();
  }

  @HostListener('click')
  _onClick():boolean {
    jQuery('html, body').animate({scrollTop:0}, {duration:this.moveSpeed});
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll():void {
  }
}
