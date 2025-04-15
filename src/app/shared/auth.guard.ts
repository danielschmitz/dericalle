import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

// Guard para redirecionar usuários logados para o dashboard
export const redirectLoggedInToDashboard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  // Se o usuário estiver logado, redireciona para o dashboard
  if (authService.isLogged()) {
    return router.navigateByUrl('/');
  }
  
  // Se não estiver logado, permite o acesso à landing page
  return true;
};

// Guard para proteger rotas que exigem autenticação
export const requireAuth: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  // Se o usuário não estiver logado, redireciona para a landing page
  if (!authService.isLogged()) {
    return router.navigateByUrl('/landing');
  }
  
  // Se estiver logado, permite o acesso à rota protegida
  return true;
};
