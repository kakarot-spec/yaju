import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-missing-project-link-page',
  imports: [RouterLink],
  templateUrl: './missing-project-link-page.html',
  styleUrl: './missing-project-link-page.css',
})
export class MissingProjectLinkPage {
  protected readonly projectTitle: string | null;

  constructor(route: ActivatedRoute) {
    this.projectTitle = route.snapshot.queryParamMap.get('project');
  }
}
