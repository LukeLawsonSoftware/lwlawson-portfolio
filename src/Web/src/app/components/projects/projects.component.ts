import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import {
  ProjectService,
  ProjectData,
} from '../../services/project/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: ProjectData[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    // Get projects from the service instead of hardcoding
    this.projectService.getAllProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
