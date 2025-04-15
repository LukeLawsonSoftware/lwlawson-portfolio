import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import {
  ProjectData,
  ProjectService,
} from '../../../services/project/project.service';
import { MarkdownRendererComponent } from '../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MarkdownRendererComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent implements OnInit {
  project: ProjectData | undefined;
  projectId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectId = +params['id'];
      this.loadProjectDetails();
    });
  }

  loadProjectDetails(): void {
    // Get the project details from the service instead of using a local collection
    this.projectService.getProjectById(this.projectId).subscribe((project) => {
      this.project = project;

      if (!this.project) {
        this.router.navigate(['/projects']);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/projects']);
  }
}
