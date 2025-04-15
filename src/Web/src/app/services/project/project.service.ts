import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Move the interface from component to service for better organization
export interface ProjectData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  content?: string; // HTML content for project detail page
  markdownContent?: string; // Markdown content for project detail page
  markdownPath?: string; // Path to a markdown file
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // Store all project data centrally in this service
  private projects: ProjectData[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description:
        'A personal portfolio website built with Angular and Tailwind CSS to showcase my projects and skills.',
      imageUrl:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/your-username/portfolio',
      liveUrl: 'https://your-portfolio-url.com',
      content: `
        <h2>Portfolio Website Project</h2>
        <p>This portfolio website was built as a showcase of my development skills and to provide a platform where I can share my projects and professional journey.</p>
        
        <h3>Project Goals</h3>
        <p>The main goals for this project were:</p>
        <ul>
          <li>Create a responsive, modern design that works well on all devices</li>
          <li>Build a maintainable codebase using Angular's latest features</li>
          <li>Implement a dark/light theme toggle for better user experience</li>
          <li>Optimize performance for fast loading times</li>
        </ul>
        
        <h3>Technical Implementation</h3>
        <p>The site is built with Angular 17, utilizing standalone components and the new control flow syntax. For styling, I used Tailwind CSS, which allowed for rapid development of the UI without having to write custom CSS for most components.</p>
        
        <p>The site features:</p>
        <ul>
          <li>Responsive design that adapts to different screen sizes</li>
          <li>Dark/light theme switching with user preference detection</li>
          <li>Static project showcase with filtering capabilities</li>
          <li>Contact form with validation</li>
        </ul>
        
        <h3>Challenges and Solutions</h3>
        <p>One of the main challenges was implementing the theme switching functionality. I solved this by creating a theme service that manages the theme state and persists user preferences to local storage.</p>
        
        <p>Another challenge was optimizing image loading for the project cards. I implemented lazy loading and responsive images to improve performance.</p>
        
        <h3>Future Improvements</h3>
        <p>I plan to add the following features in future updates:</p>
        <ul>
          <li>A blog section where I can share technical articles</li>
          <li>Improved animations for a more engaging user experience</li>
          <li>Integration with a headless CMS for easier content management</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce application with product catalog, shopping cart, and secure checkout functionality.',
      imageUrl:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/your-username/ecommerce-app',
      liveUrl: 'https://your-ecommerce-url.com',
      content: `
        <h2>E-commerce Platform</h2>
        <p>This e-commerce platform was developed as a full-stack application to demonstrate my ability to create complex, interactive web applications with secure payment processing.</p>
        
        <h3>Project Overview</h3>
        <p>The platform provides a complete shopping experience, including:</p>
        <ul>
          <li>Product browsing with categories and search functionality</li>
          <li>User account management</li>
          <li>Shopping cart functionality</li>
          <li>Secure checkout process</li>
          <li>Order history and tracking</li>
        </ul>
        
        <h3>Technical Stack</h3>
        <p>The application uses the MERN stack:</p>
        <ul>
          <li><strong>Frontend:</strong> React with Redux for state management</li>
          <li><strong>Backend:</strong> Node.js with Express</li>
          <li><strong>Database:</strong> MongoDB with Mongoose ODM</li>
          <li><strong>Authentication:</strong> JWT (JSON Web Tokens)</li>
          <li><strong>Payment Processing:</strong> Stripe API integration</li>
        </ul>
        
        <h3>Key Features Implementation</h3>
        <p>The shopping cart was implemented using Redux for state management, with persistence to local storage to maintain the cart state between sessions. The checkout process integrates with Stripe for secure payment processing.</p>
        
        <p>User authentication is handled using JWT, with secure password hashing and token refreshing mechanisms to maintain secure sessions.</p>
        
        <h3>Challenges and Solutions</h3>
        <p>One significant challenge was implementing real-time inventory management to prevent overselling products. This was solved by implementing optimistic UI updates with server verification.</p>
        
        <p>Another challenge was ensuring a smooth checkout process while validating payment information. I implemented a multi-step form with validation at each step to provide immediate feedback to users.</p>
        
        <h3>Lessons Learned</h3>
        <p>This project taught me the importance of:</p>
        <ul>
          <li>Careful state management in complex applications</li>
          <li>Security considerations for e-commerce platforms</li>
          <li>User experience design for conversion optimization</li>
          <li>Testing payment flows thoroughly</li>
        </ul>
      `,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'A weather application that displays current conditions and forecasts based on user location or search.',
      imageUrl:
        'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
      githubUrl: 'https://github.com/your-username/weather-app',
      content: `
        <h2>Weather Dashboard</h2>
        <p>This weather dashboard application provides users with current weather conditions and forecasts for any location worldwide.</p>
        
        <h3>Project Goals</h3>
        <p>The primary goals for this project were:</p>
        <ul>
          <li>Create an intuitive interface for checking weather information</li>
          <li>Implement geolocation for automatic local weather</li>
          <li>Provide detailed forecast data with useful visualizations</li>
          <li>Make the application fully responsive for all devices</li>
        </ul>
        
        <h3>Technical Implementation</h3>
        <p>The application is built with vanilla JavaScript, HTML5, and CSS3, demonstrating that powerful applications can be created without frameworks when appropriate. It integrates with the OpenWeather API to fetch weather data.</p>
        
        <p>Key technical features include:</p>
        <ul>
          <li>Geolocation API integration for detecting user location</li>
          <li>Asynchronous API calls using Fetch API and async/await</li>
          <li>Local storage for saving recent searches</li>
          <li>Dynamic DOM manipulation for rendering weather data</li>
          <li>CSS Grid and Flexbox for responsive layouts</li>
        </ul>
        
        <h3>Weather Data Visualization</h3>
        <p>Weather data is presented through a combination of icons, temperature readings, and charts. The 5-day forecast section uses a simple chart implementation to visualize temperature trends.</p>
        
        <h3>User Experience Considerations</h3>
        <p>Special attention was paid to the application's usability:</p>
        <ul>
          <li>Loading states are clearly indicated while data is being fetched</li>
          <li>Error messages are user-friendly and provide guidance</li>
          <li>Search history allows for quick access to previously viewed locations</li>
          <li>Units can be toggled between metric and imperial systems</li>
        </ul>
        
        <h3>Future Enhancements</h3>
        <p>Planned improvements include:</p>
        <ul>
          <li>Adding weather alerts and notifications</li>
          <li>Implementing more detailed weather maps</li>
          <li>Adding historical weather data comparison</li>
          <li>Integrating air quality information</li>
        </ul>
      `,
    },
    {
      id: 4,
      title: 'Task Management App',
      description:
        'A productivity application for managing tasks with features like categories, priorities, and due dates.',
      imageUrl:
        'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['Vue.js', 'Vuex', 'Firebase'],
      githubUrl: 'https://github.com/your-username/task-manager',
      liveUrl: 'https://your-task-app-url.com',
      content: `
        <h2>Task Management Application</h2>
        <p>This task management application was developed to help users organize their work and personal tasks in an intuitive interface.</p>
        
        <h3>Project Overview</h3>
        <p>The application provides a comprehensive task management solution with the following features:</p>
        <ul>
          <li>Task creation with title, description, due date, and priority</li>
          <li>Task categorization with custom labels</li>
          <li>Drag-and-drop task organization</li>
          <li>Progress tracking with completion statistics</li>
          <li>Reminder notifications</li>
          <li>Task filtering and searching</li>
        </ul>
        
        <h3>Technical Architecture</h3>
        <p>The application is built with Vue.js using the Composition API for better code organization and reusability. Vuex is used for state management, and Firebase provides the backend services.</p>
        
        <p>Key technical components include:</p>
        <ul>
          <li><strong>Frontend:</strong> Vue.js 3 with Composition API</li>
          <li><strong>State Management:</strong> Vuex 4</li>
          <li><strong>Backend:</strong> Firebase (Authentication, Firestore, Cloud Functions)</li>
          <li><strong>UI Components:</strong> Custom components with some from Vuetify</li>
          <li><strong>Drag and Drop:</strong> Vue Draggable</li>
        </ul>
        
        <h3>User Authentication</h3>
        <p>The application uses Firebase Authentication to provide secure user sign-up and login. Users can register with email/password or use Google authentication for a quicker onboarding process.</p>
        
        <h3>Data Synchronization</h3>
        <p>Firestore's real-time database capabilities ensure that users' tasks are always in sync across multiple devices. The application also supports offline mode, allowing users to continue working even without an internet connection.</p>
        
        <h3>Challenges and Solutions</h3>
        <p>One of the main challenges was implementing the drag-and-drop functionality while maintaining the correct task order in the database. This was solved by implementing a position field for each task and updating it after drag operations.</p>
        
        <p>Another challenge was optimizing the application's performance with a large number of tasks. This was addressed by implementing pagination and virtualized scrolling for task lists.</p>
        
        <h3>Future Development</h3>
        <p>Future plans for the application include:</p>
        <ul>
          <li>Team collaboration features</li>
          <li>Integration with calendar applications</li>
          <li>Time tracking functionality</li>
          <li>Advanced reporting and analytics</li>
        </ul>
      `,
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description:
        'An application to track workouts, set goals, and visualize progress with interactive charts.',
      imageUrl:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['Angular', 'NgRx', 'Chart.js', 'Firebase'],
      githubUrl: 'https://github.com/your-username/fitness-tracker',
      content: `
        <h2>Fitness Tracker Application</h2>
        <p>This fitness tracking application was developed to help users monitor their workout progress, set fitness goals, and visualize their achievements over time.</p>
        
        <h3>Project Goals</h3>
        <p>The primary goals for this application were:</p>
        <ul>
          <li>Create an intuitive interface for logging workouts</li>
          <li>Provide visual representations of progress</li>
          <li>Implement goal-setting and achievement tracking</li>
          <li>Design a motivational user experience</li>
        </ul>
        
        <h3>Technical Implementation</h3>
        <p>The application is built with Angular using NgRx for state management. Firebase provides backend services, and Chart.js is used for data visualization.</p>
        
        <p>Key technical features include:</p>
        <ul>
          <li><strong>Frontend:</strong> Angular with Angular Material components</li>
          <li><strong>State Management:</strong> NgRx Store, Effects, and Selectors</li>
          <li><strong>Backend:</strong> Firebase (Authentication, Firestore, Storage)</li>
          <li><strong>Data Visualization:</strong> Chart.js with angular-chart.js wrapper</li>
          <li><strong>Form Management:</strong> Reactive Forms with custom validators</li>
        </ul>
        
        <h3>Workout Tracking Features</h3>
        <p>The application allows users to track various types of workouts:</p>
        <ul>
          <li>Strength training with sets, reps, and weight</li>
          <li>Cardio exercises with duration, distance, and intensity</li>
          <li>Flexibility and mobility workouts</li>
          <li>Custom exercise creation and categorization</li>
        </ul>
        
        <h3>Data Visualization</h3>
        <p>Progress visualization is a key feature of the application, implemented with Chart.js. Users can view:</p>
        <ul>
          <li>Weekly and monthly workout summaries</li>
          <li>Progress charts for specific exercises</li>
          <li>Body measurement tracking over time</li>
          <li>Goal completion statistics</li>
        </ul>
        
        <h3>Challenges and Solutions</h3>
        <p>A significant challenge was designing a flexible data model that could accommodate different types of exercises and metrics while maintaining good query performance. This was solved by implementing a normalized data structure with specific linking documents.</p>
        
        <p>Another challenge was creating intuitive data visualizations that could meaningfully represent different workout types. This was addressed by developing custom chart configurations for each exercise category.</p>
        
        <h3>Future Enhancements</h3>
        <p>Planned improvements include:</p>
        <ul>
          <li>Workout plan recommendations based on goals</li>
          <li>Social features for workout sharing and challenges</li>
          <li>Integration with fitness wearables and health apps</li>
          <li>Nutrition tracking and meal planning</li>
        </ul>
      `,
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description:
        'A web application that helps users find recipes based on available ingredients or dietary restrictions.',
      imageUrl:
        'https://images.unsplash.com/photo-1556911220-bda9f7f7597e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['React', 'Redux', 'Spoonacular API'],
      githubUrl: 'https://github.com/your-username/recipe-finder',
      liveUrl: 'https://your-recipe-app-url.com',
      markdownContent: `
# Recipe Finder Application

This recipe finder application was developed to help users discover new recipes based on ingredients they already have, dietary restrictions, or meal preferences.

## Project Overview

The application solves common cooking challenges by providing:

- Recipe search by available ingredients
- Filtering based on dietary restrictions (vegan, gluten-free, etc.)
- Meal planning assistance
- Nutritional information for recipes
- Recipe saving and categorization

## Technical Stack

The application is built with React and utilizes Redux for state management. It integrates with the Spoonacular API for recipe data.

Key technical components include:

- **Frontend:** React with functional components and hooks
- **State Management:** Redux with Redux Toolkit
- **API Integration:** Spoonacular API for recipe data
- **Styling:** Styled-components with a custom theme system
- **Form Handling:** Formik with Yup validation

## Search Algorithm

The recipe search functionality uses a sophisticated algorithm that considers:

- Ingredient matching and ranking
- User preferences and past behavior
- Recipe popularity and ratings
- Dietary restrictions and allergens

## User Experience Design

Special attention was paid to the user experience, particularly around the ingredient input process. Users can:

- Enter ingredients manually with autocomplete suggestions
- Scan product barcodes to add ingredients
- Import ingredient lists from text
- Save favorite ingredients for quick access

## Challenges and Solutions

One challenge was optimizing API usage to stay within rate limits while providing a responsive user experience. This was solved by implementing client-side caching and request batching.

Another challenge was handling the complex filtering logic required for dietary restrictions and allergens. This was addressed by developing a custom filtering system that could be composed from multiple filter criteria.

## Code Sample

Here's a simplified example of how we handle ingredient matching:

\`\`\`javascript
const findMatchingRecipes = (ingredients, dietaryRestrictions) => {
  return availableRecipes.filter(recipe => {
    // Check if recipe matches dietary restrictions
    if (!meetsRestrictions(recipe, dietaryRestrictions)) {
      return false;
    }
    
    // Calculate how many ingredients match
    const matchCount = ingredients.filter(ingredient => 
      recipe.ingredients.some(ri => ri.includes(ingredient))
    ).length;
    
    // Recipe must match at least 3 ingredients or 50% of required ingredients
    return matchCount >= 3 || 
           (matchCount / recipe.ingredients.length) >= 0.5;
  });
};
\`\`\`

## Future Development

Planned enhancements include:

- Personalized recipe recommendations based on user preferences
- Community features for recipe sharing and reviews
- Automated grocery list generation
- Meal plan optimization for nutritional balance
`,
    },
    {
      id: 7,
      title: 'Developer Blog Platform',
      description:
        'A markdown-based blog platform designed for developers to share technical articles and tutorials.',
      imageUrl:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'MDX'],
      githubUrl: 'https://github.com/your-username/dev-blog',
      liveUrl: 'https://your-dev-blog-url.com',
      markdownContent: `
# Developer Blog Platform

A modern, fast, and customizable blog platform built specifically for developers and technical writers who want to share code snippets, technical articles, and programming tutorials.

## Key Features

- **Markdown-first authoring** with support for code syntax highlighting
- **Light and dark theme** automatically adapting to user preferences
- **Responsive design** optimized for all device sizes
- **Fast page loads** through static site generation
- **SEO optimization** for better discoverability

## Technical Implementation

This platform is built with Next.js to provide static site generation for blazing-fast page loads while still allowing for dynamic content when needed. The content is authored in Markdown with MDX extensions, allowing for React components to be embedded within content.

The styling is handled through TailwindCSS, providing a consistent design system that adapts to both light and dark mode preferences.

## Code Highlighting Example

\`\`\`typescript
// Example of syntax highlighting in code blocks
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = words / wordsPerMinute;
  return Math.ceil(minutes);
}

interface BlogPost {
  title: string;
  content: string;
  publishDate: Date;
  tags: string[];
  get readingTime(): number;
}

class Post implements BlogPost {
  title: string;
  content: string;
  publishDate: Date;
  tags: string[];
  
  constructor(title: string, content: string, tags: string[] = []) {
    this.title = title;
    this.content = content;
    this.publishDate = new Date();
    this.tags = tags;
  }
  
  get readingTime(): number {
    return calculateReadingTime(this.content);
  }
}
\`\`\`

## Light and Dark Theme Support

The platform automatically detects the user's preferred color scheme and applies the appropriate theme. Users can also manually toggle between light and dark mode.

In dark mode, the syntax highlighting uses a dark background with vibrant colors for better readability in low-light environments.

## Performance Optimizations

The blog platform implements several performance optimizations:

- **Static site generation** for fast initial page loads
- **Image optimization** with lazy loading and proper sizing
- **Code splitting** to reduce initial bundle size
- **Minimal JavaScript** required for core functionality
- **Efficient styling** through utility-first CSS

## Future Enhancements

- Comment system with code snippet support
- User authentication for personalized reading lists
- Analytics dashboard for content creators
- Newsletter integration for subscriber management
- Improved search functionality with tag filtering
`,
    },
    {
      id: 8,
      title: 'Cloud-Native Architecture',
      description:
        'A case study on building scalable cloud-native applications with microservices and Kubernetes.',
      imageUrl:
        'https://images.unsplash.com/photo-1603695620987-86cb8ebc8b58?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      technologies: ['Kubernetes', 'Microservices', 'Terraform', 'Cloud'],
      githubUrl: 'https://github.com/your-username/cloud-native-demo',
      markdownContent: `
# Cloud-Native Architecture Case Study

This case study examines the implementation of a cloud-native architecture for a financial services application, focusing on scalability, resilience, and security.

## Project Overview

The client, a growing fintech company, needed to migrate their monolithic application to a microservices architecture that could:

- Scale elastically to handle variable transaction loads
- Provide high availability with zero downtime deployments
- Maintain strict security and compliance requirements
- Enable faster feature delivery through CI/CD pipelines

## Technical Architecture

The solution was designed with the following components:

### Infrastructure as Code

All infrastructure was defined using Terraform, enabling:

- Repeatable environment creation
- Version-controlled infrastructure
- Automated provisioning and scaling
- Multi-region deployment capabilities

### Containerization Strategy

The application was decomposed into microservices, each:

- Containerized using Docker with minimal base images
- Independently deployable and scalable
- Responsible for a specific business domain
- Designed with resilience patterns (circuit breakers, retries, etc.)

### Kubernetes Orchestration

We implemented a production-grade Kubernetes cluster with:

- Multi-zone high availability configuration
- Horizontal pod autoscaling based on metrics
- Resource quotas and limits for cost optimization
- Network policies for service-to-service communication

### Service Mesh Implementation

Istio service mesh was deployed to provide:

- Advanced traffic management (canary deployments, A/B testing)
- Mutual TLS encryption for all service communication
- Detailed metrics, logs, and distributed tracing
- Authentication and authorization policies

## Security Considerations

Security was implemented at multiple layers:

1. **Infrastructure Security**
   - Private VPC networks with minimal public exposure
   - IAM roles with least privilege principles
   - All secrets managed through a dedicated secrets management service

2. **Container Security**
   - Image scanning for vulnerabilities
   - Read-only file systems where possible
   - Non-root container execution
   - Runtime security monitoring

3. **Application Security**
   - Authentication using OpenID Connect
   - API gateway with rate limiting and DDoS protection
   - Regular penetration testing and security audits

## CI/CD Pipeline

The continuous delivery pipeline included:

- Source control integration with feature branch workflows
- Automated testing (unit, integration, security, performance)
- Infrastructure validation and preview environments
- Blue/green deployments with automated rollback capabilities

## Performance Results

After migration to the cloud-native architecture:

- Transaction processing capacity increased by 300%
- Deployment frequency improved from monthly to daily
- Time to recover from failures reduced from hours to minutes
- Infrastructure costs decreased by 40% through dynamic scaling

## Lessons Learned

Key insights from this project included:

1. Start with a thorough domain analysis before defining microservice boundaries
2. Invest early in observability to understand system behavior
3. Automate everything, including infrastructure, testing, and deployments
4. Consider the operational complexity trade-offs of distributed systems
5. Maintain a strong focus on security throughout the development lifecycle

## Code Sample: Kubernetes Deployment Configuration

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-service
  namespace: financial
spec:
  replicas: 3
  selector:
    matchLabels:
      app: payment-service
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: payment-service
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "8080"
    spec:
      containers:
      - name: payment-service
        image: example/payment-service:v1.2.3
        ports:
        - containerPort: 8080
        resources:
          limits:
            cpu: 500m
            memory: 512Mi
          requests:
            cpu: 200m
            memory: 256Mi
        readinessProbe:
          httpGet:
            path: /health/ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 10
        livenessProbe:
          httpGet:
            path: /health/live
            port: 8080
          initialDelaySeconds: 15
          periodSeconds: 20
        securityContext:
          readOnlyRootFilesystem: true
          runAsNonRoot: true
          allowPrivilegeEscalation: false
        env:
        - name: DB_CONNECTION_STRING
          valueFrom:
            secretKeyRef:
              name: payment-db-credentials
              key: connection-string
\`\`\`

## Conclusion

This cloud-native architecture transformation delivered significant business value through improved scalability, reliability, and development velocity. The adoption of Kubernetes and microservices enabled the client to better serve their customers with a more responsive and resilient platform.
`,
    },
  ];

  constructor() {}

  /**
   * Get all projects
   * @returns Observable with array of all projects
   */
  getAllProjects(): Observable<ProjectData[]> {
    return of(this.projects);
  }

  /**
   * Get a specific project by ID
   * @param id The project ID to retrieve
   * @returns Observable with the project or undefined if not found
   */
  getProjectById(id: number): Observable<ProjectData | undefined> {
    const project = this.projects.find((p) => p.id === id);
    return of(project);
  }
}
