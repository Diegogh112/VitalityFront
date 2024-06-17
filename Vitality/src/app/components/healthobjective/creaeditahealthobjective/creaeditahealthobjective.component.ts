import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { HealthObjective } from '../../../models/healthobjective';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HealthobjectiveService } from '../../../services/healthobjective.service';
import { Router,RouterLink } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { Users } from '../../../models/users';

@Component({
  selector: 'app-creaeditahealthobjective',
  standalone: true,
  imports: [CommonModule,
    NgIf,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterLink],
  templateUrl: './creaeditahealthobjective.component.html',
  styleUrl: './creaeditahealthobjective.component.css'
})
export class CreaeditahealthobjectiveComponent {
  form: FormGroup = new FormGroup({});
  health: HealthObjective = new HealthObjective();
  listausers: Users[] = [];


  constructor(
    private hS: HealthobjectiveService,
    private router: Router,
    private formBuilder: FormBuilder,
    private uS: UsersService
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tipo: ['', Validators.required],
      user: ['', Validators.required],
    });
    this.uS.list().subscribe((data) => {
      this.listausers = data;
    });
  }
  aceptar(): void {
    if (this.form.valid ) {
      this.health.typeObjective = this.form.value.tipo;
      this.health.user= this.form.value.user;
      this.hS.insert(this.health).subscribe((data) => {
        this.hS.list().subscribe((data) => {
          this.hS.setList(data);
        });
      });

      this.router.navigate(['objetivo-de-salud']);
    }
  }
}