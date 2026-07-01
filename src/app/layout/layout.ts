import { Component } from '@angular/core'  
import { RouterLink, RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,Nav],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
})
export class Layout {

}
