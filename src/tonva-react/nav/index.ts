import { Web } from 'tonva-core';
import { Nav } from './Nav';
//import { NavView } from './NavView';

export let nav: Nav; // = new Nav();
export function initNav(web: Web) {
    nav = new Nav(web);
}
/*
export class TonvaView extends NavView {

}
*/
export * from './Nav';
export * from './NavView';
