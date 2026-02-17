import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly name = 'Alex Morgan';
  readonly title = 'Senior Software Engineer | Angular Specialist';

  readonly summary =
    'Experienced software engineer with 8+ years delivering scalable web products, leading teams, and building modern Angular applications.';

  readonly skills = [
    'Angular',
    'TypeScript',
    'RxJS',
    'NgRx',
    'Node.js',
    'REST APIs',
    'System Design',
    'Agile Leadership'
  ];

  readonly experiences: ExperienceItem[] = [
    {
      role: 'Lead Frontend Engineer',
      company: 'Visionary Tech Solutions',
      duration: '2021 - Present',
      highlights: [
        'Led a team of 6 engineers to build a reusable Angular component library used across 4 products.',
        'Reduced page load time by 42% using performance profiling and lazy-loading strategies.',
        'Partnered with product/design leadership to deliver enterprise dashboards used by 10k+ monthly users.'
      ]
    },
    {
      role: 'Senior Software Engineer',
      company: 'Nexora Systems',
      duration: '2018 - 2021',
      highlights: [
        'Migrated legacy UI codebase to Angular, improving maintainability and release speed.',
        'Implemented automated CI quality gates that decreased production defects by 30%.',
        'Mentored junior developers on clean architecture and test-driven development.'
      ]
    }
  ];

  readonly projects = [
    {
      name: 'TalentTrack Platform',
      description: 'Recruitment analytics platform for enterprise HR teams.',
      impact: 'Increased hiring pipeline visibility and reduced report preparation time by 60%.'
    },
    {
      name: 'OpsPulse Dashboard',
      description: 'Real-time operations dashboard with role-based access and custom alerts.',
      impact: 'Improved incident response SLAs by surfacing critical metrics in under 2 seconds.'
    }
  ];
}
