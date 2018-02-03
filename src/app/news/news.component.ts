import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any;
  constructor(private dataService: DataService) { 
    this.dataService.getNews().subscribe(news => {
        this.news = news.articles;
        console.log(this.news);
    })
  }
    
  ngOnInit() {
  }

}
