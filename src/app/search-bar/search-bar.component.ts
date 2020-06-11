import { Component, OnInit } from '@angular/core';
import { DuckDuckGoService } from '../services/duck-duck-go.service';
import { GoogleService } from '../services/google.service';
import { BingService } from '../services/bing.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  userinput: string;

  constructor(private duckDuckGoService: DuckDuckGoService,
    private googleService: GoogleService,
    private bingService: BingService) { }

  ngOnInit(): void {
  }

  /**
   * Calls the Services to do their queries
   * based on the user input
   */
  search() {
      this.duckDuckGoService.query(this.userinput);
      this.googleService.query(this.userinput);
      this.bingService.query(this.userinput);
  }
}
