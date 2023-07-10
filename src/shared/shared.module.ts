import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/PageNotFound/PageNotFound.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { FormsModule } from '@angular/forms';

//Angular Material Component
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogComponent } from './components/mat-dialog/mat-dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';






const AngularMaterialComponent: any = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDialogModule,
  MatProgressBarModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProgressSpinnerComponent,
    MatDialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ...AngularMaterialComponent,
  ],
  exports: [
    // Exports Utils Modules
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,

    // Exports Shared Component
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProgressSpinnerComponent,

    // Exports Angular Material Component
    ...AngularMaterialComponent
  ]
})
export class SharedModule { }
