import { createContext,useContext,useEffect,useState,type ReactNode } from 'react';
import { products } from './data';
export const money=(value:number)=>new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'}).format(value);
export type BagItem={key:string;productId:string;quantity:number;note:string};
const known=(id:unknown)=>typeof id==='string'&&products.some(p=>p.id===id);
function restoreBag():BagItem[]{try{const saved=JSON.parse(localStorage.getItem('hp-bag')||'[]');if(!Array.isArray(saved))return [];return saved.filter(i=>i&&known(i.productId)&&Number.isInteger(i.quantity)&&i.quantity>0&&i.quantity<=20&&typeof i.note==='string'&&i.note.length<=80).map(i=>({...i,key:JSON.stringify([i.productId,i.note])}));}catch{return [];}}
function restoreWish():string[]{try{const saved=JSON.parse(localStorage.getItem('hp-wishlist')||'[]');return Array.isArray(saved)?[...new Set(saved.filter(known))] as string[]:[];}catch{return [];}}
type Store={bag:BagItem[];wishlist:string[];message:string;count:number;subtotal:number;add:(id:string,quantity?:number,note?:string)=>void;change:(key:string,quantity:number)=>void;remove:(key:string)=>void;toggle:(id:string)=>void;announce:(message:string)=>void};
const Context=createContext<Store|null>(null);
export function StoreProvider({children}:{children:ReactNode}){
 const [bag,setBag]=useState(restoreBag);const [wishlist,setWishlist]=useState(restoreWish);const [message,setMessage]=useState('');
 useEffect(()=>{try{localStorage.setItem('hp-bag',JSON.stringify(bag));}catch{}},[bag]);
 useEffect(()=>{try{localStorage.setItem('hp-wishlist',JSON.stringify(wishlist));}catch{}},[wishlist]);
 useEffect(()=>{if(message){const timer=setTimeout(()=>setMessage(''),3500);return ()=>clearTimeout(timer);}},[message]);
 const add=(id:string,quantity=1,note='')=>{if(!known(id))return;const cleanNote=note.trim().slice(0,80);const key=JSON.stringify([id,cleanNote]);setBag(items=>{const previous=items.find(i=>i.key===key);return previous?items.map(i=>i.key===key?{...i,quantity:Math.min(20,i.quantity+Math.max(1,quantity))}:i):[...items,{key,productId:id,quantity:Math.min(20,Math.max(1,quantity)),note:cleanNote}];});setMessage(`${products.find(p=>p.id===id)!.name} added to your bag.`);};
 const change=(key:string,quantity:number)=>setBag(items=>items.map(i=>i.key===key?{...i,quantity:Math.min(20,Math.max(1,quantity))}:i));
 const remove=(key:string)=>{setBag(items=>items.filter(i=>i.key!==key));setMessage('Plushie removed from your bag.');};
 const toggle=(id:string)=>{if(!known(id))return;setWishlist(items=>items.includes(id)?items.filter(i=>i!==id):[...items,id]);setMessage(wishlist.includes(id)?'Removed from your favourites.':'Saved to your favourites.');};
 const count=bag.reduce((n,i)=>n+i.quantity,0);const subtotal=bag.reduce((n,i)=>n+Math.round(products.find(p=>p.id===i.productId)!.price*100)*i.quantity,0)/100;
 return <Context.Provider value={{bag,wishlist,message,count,subtotal,add,change,remove,toggle,announce:setMessage}}>{children}</Context.Provider>;
}
export function useStore(){const state=useContext(Context);if(!state)throw Error('Missing storefront provider');return state;}
