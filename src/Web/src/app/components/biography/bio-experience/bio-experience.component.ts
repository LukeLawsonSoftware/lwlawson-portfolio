import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bio-experience.component.html',
  styleUrl: './bio-experience.component.css',
})
export class BioExperienceComponent {
  experienceList = [
    {
      title: 'Software Engineer',
      company: 'Tech Company Inc.',
      duration: '2022 - Present',
      description:
        'Developing scalable web applications using Angular and Node.js.',
    },
    {
      title: 'Intern Software Developer',
      company: 'Startup Co.',
      duration: '2021 - 2022',
      description:
        'Assisted in the development of a mobile application using React Native.',
    },
    {
      title: 'Junior Developer',
      company: 'Web Solutions Ltd.',
      duration: '2020 - 2021',
      description:
        'Worked on various projects involving front-end and back-end technologies.',
    },
  ];
}
