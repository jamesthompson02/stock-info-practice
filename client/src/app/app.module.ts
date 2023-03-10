import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { searchReducer } from './state/search/search.reducer';
import { filterStockReducer } from './state/stockFilter/stockFilter.reducer';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StocksComponent } from './pages/stocks/stocks.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';
import { GrowthWidgetComponent } from './components/growth-widget/growth-widget.component';
import { ValueWidgetComponent } from './components/value-widget/value-widget.component';
import { WidgetContainerFormComponent } from './components/widget-container-form/widget-container-form.component';
import { WidgetHeaderComponent } from './components/widget-header/widget-header.component';
import { GeneralComponentComponent } from './components/general-component/general-component.component';
import { StockFilterComponent } from './components/stock-filter/stock-filter.component';


 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    StocksComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    TemplateFormComponent,
    MyCounterComponent,
    WidgetContainerComponent,
    GrowthWidgetComponent,
    ValueWidgetComponent,
    WidgetContainerFormComponent,
    WidgetHeaderComponent,
    GeneralComponentComponent,
    StockFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ counter: counterReducer, search: searchReducer, filter: filterStockReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
