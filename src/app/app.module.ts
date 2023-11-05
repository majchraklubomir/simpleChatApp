import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './components/person/person.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { GridAreaComponent } from './components/grid-area/grid-area.component';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ChatAreaComponent } from './components/chat-area/chat-area.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    MainPageComponent,
    GridAreaComponent,
    ChatAreaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
