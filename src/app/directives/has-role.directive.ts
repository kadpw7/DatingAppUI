import { User } from './../models/user';
import { AccountService } from './../services/account.service';
import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[appHasRole]' // A directive is create via ng g d. Usage example: *appHasRole='["Admin"]'
})                         // To see how we use it, go to nav.component.html
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[];
  user:User;

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>, private accountService: AccountService) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe(user=>{
      this.user = user;
    })
  }
  ngOnInit(): void {
    // Clear view if no roles
    if(!this.user?.roles || this.user == null){
      this.viewContainerRef.clear();
      return;
    }

    if(this.user?.roles.some(r=>this.appHasRole.includes(r))){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainerRef.clear();
    }
  }
}
