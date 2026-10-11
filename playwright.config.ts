import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir:'./tests', timeout:60000, expect:{timeout:7000}, fullyParallel:true,
  workers:3, retries:0, reporter:[['list'],['html',{open:'never'}],['json',{outputFile:'test-results/results.json'}]],
  use:{baseURL:'http://127.0.0.1:5173',headless:true,trace:'retain-on-failure',screenshot:'only-on-failure',launchOptions:{executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']}},
  projects:[
    {name:'desktop',testMatch:'storefront.spec.ts',use:{viewport:{width:1440,height:900}}},
    {name:'mobile',testMatch:'storefront.spec.ts',use:{viewport:{width:390,height:844},isMobile:true,hasTouch:true}},
    {name:'responsive',testMatch:'responsive.spec.ts',use:{viewport:{width:1440,height:900}}}
  ],
  webServer:{command:'npm run dev -- --port 5173',url:'http://127.0.0.1:5173',reuseExistingServer:!process.env.CI,timeout:30000}
});
