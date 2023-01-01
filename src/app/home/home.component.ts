import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Id:any;

  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    // let result= this.activatedroute.paramMap.subscribe((ParamMap)=>{
    //   let id=ParamMap.get('id');
    //   this.Id=Number(id);
  // })

}

}
