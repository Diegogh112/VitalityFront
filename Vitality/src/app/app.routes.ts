import { Routes } from '@angular/router';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { CreaeditarecommendationComponent } from './components/recommendation/creaeditarecommendation/creaeditarecommendation.component';
import { CategoryComponent } from './components/category/category.component';
import { CreaeditacategoryComponent } from './components/category/creaeditacategory/creaeditacategory.component';
import { AnswerComponent } from './components/answer/answer.component';
import { CreaeditaanswerComponent } from './components/answer/creaeditaanswer/creaeditaanswer.component';
import { HealthobjectiveComponent } from './components/healthobjective/healthobjective.component';
import { CreaeditahealthobjectiveComponent } from './components/healthobjective/creaeditahealthobjective/creaeditahealthobjective.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { CreaeditamonitoringComponent } from './components/monitoring/creaeditamonitoring/creaeditamonitoring.component';
import { ProductComponent } from './components/product/product.component';
import { CreaeditaproductComponent } from './components/product/creaeditaproduct/creaeditaproduct.component';
import { QuestionComponent } from './components/question/question.component';
import { CreaeditaquestionComponent } from './components/question/creaeditaquestion/creaeditaquestion.component';
import { ReviewComponent } from './components/review/review.component';
import { CreaeditareviewComponent } from './components/review/creaeditareview/creaeditareview.component';
import { RoleComponent } from './components/role/role.component';
import { CreaeditaroleComponent } from './components/role/creaeditarole/creaeditarole.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { CreaeditashoppingComponent } from './components/shopping/creaeditashopping/creaeditashopping.component';
import { ShoppingdetailComponent } from './components/shoppingdetail/shoppingdetail.component';
import { CreaeditashoppingdetailComponent } from './components/shoppingdetail/creaeditashoppingdetail/creaeditashoppingdetail.component';
import { SpecialityComponent } from './components/speciality/speciality.component';
import { CreaeditaspecialityComponent } from './components/speciality/creaeditaspeciality/creaeditaspeciality.component';
import { UsersComponent } from './components/users/users.component';
import { CreaeditausersComponent } from './components/users/creaeditausers/creaeditausers.component';

export const routes: Routes = [
  {
    path: 'categorias',
    component: CategoryComponent,
    children: [
      {
        path: 'nuevo',
        component: CreaeditacategoryComponent,
      },
    ],
  },

    {
      path: 'recomendaciones',
      component: RecommendationComponent,
      children: [
        {
          path: 'nuevo',
          component: CreaeditarecommendationComponent,
        },
      ],
    },

    
    {
        path: 'Respuesta',
        component: AnswerComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditaanswerComponent,
          },
        ],
    },


    
    {
        path: 'Objetivo-de-salud',
        component: HealthobjectiveComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditahealthobjectiveComponent,
          },
        ],
    },


    
    {
        path: 'seguimiento',
        component: MonitoringComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditamonitoringComponent,
          },
        ],
    },


    
    {
        path: 'productos',
        component: ProductComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditaproductComponent,
          },
        ],
    },


    
    {
        path: 'preguntas',
        component: QuestionComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditaquestionComponent,
          },
        ],
    },


    
    {
        path: 'resenias',
        component: ReviewComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditareviewComponent,
          },
        ],
    },


    
    {
        path: 'roles',
        component: RoleComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditaroleComponent,
          },
        ],
    },


    
    {
        path: 'compras',
        component: ShoppingComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditashoppingComponent,
          },
        ],
    },


    
    {
        path: 'detallesCompra',
        component: ShoppingdetailComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditashoppingdetailComponent,
          },
        ],
    },


    
    {
        path: 'especialidades',
        component: SpecialityComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditaspecialityComponent,
          },
        ],
    },


    
    {
        path: 'usuarios',
        component: UsersComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditausersComponent,
          },
        ],
    },



  ];
  