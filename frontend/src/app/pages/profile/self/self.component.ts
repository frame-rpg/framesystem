import { Component, OnInit } from '@angular/core';

import { FramesystemServiceClient } from 'src/proto/service.pbsc';
import { ListCampaignsRequest } from 'src/proto/service.pb';

@Component({
  selector: 'fs-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.scss']
})
export class SelfComponent implements OnInit {
  constructor(private client: FramesystemServiceClient) {}

  ngOnInit(): void {
    this.client
      .listCampaigns(new ListCampaignsRequest())
      .subscribe(f => console.log(f));
  }
}
