import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Author } from './layout/author/author';
import { NgRx } from './layout/ng-rx/ng-rx';
import { Banking } from './layout/banking/banking';
import { Typescript } from './layout/typescript/typescript';
import { Search } from './layout/search/search';
import { Deashboad } from './goamar/deashboad/deashboad';
import { NgrxBanking } from './layout/ngrx-banking/ngrx-banking';
import { ReactiveformRegister } from './goamar/reactiveform-register/reactiveform-register';
import { ImmediateInvoke } from './layout/immediate-invoke/immediate-invoke';
import { JavascriptLogic } from './layout/javaScript/javascript-logic/javascript-logic';
import { JSCode } from './layout/javaScript/js-code/js-code';
import { JsConcepts } from './layout/javaScript/js-concepts/js-concepts';
import { EmployeeList } from './java/employee/employee-list/employee-list';
import { Add } from './java/employee/add/add';
import { Header } from './java/employee/header/header';
import { Headers } from './goamar/component/headers/headers';
import { Home } from './java/employee/home/home';   
import { Edit } from './java/employee/edit/edit';
import { Homecomponent } from './goamar/component/homecomponent/homecomponent';
import { Main } from './layout/main/main';
import { Javalogin } from './java/employee/javalogin/javalogin';
import { Days1 } from './layout/javaScript/js-code/days/days1/days1';
import { Rxjs } from './layout/rxjs/rxjs';
import { Exercise2june } from './layout/exercise2june/exercise2june';
import { Adminlogin } from './layout/adminlogin/adminlogin';
import { Rxjsconcept } from './layout/rxjsconcept/rxjsconcept';


export const routes: Routes = [
    {path: '', redirectTo: 'goamar', pathMatch: 'full' },
    {path: 'Deashboad', component: Deashboad},
    {path: 'employee', loadComponent: () => import('./java/employee/home/home').then(m => m.Home),children:[
        {path: 'list', component: EmployeeList},
        {path: 'add', component: Add},
        {path: 'header', component: Header},
        {path: 'home', component: Home},
        { path: 'edit/:id', component:Edit },
        {path:'loginpage', component: Javalogin}
    ]},
    {path: 'layout', loadComponent: () => import('./layout/layout').then(c => c.Layout),
        children: [
            {path: 'immediate_invoke', component: ImmediateInvoke},
            {path: 'JS_logics', component: JavascriptLogic},
            {path: 'js_concept', component: JsConcepts},
            {path: 'js_code', component: JSCode},
            {path: 'days1', component: Days1},
            {path: 'author',component: Author},
            {path: 'NgRx', component: NgRx},
            {path:'rxjsconcept', component: Rxjsconcept},
            {path: 'exercise2june', component: Exercise2june, children: [
                {path: 'adminlogin', component: Adminlogin}
            ]},
            {path: 'rxjs', component: Rxjs},
            {path: 'ngrx-banking', component: NgrxBanking},
            {path:'banking', component:Banking},
            {path:'typescript', component:Typescript},
            {path: 'search', component: Search},
            {path: 'search/error', loadComponent: () => import('./layout/search/error/error').then(m => m.Error)   }
        ]
    },
    {path: 'goamar', loadComponent: () => import('./goamar/goamar').then(m => m.Goamar), children: [
        {path: 'home', component: Homecomponent},
        {path: 'main', component: Main},
        {path:'headers',component: Headers}
    ]
    }
];
