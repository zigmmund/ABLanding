import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".benefit"), "85%");
new RevealOnScroll($(".caracteristicas__image"), "80%");
var stickyHeader = new StickyHeader();
