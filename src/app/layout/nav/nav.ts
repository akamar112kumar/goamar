export interface MenuItem {
  color: string,
  label: string;
  link?: string; // Optional link for routing
  children?: MenuItem[]; // Optional array for sub-menu items
  action?: () => void; // Optional action for click events
}
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
})
export class Nav {
menuItems: MenuItem[] = [
    {
      label: 'author',
      color: '',
      link: '/layout/author'
    },
     {
      label: 'NgRx_practice', 
      color:'',
      children: [
        { label: 'with_effects',  color:'',link: '/layout/NgRx' },
        { label: 'without_effects', color:'', link: '/layout/ngrx-banking' },
        { label: 'Banking',  color:'',link: '/layout/banking' }
      ]
    },
    {
      label: 'RxJs', 
      color:'',
      children: [
        { label: 'rxjs',  color:'',link: '/layout/rxjs' },
        { label: 'exercise2june',  color:'',link: '/layout/exercise2june' },
        {label: 'rxjsconcept',  color:'',link: '/layout/rxjsconcept' },
      ]
    },
    {
      label: 'days', 
      color:'',
      children: [
        { label: 'days1',  color:'',link: '/layout/days1' },
      ]
    },
    {
      label: 'Products',
       color:'',
      children: [
        { label: 'typescript',  color:'',link: '/layout/typescript' },
        { label: 'search', color:'', link: '/layout/search' },
        { label: 'error', color:'', link: '/layout/search/error' },
      ]
    },
    {
      label: "JavaScript",
      color: 'blue',
      children: [
        {label: "immediate_invoke",  color:'', link: '/layout/immediate_invoke'},
        {label: "Js_concept",  color:'', link: '/layout/js_concept'},
        {label: "JS_logics",  color:'', link: '/layout/JS_logics'},
        {label: "js_code",  color:'', link: '/layout/js_code'},
      ]
    }
    // {label: 'authors',link: '/routes'},
    // {label: 'Logout', action: this.logout }
  ];

  logout(): void {
    console.log('User logged out');
    // Add actual logout logic here
  }

  handleAction(item: MenuItem): void {
    if (item.action) {
      item.action();
    } else if (item.link) {
      // Logic for routing could go here (e.g., using the Router service)
      console.log(`Navigating to ${item.link}`);
    }
  }

  disableMenu(): void {
    
  }
  

}
