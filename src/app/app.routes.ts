import { Routes } from '@angular/router';
import { EstoqueListComponent } from './estoque-list/estoque-list.component';
import { ConsolidadoTablesComponent} from './consolidado-tables/consolidado-tables.component';
import { ConsolidadoTiposComponent } from './consolidado-tipos/consolidado-tipos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'estoque', pathMatch: 'full' },
    { path: 'estoque', component: EstoqueListComponent },
    { path: 'tabelas', component: ConsolidadoTablesComponent },
    { path: 'tipos', component: ConsolidadoTiposComponent }
    
];
