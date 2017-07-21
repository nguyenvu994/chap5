import { Component } from '@angular/core';
import { SeverElementComponent } from './sever-element/sever-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  severElements = [{type: 'server', name: 'ServerTest', content:'Just a test'}];
}
