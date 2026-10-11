import { test,expect } from '@playwright/test';
const routes=['/','/shop','/collections','/collections/arabian','/product/arabian-princess','/build-your-own','/wishlist','/bag','/checkout','/about','/journal','/journal/art-of-embroidery','/info/contact','/info/privacy','/account'];
for(const route of routes)test(`${route} stays within the viewport at five widths`,async({page})=>{
  await page.goto('/product/arabian-princess');await page.getByRole('button',{name:'Add to Bag',exact:true}).click();
  for(const width of [320,390,768,1024,1440]){await page.setViewportSize({width,height:900});await page.goto(route);await expect(page.getByRole('heading',{level:1})).toBeVisible();await page.evaluate(()=>document.fonts.ready);expect(await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth})),`${route} at ${width}px`).toEqual({scroll:width,client:width});}
});
