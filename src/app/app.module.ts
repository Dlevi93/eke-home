import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ScheduleModule } from 'primeng/schedule';
import { ProgressBarModule } from 'primeng/progressbar';
import { GalleriaModule } from 'primeng/galleria';

import { AppComponent } from './app/app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BemutatoComponent } from './bemutato/bemutato.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BottomComponent } from './bottom/bottom.component';
import { NewsbarComponent } from './newsbar/newsbar.component';
import { TagszervezetekComponent } from './tagszervezetek/tagszervezetek.component';
import { KiadvanyokComponent } from './kiadvanyok/kiadvanyok.component';
import { EsemenynaptarComponent } from './esemenynaptar/esemenynaptar.component';
import { TaborokComponent } from './taborok/taborok.component';
import { ElerhetosegekComponent } from './elerhetosegek/elerhetosegek.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeProspectsComponent } from './home-prospects/home-prospects.component';
import { HomeCampComponent } from './home-camp/home-camp.component';

import { FacebookModule } from 'ngx-facebook';

const appRoutes: Routes = [
  { path: 'fooldal', component: HomeComponent },
  { path: 'article/:slug', component: ArticleComponent },
  { path: 'bemutato', component: BemutatoComponent },
  { path: 'tagszervezetek', component: TagszervezetekComponent },
  { path: 'kiadvanyok', component: KiadvanyokComponent },
  { path: 'esemenynaptar', component: EsemenynaptarComponent },
  { path: 'taborok', component: TaborokComponent },
  { path: 'elerhetosegek', component: ElerhetosegekComponent },
  { path: '', redirectTo: '/fooldal', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ArticleComponent,
    TopBarComponent,
    BemutatoComponent,
    SidebarComponent,
    BottomComponent,
    NewsbarComponent,
    TagszervezetekComponent,
    KiadvanyokComponent,
    EsemenynaptarComponent,
    TaborokComponent,
    ElerhetosegekComponent,
    HomeSliderComponent,
    HomeNewsComponent,
    HomeProspectsComponent,
    HomeCampComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AngularFontAwesomeModule,

    GalleriaModule,
    ScheduleModule,
    ProgressBarModule,

    FacebookModule.forRoot(),

    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
