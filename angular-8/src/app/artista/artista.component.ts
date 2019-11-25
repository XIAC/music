import { Artista } from './shared/artista.model';
import { Component, OnInit } from '@angular/core';
import { ArtistaModalComponent } from './artista-modal/artista-modal.component';
import { MatDialog } from '@angular/material';
import { ArtistaService } from './shared/artista.service';
export interface PeriodicElement {
  name: string;
  position: number;
  acciones: string;
  // weight: number;
  // symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', acciones:''},
//   {position: 2, name: 'Helium', acciones:''},
//   {position: 3, name: 'Lithium', acciones:''},
//   {position: 4, name: 'Beryllium', acciones:''},
//   // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
  providers: [ArtistaService]
})
export class ArtistaComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion','acciones'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  animal: string;
  name: string;
  // dataSource = ELEMENT_DATA;
  dataSource: Artista [];
  constructor(public dialog: MatDialog, private artistaService: ArtistaService) { }

  ngOnInit() {
    this.get();
  }
  nuevo() {
    const dialogRef = this.dialog.open(ArtistaModalComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.animal = result;
    });
  }
  get () {
    this.artistaService.get().subscribe(
      response => this.onGetSuccess(response),
      response => this.onGetError(response));
  }
  protected onGetSuccess(response:any){
   console.log(response);
   this.dataSource=response;
  }
  protected onGetError(response:any){
    console.log(response);
  }
}
