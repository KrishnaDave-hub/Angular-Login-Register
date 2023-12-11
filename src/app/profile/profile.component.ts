import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedFile: File | null = null;
  selectedFileUrl!: string | ArrayBuffer | null;

  constructor() { }
  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.selectedFileUrl = e.target?.result as string;
        }
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
