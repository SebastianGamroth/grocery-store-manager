import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AddFoodsComponent } from './add-foods/add-foods.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ChalkboardPlannerComponent } from './chalkboard-planner/chalkboard-planner.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EditListComponent } from './edit-list/edit-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddEditComponent } from './dialog-add-edit/dialog-add-edit.component';
import { StartInfoComponent } from './start-info/start-info.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderFoodsComponent } from './order-foods/order-foods.component';
import { MatTableModule } from '@angular/material/table';
import { DialogOrderComponent } from './dialog-order/dialog-order.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AddFoodsComponent,
    ChalkboardPlannerComponent,
    EditListComponent,
    DialogAddEditComponent,
    StartInfoComponent,
    OrderFoodsComponent,
    DialogOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    MatButtonToggleModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    DragDropModule,
    MatBadgeModule,
    MatTooltipModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
