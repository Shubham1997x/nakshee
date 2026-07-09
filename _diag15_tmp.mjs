import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000/collections/dinnerware", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.click("text=1 Issue").catch(()=>{});
await page.waitForTimeout(500);
const text = await page.evaluate(() => {
  const portal = document.querySelector("nextjs-portal");
  if (!portal || !portal.shadowRoot) return "no portal";
  const dialog = portal.shadowRoot.querySelector('[role="dialog"], [data-nextjs-dialog], .nextjs-container-errors-body');
  return dialog ? dialog.textContent : "no dialog, full text len=" + portal.shadowRoot.textContent.length;
});
console.log(text);
await page.screenshot({ path: `${process.argv[2]}/shots/dev-overlay.png` });
await browser.close();
