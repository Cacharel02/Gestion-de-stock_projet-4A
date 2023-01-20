import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { NouvelArticleComponent } from './nouvel-article/nouvel-article.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'interface entreprise/articles', component: ArticlesComponent},
      {path: 'interface entreprise/nouvel article', component: NouvelArticleComponent},
    ])
  ]
})
export class InterfaceEntrepriseModule { }
