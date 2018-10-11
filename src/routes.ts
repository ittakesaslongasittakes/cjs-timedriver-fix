import { Pages } from './components/Pages';

export interface RouteValue {
    component: any;
    scope: string;
}
export interface Routes {
    readonly [index: string]: RouteValue;
}

const scope = 'app';

export const routes: Routes = {
    '/': { component: Pages.Index, scope }
};
