import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PrincipalCardComponent } from './principal-card/principal-card.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { FooterComponent } from './footer/footer.component';
import { PipesModule } from '../../core/pipes/pipes.module';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [{ path: '', component: HeaderComponent}]

@NgModule({
  declarations: [
    HeaderComponent, 
    PrincipalCardComponent, 
    PaginatorComponent, 
    DetailCardComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    // RouterModule.forChild(routes)
  ],
  exports: [
    HeaderComponent,
    PrincipalCardComponent,
    PaginatorComponent,
    DetailCardComponent,
    FooterComponent
  ]
})
export class ComponentsModule {}
