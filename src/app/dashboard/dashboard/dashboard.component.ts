import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  imports: [ MatTableModule,MatPaginatorModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  // Table header details
  productsTableColumnName = ["id","name","price","img","action"]
    @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  allProductsList: any;
  ProductDatasource: any;

  constructor(private _dashboardService : DashboardServiceService){}

  ngOnInit(): void {
    this.getAllProducts();
  }


  // Get all products
  getAllProducts(){
    this._dashboardService.getAllProducts().subscribe({
      next : (res:any) =>{
        console.log(res);
        this.allProductsList = res;
        this.ProductDatasource = new MatTableDataSource(this.allProductsList);
        this.ProductDatasource.paginator = this.paginator;

      }
    })
  }

  deleteItem(id : any){
    console.log("Product deleted succesfully ",id)
  }
}
