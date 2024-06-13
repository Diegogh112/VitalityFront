import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from '../../../models/question';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionService } from '../../../services/question.service';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-creaeditaquestion',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ],
  templateUrl: './creaeditaquestion.component.html',
  styleUrl: './creaeditaquestion.component.css'
})
export class CreaeditaquestionComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  question:Question=new Question();
  listaPreguntas: { value: string; viewValue: string }[] = [
    { value: '¿Qué vitaminas son esenciales para mejorar mi sistema inmunológico?', viewValue: '¿Qué vitaminas son esenciales para mejorar mi sistema inmunológico?' },
    { value: '¿Qué suplementos recomiendan para aumentar la energía durante el día?', viewValue: '¿Qué suplementos recomiendan para aumentar la energía durante el día?' },
    { value: '¿Cuál es la mejor proteína para ganar masa muscular rápidamente?', viewValue: '¿Cuál es la mejor proteína para ganar masa muscular rápidamente?' },
    { value: '¿Qué recetas rápidas y fáciles me recomiendas para el desayuno?', viewValue: '¿Qué recetas rápidas y fáciles me recomiendas para el desayuno?' },
    { value: '¿Qué suplemento de vitaminas recomiendan para mejorar la salud de la piel?', viewValue: '¿Qué suplemento de vitaminas recomiendan para mejorar la salud de la piel?' },
    { value: '¿Tienen algún suplemento recomendado para mejorar la concentración y el enfoque?', viewValue: '¿Tienen algún suplemento recomendado para mejorar la concentración y el enfoque?' },
  ];
  constructor (private formBuilder:FormBuilder, private qS:QuestionService, private router: Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      consulta:['',Validators.required]
    })
  }
  aceptar():void{
    if (this.form.valid){this.question.consulta=this.form.value.consulta;
      this.qS.insert(this.question).subscribe((data)=>{
        this.qS.list().subscribe((data)=>{this.qS.setList(data);})});
        this.router.navigate(['preguntas']);
    }
  }
}
