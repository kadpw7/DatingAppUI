import { PresenceService } from './../../services/presence.service';
import { ToastrService } from 'ngx-toastr';
import { MembersService } from './../../services/members.service';
import { Member } from './../../models/member';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member;

  constructor(private memberService: MembersService, private toastr: ToastrService, public presence: PresenceService) {}

  ngOnInit(): void {
  }

  addLike(member: Member){
    this.memberService.AddLike(member.username).subscribe(() => {
      this.toastr.success("You have liked " + member.nickname);
    })
  }

}
