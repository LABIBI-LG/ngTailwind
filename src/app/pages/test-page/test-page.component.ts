import { Component, OnInit } from '@angular/core';
import { STATIC_ROUTES } from 'src/app/core/constant/routes.constant';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  STATIC_ROUTES = STATIC_ROUTES;
  ngOnInit(): void {
    const val = this.authService.getValue();
    console.log('val',val);
  }

  changeVal(): void{
    this.authService.setValue('456');
  }
}

