import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  value : string = 'Full Time';
  values : string = 'part Time';
  jobTitle : string = 'Developer';
  location : string = '';

  ngOnInit(): void {
    
  }

  Onclick(e:any){
    alert('Search for' + this.jobTitle);
  }

  FullTime(e:any){
    alert('Search for Full Time ' + this.jobTitle + 'job')
  }

  PartTime(e:any){
    alert('Search for Part Time '+ this.jobTitle + 'job')

  }

}
