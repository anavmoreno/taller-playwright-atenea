import {test, expect} from 'playwright/test';

test('TC-1 Verificacion de elementos visuales en la pagina de registro', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('input[name="firstName"]')).toBeVisible(); 
  await expect(page.locator('input[name="lastName"]')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.locator('input[name="password"]')).toBeVisible(); 
  await expect(page.getByTestId('boton-registrarse')).toBeVisible();
  await page.waitForTimeout(5000);

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/React/);
});
test('TC-2 Verificar botón de registro esta inhabilitado por defecto', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByTestId('boton-registrarse')).toBeDisabled();
})

test('TC-3 Verificar botón de registro se habilite cuando al completar los campos obligatorios', async ({page}) => {
  await page.goto('http://localhost:3000');
  await page.locator('input[name="firstName"]').fill('Ana');
  await page.locator('input[name="lastName"]').fill('Moreno');
  await page.locator('input[name="email"]').fill('ana@gmail.com');
  await page.locator('input[name="password"]').fill('123');
  await expect(page.getByTestId('boton-registrarse')).toBeEnabled();

});
test('TC-4 Verificar redireccionamiento', async ({page}) =>{
});