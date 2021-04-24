import {
  ListCampaignsRequest,
  ListCampaignsResponse
} from 'src/proto/service.pb';

import { Component } from '@angular/core';
import { FramesystemServiceClient } from '../proto/service.pbsc';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  campaigns: Observable<ListCampaignsResponse>;
  constructor(private serviceClient: FramesystemServiceClient) {
    this.campaigns = this.serviceClient.listCampaigns(
      new ListCampaignsRequest()
    );
  }
}
