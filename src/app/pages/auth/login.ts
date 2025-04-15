import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { AuthService } from '../../shared/auth.service';
import { finalize } from 'rxjs';
import { LogoComponent } from "../../layout/component/logo";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    RouterModule,
    RippleModule,
    AppFloatingConfigurator,
    LogoComponent
],
    template: `
        <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="flex flex-col justify-center items-center mb-8">
                            <app-logo width="200px"></app-logo>
                            <span class="text-muted-color font-medium">Faça o login para continuar</span>
                        </div>
                        <form [formGroup]="loginForm" (ngSubmit)="onSignInClick()">
                            <div>
                                <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                                <input 
                                    pInputText 
                                    id="email1" 
                                    type="text" 
                                    placeholder="Email address" 
                                    class="w-full md:w-[30rem] mb-8" 
                                    formControlName="email" />

                                <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">
                                    Senha
                                </label>
                                <p-password 
                                    id="password1" 
                                    formControlName="password" 
                                    placeholder="Password" 
                                    [toggleMask]="true" 
                                    styleClass="mb-4" 
                                    [fluid]="true" 
                                    [feedback]="false">
                                </p-password>

                                <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                                    <div class="flex items-center">
                                        <p-checkbox 
                                            formControlName="rememberMe" 
                                            id="rememberme1" 
                                            binary 
                                            class="mr-2">
                                        </p-checkbox>
                                        <label for="rememberme1">Lembrar</label>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center text-center gap-4">
                                    <p-button 
                                        label="Login" 
                                        styleClass="w-full"
                                        [loading]="loading" 
                                        type="submit">
                                    </p-button>
                                    <a href="/auth/register" class="text-primary">Ainda não tem uma conta?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Login {
    loginForm: FormGroup;
    auth = inject(AuthService);
    router = inject(Router);
    loading = false;

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['user1@email.com', [
                Validators.required,
                Validators.email
            ]],
            password: ['123456', Validators.required],
            rememberMe: [true]
        });
    }

    onSignInClick() {
        if (this.loginForm.valid) {
            this.loading = true;
            this.auth
                .login(
                    this.loginForm.get('email')?.value,
                    this.loginForm.get('password')?.value,
                    null)
                .pipe(
                    finalize(() => {
                        this.loading = false;
                    })
                )
                .subscribe({
                    next: (user) => {
                        console.log({ user });
                        this.router.navigate(['/']);
                        //this.snak.open('Login realizado com sucesso');
                    },
                    error: (error) => {
                        console.error(error);
                        //this.snak.open(error.error.message);
                    },
                });
        }
    }
}
