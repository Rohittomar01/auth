import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-done-screen',
  standalone: true,
  templateUrl: './done-screen.component.html',
  styleUrls: ['./done-screen.component.css'],
  imports:[CommonModule]
})
export class DoneScreenComponent implements OnInit {

  pagename: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.pagename = params.get('pagename');
      console.log('Pagename:', this.pagename); 
    });
  }
}
