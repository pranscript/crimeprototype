import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrimedataService } from '../../shared/crimedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Crimeanalysis';
  data: any;
  crimedata: any ;
  // constructor( private crimedataService: CrimedataService) {
    constructor( private router: Router) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

  }
  ngOnInit() {
    // this.crimedataService.getNews().subscribe((data) => {
    //   console.log(data);
    //   this.crimedata = data;
    // });
    if (localStorage.getItem('sessionLogin') === null) {
      this.router.navigate(['/authenticator/login']);
    }
  }

}
