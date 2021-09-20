import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course =[
    {'id':1,'name':'Learn Angular','desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi ducimus veniam natus doloribus doloremque sapiente maiores culpa dolore magni?','img':'../../assets/angular.png'},
    {'id':2,'name':'Learn React','desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi ducimus veniam natus doloribus doloremque sapiente maiores culpa dolore magni?','img':'../../assets/react.png'},
    {'id':3,'name':'Learn laravel','desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi ducimus veniam natus doloribus doloremque sapiente maiores culpa dolore magni?','img':'../../assets/angular.png'},
    {'id':4,'name':'Learn Angular','desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi ducimus veniam natus doloribus doloremque sapiente maiores culpa dolore magni?','img':'../../assets/react.png'},
  ];
}
