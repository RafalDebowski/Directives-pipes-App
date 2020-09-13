import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loremValue = 'Lorem ispum';
  public example = 'EXAMPLE';
  public jsonObject = {
    properties: 'lorem'
  };
  public birthday = Date.now();
  public isAuthenticated = false;
  public persons: string[] = [
    'Mateusz Stanczak',
    'Adam Kowalski',
    'Marcin Janiak',
    'Robert Lewandowki'
  ];
  public lorem = 'lorem-ipsum-blalba';
}
