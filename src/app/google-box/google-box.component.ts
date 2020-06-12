import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../services/google.service';
import { GoogleResponse } from '../lib/GoogleResponse';

/**
 * Class that handles box where entries from Google
 * are displayed
 */
@Component({
  selector: 'app-google-box',
  templateUrl: './google-box.component.html',
  styleUrls: ['./google-box.component.css']
})
export class GoogleBoxComponent implements OnInit {

  /** Results from the search */
  entries: GoogleResponse[];

  constructor(private googleService: GoogleService) { }

  ngOnInit(): void {
    this.googleService.emitter.subscribe(data => {
        this.entries = data.results;
      })
  }

}
