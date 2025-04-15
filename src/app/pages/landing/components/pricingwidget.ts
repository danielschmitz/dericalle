import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'pricing-widget',
    imports: [DividerModule, ButtonModule, RippleModule],
    template: `
        <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
            <div class="text-center mb-6">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Planos Incomparáveis</div>
                <span class="text-muted-color text-2xl">Escolha o plano ideal para o seu negócio</span>
            </div>

            <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Gratuito</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/free.svg" class="w-10/12 mx-auto" alt="gratuito" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">R$0</span>
                                <span class="text-surface-600 dark:text-surface-200">por mês</span>
                            </div>
                            <button pButton pRipple label="Começar Agora" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">1 Funcionário</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">5 clientes</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">5 produtos</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Teste o sistema sem compromisso</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Iniciante</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/startup.svg" class="w-10/12 mx-auto" alt="iniciante" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">R$49</span>
                                <span class="text-surface-600 dark:text-surface-200">por mês</span>
                            </div>
                            <button pButton pRipple label="Começar Agora" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">5 Funcionários</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">100 clientes</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">100 produtos</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Comece aqui o seu negócio de sucesso</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Empresarial</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/enterprise.svg" class="w-10/12 mx-auto" alt="empresarial" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">R$299</span>
                                <span class="text-surface-600 dark:text-surface-200">por mês</span>
                            </div>
                            <button pButton pRipple label="Teste Grátis" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">10 funcionários</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Ilimitados clientes</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Ilimitados produtos</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Expanda seu negócio ao máximo</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class PricingWidget {}
