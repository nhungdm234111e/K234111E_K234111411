import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  student_id: string="K234111411"
  student_name: string="DANG MAI NHUNG"
  student_email: string="nhungdm234111411@st.uel.edu.vn"
  my_img="assets/customer1.png"
}