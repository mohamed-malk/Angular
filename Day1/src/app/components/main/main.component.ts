import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  projectTitle: string = 'Angular Day1 ';
  projectImage: string = 'assets/images/img_2.jpg';
  projectDescription: string = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, 
  facilis id sed quae odit ut dolor ratione dignissimos, impedit aut consequatur! Autem reprehenderit
   officiis quod voluptates eaque facilis corrupti libero.
  `;
}
