import { Component, OnInit } from '@angular/core';
import { ApiTallerService } from 'src/app/servicios/api-taller.service';
import { Data } from '../interfaces/interfaces';

@Component({
  selector: 'app-feriado',
  templateUrl: './feriado.page.html',
  styleUrls: ['./feriado.page.scss'],
})
export class FeriadoPage implements OnInit {

  datos :Data[]=[];

  constructor(private apiService: ApiTallerService) { }

  ngOnInit() {
    this.apiService.getTopHeadLines().subscribe(resp =>{
      console.log(resp);
      this.datos.push(...resp.data);
    })
  }

}
