import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { redirectLoggedInToDashboard, requireAuth } from './app/shared/auth.guard';

export const appRoutes: Routes = [
    { path: 'landing', component: Landing, canActivate: [redirectLoggedInToDashboard] },
    {
        path: '',
        component: AppLayout,
        canActivate: [requireAuth],
        children: [
            { path: '', component: Dashboard },
            { path: 'categories', loadComponent: () => import('./app/pages/categories/categories.component').then(c => c.CategoriesComponent)},
            { path: 'categories/create', loadComponent: () => import('./app/pages/categories/create/create-category.component').then(c => c.CreateCategoryComponent)},
            { path: 'categories/edit/:id', loadComponent: () => import('./app/pages/categories/edit/edit-category.component').then(c => c.EditCategoryComponent)},
            { path: 'tasks', loadComponent: () => import('./app/pages/tasks/tasks.component').then(c => c.TasksComponent)},
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
