// chart.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsersData().subscribe(data => {
      this.renderChart(data);
    });
  }

  renderChart(data: any): void {
    const userNames = data.map((user: any) => user.firstname); // Assuming 'firstname' property exists
  const userCounts = data.map((user: any) => user.id); // Assuming 'id' property exists
    // Process data and render chart using Chart.js
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: userNames, // Assuming user object has a 'name' property
        datasets: [{
          label: 'User Count',
          data: userCounts, // Assuming user object has a 'count' property
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
  }
}
