import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() product!: any;

  ngOnInit(): void {
  }
  gotoProductDetail(product:any){
    this.router.navigate(["product", product.id]);
  }

}
