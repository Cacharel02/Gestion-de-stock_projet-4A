import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IdentificationComponent } from './identification/identification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NewEntrepriseComponent } from './new-entreprise/new-entreprise.component';
import { HttpClientModule } from '@angular/common/http'
import { GestionDeStockService } from './gestion-de-stock.service';
import { InterfaceEntrepriseComponent } from './interface-entreprise/interface-entreprise.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NouvelArticleComponent } from './interface-entreprise/nouvel-article/nouvel-article.component';
import { ArticlesComponent } from './interface-entreprise/articles/articles.component';
import { InterfaceEntrepriseModule } from './interface-entreprise/interface-entreprise.module';
import { AdminConnexionComponent } from './admin-connexion/admin-connexion.component';
import { ClientConnexionComponent } from './client-connexion/client-connexion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NouveauProduitComponent } from './nouveau-produit/nouveau-produit.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ProfilComponent } from './profil/profil.component';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommandeClientComponent } from './interface-client/commande-client/commande-client.component';
import { InterfaceClientComponent } from './interface-client/interface-client.component';
import { NewClientComponent } from './new-client/new-client.component';
import { BarreComponent } from './barre/barre.component';
import { ModificationProduitComponent } from './modification-produit/modification-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    IdentificationComponent,
    NewEntrepriseComponent,
    InterfaceEntrepriseComponent,
    NouvelArticleComponent,
    ArticlesComponent,
    AdminConnexionComponent,
    ClientConnexionComponent,
    NouveauProduitComponent,
    ListeProduitsComponent,
    ProfilComponent,
    CommandeClientComponent,
    InterfaceClientComponent,
    NewClientComponent,
    BarreComponent,
    ModificationProduitComponent
    
  ],
  entryComponents:[NouveauProduitComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'identification', component: IdentificationComponent},
      {path: 'nouvelle entreprise', component: NewEntrepriseComponent},
      {path: 'nouvelle client', component: NewClientComponent},
      //{path: 'interface entreprise/:id', component: InterfaceEntrepriseComponent},
      {path: 'connexion admin', component:AdminConnexionComponent},
      {path: 'connexion client', component:ClientConnexionComponent},
      //{path: 'interface client/:id', component: InterfaceClientComponent},
      {path: 'interface client/commandes', component:InterfaceClientComponent},
      {path: 'interface entreprise/liste produits', component:ListeProduitsComponent},
      {path: 'interface client/profil', component:ProfilComponent},
      {path: 'interface client/liste produits', component:ListeProduitsComponent},
      {path: 'interface entreprise/profil', component:ProfilComponent},
    ]),
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    InterfaceEntrepriseModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [GestionDeStockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
