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
import { Routes } from '@angular/router';
import { segGuard } from './guard/seguridad.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReportsComponent } from './components/reports/reports.component';
import { Reportdiego2Component } from './components/reports/reportdiego2/reportdiego2.component';
import { Reportmaria1Component } from './components/reports/reportmaria1/reportmaria1.component';
import { Reportmaria2Component } from './components/reports/reportmaria2/reportmaria2.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },


  {
    path: 'categorias',
    component: CategoryComponent,
    children: [
      {
        path: 'nuevo',
        component: CreaeditacategoryComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreaeditacategoryComponent,
      }
    ],
    canActivate: [segGuard],
  },

    {
      path: 'recomendaciones',
      component: RecommendationComponent,
      children: [
        {
          path: 'nuevo',
          component: CreaeditarecommendationComponent,
        },
        {
          path: 'ediciones/:id',
          component: CreaeditarecommendationComponent,
        }
      ],
      canActivate: [segGuard],
    },

    
    {
        path: 'Respuesta',
        component: AnswerComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditaanswerComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditaanswerComponent,
          }
        ],
        canActivate: [segGuard],
    },


    
    {
        path: 'Objetivo-de-salud',
        component: HealthobjectiveComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditahealthobjectiveComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditahealthobjectiveComponent,
          }
        ],
        canActivate: [segGuard],
    },


    
    {
        path: 'seguimiento',
        component: MonitoringComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditamonitoringComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditamonitoringComponent,
          }
        ],
        canActivate: [segGuard],
    },


    
    {
        path: 'productos',
        component: ProductComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditaproductComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditaproductComponent,
          }
        ],
        canActivate: [segGuard],
    },


    
    {
        path: 'preguntas',
        component: QuestionComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditaquestionComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditaquestionComponent,
          }
        ],
        canActivate: [segGuard],
    },


    
    {
        path: 'resenias',
        component: ReviewComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditareviewComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditareviewComponent,
          }
        ],
        canActivate: [segGuard],
    },


    
    {
        path: 'roles',
        component: RoleComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditaroleComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditaroleComponent,
          }
        ],
        canActivate: [segGuard],
    },


    
    {
        path: 'compras',
        component: ShoppingComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditashoppingComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditashoppingComponent,
          }
        ],
        canActivate: [segGuard],
    },


    
    {
        path: 'detallesCompra',
        component: ShoppingdetailComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditashoppingdetailComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditashoppingdetailComponent,
          }
        ],
        canActivate: [segGuard],
    },


    
    {
        path: 'especialidades',
        component: SpecialityComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditaspecialityComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditaspecialityComponent,
          }
        ],
        canActivate: [segGuard],
    },


    
    {
        path: 'usuarios',
        component: UsersComponent,
        children: [
          {
            path: 'nuevo',
            component: CreaeditausersComponent,
          },
          {
            path: 'ediciones/:id',
            component: CreaeditausersComponent,
          }
        ],
        canActivate: [segGuard],
    },
    {
      path: 'reportes',
      component: ReportsComponent,
      children: [
        {
          path: 'reportediego2',
          component: Reportdiego2Component,
        },
        {
          path: 'reportemaria1',
          component: Reportmaria1Component,
        },
        {
          path: 'reportemaria2',
          component: Reportmaria2Component,
        },
      ],
    },

    {
      path: 'homes',
      component: HomeComponent,
      canActivate: [segGuard], // solo construcciones, se debe agregar a cada uno
    },

  ];
  