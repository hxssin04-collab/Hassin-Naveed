import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components';
import { HomePage, BuilderPage } from './home';
import { ShopPage, CollectionsPage, CollectionPage, ProductPage, WishlistPage } from './shop';
import { BagPage, CheckoutPage } from './commerce';
import { AboutPage, JournalPage, ArticlePage, InfoPage, AccountPage, NotFoundPage } from './editorial';
import { StoreProvider, useStore } from './store';
function RouteBehaviour(){const location=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});const heading=document.querySelector<HTMLElement>('main h1');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});document.title=`${heading.textContent?.trim()} | Hijabi Plushies`;}},[location.pathname]);return null;}
function Toast(){const {message}=useStore();return <div className={`toast ${message?'visible':''}`} role="status" aria-live="polite">{message}</div>;}
function Site(){return <><a className="skip-link" href="#main-content">Skip to content</a><Header/><main id="main-content"><Routes><Route path="/" element={<HomePage/>}/><Route path="/shop" element={<ShopPage/>}/><Route path="/collections" element={<CollectionsPage/>}/><Route path="/collections/:slug" element={<CollectionPage/>}/><Route path="/product/:slug" element={<ProductPage/>}/><Route path="/build-your-own" element={<BuilderPage/>}/><Route path="/wishlist" element={<WishlistPage/>}/><Route path="/bag" element={<BagPage/>}/><Route path="/checkout" element={<CheckoutPage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/journal" element={<JournalPage/>}/><Route path="/journal/:slug" element={<ArticlePage/>}/><Route path="/info/:slug" element={<InfoPage/>}/><Route path="/account" element={<AccountPage/>}/><Route path="*" element={<NotFoundPage/>}/></Routes></main><Footer/><Toast/><RouteBehaviour/></>;}
export default function App(){return <StoreProvider><Site/></StoreProvider>;}
