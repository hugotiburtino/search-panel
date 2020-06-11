import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../services/google.service';
import { GoogleResponse } from '../lib/GoogleResponse';

@Component({
  selector: 'app-google-box',
  templateUrl: './google-box.component.html',
  styleUrls: ['./google-box.component.css']
})
export class GoogleBoxComponent implements OnInit {

  entries: GoogleResponse[]; // change type

  constructor(private googleService: GoogleService) { }

  ngOnInit(): void {
    this.googleService.emitter.subscribe(data => {
        this.entries = data.results;
      })
  }

}
