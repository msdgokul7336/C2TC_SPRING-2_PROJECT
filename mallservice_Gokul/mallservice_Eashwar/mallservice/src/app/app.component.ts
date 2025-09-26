import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MallService } from './mall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mall-module';

  constructor(private mallService: MallService) {
    this.getMallDetails();
  }

  register(registerForm: NgForm) {
    this.mallService.registerMall(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getMallDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getMallDetails() {
    this.mallService.getMalls().subscribe(
      (resp) => {
        console.log(resp);
        this.mallDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  mallDetails = null as any;

  deleteMall(mall: any) {
    this.mallService.deleteMall(mall.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getMallDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  mallToUpdate = {
    id: null as any,
    name: "",
    location: "",
    numberOfShops: 0
  };

  edit(mall: any) {
    this.mallToUpdate = { ...mall };
  }

  updateMall() {
    this.mallService.updateMall(this.mallToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getMallDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
