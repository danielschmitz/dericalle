import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from "../../../layout/component/logo";

@Component({
    selector: 'footer-widget',
    imports: [RouterModule, LogoComponent],
    template: `
        <div class="py-12 px-12 mx-0 mt-20 lg:mx-20">
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-2">
                    <a (click)="router.navigate(['/pages/landing'], { fragment: 'home' })" class="flex flex-wrap items-center justify-center md:justify-start md:mb-0 mb-6 cursor-pointer">
                      <app-logo/>
                        <h4 class="font-medium text-3xl text-surface-900 dark:text-surface-0"></h4>
                    </a>
                </div>

                <div class="col-span-12 md:col-span-10">
                    <div class="grid grid-cols-12 gap-8 text-center md:text-left">
                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Empresa</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Sobre Nós</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Notícias</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Relações com Investidores</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Carreiras</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Kit de Mídia</a>
                        </div>

                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Recursos</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Começar</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Aprender</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Casos de Sucesso</a>
                        </div>

                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Comunidade</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Discord</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Eventos<img src="https://primefaces.org/cdn/templates/sakai/landing/new-badge.svg" alt="badge" class="ml-2" /></a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">FAQ</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Blog</a>
                        </div>

                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Legal</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Política da Marca</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Política de Privacidade</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Termos de Serviço</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class FooterWidget {
    constructor(public router: Router) {}
}
