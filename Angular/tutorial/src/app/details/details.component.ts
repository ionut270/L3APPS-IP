import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public user: any[];

  constructor(private data: DataService, private route: ActivatedRoute) {
    
   }

   ngOnInit() {
    this.route.params.subscribe( params => { 
      this.data.getUser(params.id).subscribe(
        (data : any[]) => { this.user =  data;}
      );

    } )
  }

}
