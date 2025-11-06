import { Routes } from '@angular/router';
import { AdresseComponent } from './components/adresse/adresse';
import { StagiaireComponent } from './components/stagiaire/stagiaire';
import { ValeurCalculeeComponent } from './components/valeur-calculee/valeur-calculee';
import { ObservableComponent } from './components/observable/observable';
import { SubjectComponent } from './components/subject/subject';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { CalculComponent } from './components/calcul/calcul';
import { AddressComponent } from './components/address/address';
import { TraineeComponent } from './components/trainee/trainee';
import { TableauComponent } from './components/tableau/tableau';
import { NotFoundComponent } from './components/not-found/not-found';
import { CycleVieComponent } from './components/cycle-vie/cycle-vie';
import { FormulaireComponent } from './components/formulaire/formulaire';
import { CalculetteComponent } from './components/calculette/calculette';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form';
import { BuilderFormComponent } from './components/builder-form/builder-form';
import { CommentaireComponent } from './components/commentaire/commentaire';
import { PersonneComponent } from './components/personne/personne';
import { PersonneDetailsComponent } from './components/personne-details/personne-details';
import { PereComponent } from './components/pere/pere';
import { PrimeurComponent } from './components/primeur/primeur';
import { ClavierComponent } from './components/clavier/clavier';
import { PaysComponent } from './components/pays/pays';
import { ContainerComponent } from './components/container/container';
import { TchatComponent } from './components/tchat/tchat';
import { AuthComponent } from './components/auth/auth';
import { authGuard } from './guards/auth-guard';
import { CompteurComponent } from './components/compteur/compteur';
import { PanierComponent } from './components/panier/panier';


// Avant Angular 19, app-routing.module.ts

// tableau de mapping : path, component
export const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'about', component: AboutComponent },
    // Avec lazy loading
    { path: 'about', loadComponent: () => import('./components/about/about').then(m => m.AboutComponent) },
    { path: 'calcul/:op', component: CalculComponent },
    { path: 'calculette', component: CalculetteComponent },
    { path: 'tableau/:index', component: TableauComponent },
    { path: 'adresse', component: AdresseComponent, canActivate: [authGuard] },
    { path: 'formulaire', component: FormulaireComponent },
    { path: 'reac-form', component: ReactiveFormComponent },
    { path: 'builder-form', component: BuilderFormComponent },
    { path: 'commentaire', component: CommentaireComponent },
    { path: 'cycle', component: CycleVieComponent },
    { path: 'personne', component: PersonneComponent, canActivate: [authGuard]  },
    { path: 'personne/:id', component: PersonneDetailsComponent, canActivate: [authGuard]  },
    { path: 'address', component: AddressComponent },
    { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
    { path: 'trainee/:nom/:prenom', component: TraineeComponent },
    { path: 'valeur', component: ValeurCalculeeComponent },
    { path: 'value', redirectTo: '/valeur' },
    { path: 'observable', component: ObservableComponent },
    { path: 'subject', component: SubjectComponent },
    // { path: 'not-found', component: NotFoundComponent },
    // // À placer en dernier
    // { path: '**', redirectTo: '/not-found' },
    { path: 'pere', component: PereComponent },
    { path: 'primeur', component: PrimeurComponent },
    { path: 'clavier', component: ClavierComponent },
    { path: 'pays', component: PaysComponent },
    { path: 'container', component: ContainerComponent },
    { path: 'tchat', component: TchatComponent },   
    { path: 'auth', component: AuthComponent },  
    { path: 'compteur', component: CompteurComponent},
    { path: 'panier', component: PanierComponent},
    { path: '**', component: NotFoundComponent },

];
