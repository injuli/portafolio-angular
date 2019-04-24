import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../../wordpress.service';


@Component({
  selector: 'app-pruebawp',
  templateUrl: './pruebawp.component.html',
  styleUrls: ['./pruebawp.component.css']
})
export class PruebawpComponent implements OnInit {
  posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
  }
  ngOnInit() {
  }

}
