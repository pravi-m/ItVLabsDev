import { Component, OnInit } from '@angular/core';

import { Reason } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
  public reasonList;

  constructor() { 
  	this.reasonList = reasons;
  }

  ngOnInit() {
  }

}

var reasons : Reason[]=[
{"imgUrl":"../../assets/images/6.png","reason":"Practice any Big Data ecosystem tools","description":"Big Data eco system has many tools, such as Hadoop, Map Reduce, Spark, Hive, Pig, Sqoop, Flume, Kafka etc. Big Data labs will provide lab to explore and learn an Big Data technology."},
{"imgUrl":"../../assets/images/4.png","reason":"Access from any where","description":"Lab is powered by multi node cluster with all the necessary components. It is accessible from any where using internet. Also lab is scalable based up on the usage."},
{"imgUrl":"../../assets/images/5.png","reason":"Prepare for certifications","description":"There are many free or low cost certification courses available at itversity and IT Versity's YouTube channel. Enroll for Big Data labs at affordable cost. It is well integrated with the content to practice for all the courses from your location at your own pace."},
{"imgUrl":"../../assets/images/7.png","reason":"Learning Support","description":"Support will be provided in case of any issues through emails, groups or forums as well as regular live sessions. Also there will be live courses based on the demand of users."}
];
