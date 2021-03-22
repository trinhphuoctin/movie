import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { FooterComponent } from './componets/footer/footer.component';
import { MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule} from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule
  ],
  exports: [
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
