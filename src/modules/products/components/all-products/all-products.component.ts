import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/shared/services/shared.service';
import { IproductDTO } from '../../Interfaces/iproduct';
import { ProductService } from '../../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/shared/components/mat-dialog/mat-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  isRequestSubmitted: boolean = false;
  search?: string;
  categories?: any;
  products: IproductDTO[] = [];
  masterProduct!: IproductDTO[];
  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.data.subscribe((data) => {
      if (data['AllCategories']) {
        this.categories = ['All', ...data['AllCategories']];
      }
    });
  }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    SharedService.showLoader();
    this.productService.getProducts().subscribe((data) => {
      if (data && data.length) {
        this.products = [...data];
        this.masterProduct = [...data];
        this.isRequestSubmitted = true;
        SharedService.hideLoader();
      }
    });
    this.isRequestSubmitted = false;
  }

  productSearch() {
    let exist = this.masterProduct.filter((product) =>
      product.title
        ?.toLocaleLowerCase()
        .includes(this.search?.toLocaleLowerCase() || '')
    );
    this.products = [...exist];
  }

  getProductByCategory(category: string) {
    this.products = [];
    SharedService.showLoader();
    if (category == 'All') {
      this.products = [...this.masterProduct];
      this.isRequestSubmitted = true;
      SharedService.hideLoader();
    } else {
      this.productService.getProductByCategory(category).subscribe((data) => {
        if (data) {
          this.products = [...data];
          this.isRequestSubmitted = true;
          SharedService.hideLoader();
        }
      });
    }
    this.isRequestSubmitted = false;
  }

  getProductBySort(sort: string) {
    this.products = [];
    SharedService.showLoader();
    this.productService.getProductBySort(sort).subscribe((data) => {
      if (data) {
        this.products = [...data];
        this.isRequestSubmitted = true;
        SharedService.hideLoader();
      }
    });
    this.isRequestSubmitted = false;
  }

  handlePageEvent(event: any) {
    this.products = [];
    this.masterProduct.forEach((el, idx) => {
      if (idx < event.pageSize) {
        this.products.push(el);
      }
    });
  }

  openDialog(id: number = 0) {
    if (id == 0) return;
    this.router.navigateByUrl(`/products/${id}`);
  }
}
