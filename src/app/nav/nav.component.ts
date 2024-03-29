import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public AccountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(){
    this.AccountService.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/members');   
    })
  }

  logout(){
    this.AccountService.logout();
    this.router.navigateByUrl('/');
  }
}