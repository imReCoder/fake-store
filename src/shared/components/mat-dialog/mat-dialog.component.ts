import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IproductDTO } from 'src/modules/products/Interfaces/iproduct';
import { ProductService } from 'src/modules/products/services/product.service';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent implements OnInit {

  product?: IproductDTO;
  constructor(@Inject(MAT_DIALOG_DATA) public componentData: any, private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProduct(this.componentData?.productId).subscribe(data => {
      if (data) {
        this.product = data;
      }
    })
  }


  generateArray = (len: number = 1) => Array.from({ length: len }, (_, index) => index + 1);
}
