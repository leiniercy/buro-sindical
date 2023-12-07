// Importar las funciones a probar
import { openMenu, closeMenu, toggleMenu } from './menu';

// Caso de prueba para la función openMenu
test('openMenu should set aria-expanded to true', () => {
  // Configurar el estado inicial
  const button = document.createElement('button');
  button.setAttribute('aria-expanded', 'false');

  // Ejecutar la función a probar
  openMenu(button);

  // Verificar el resultado esperado
  expect(button.getAttribute('aria-expanded')).toBe('true');
});

// Caso de prueba para la función closeMenu
test('closeMenu should set aria-expanded to false', () => {
  // Configurar el estado inicial
  const button = document.createElement('button');
  button.setAttribute('aria-expanded', 'true');

  // Ejecutar la función a probar
  closeMenu(button);

  // Verificar el resultado esperado
  expect(button.getAttribute('aria-expanded')).toBe('false');
});

// Caso de prueba para la función toggleMenu
test('toggleMenu should toggle the value of aria-expanded', () => {
  // Configurar el estado inicial
  const button = document.createElement('button');
  button.setAttribute('aria-expanded', 'false');

  // Ejecutar la función a probar
  toggleMenu(button);

  // Verificar el resultado esperado
  expect(button.getAttribute('aria-expanded')).toBe('true');

  // Ejecutar la función nuevamente
  toggleMenu(button);

  // Verificar el resultado esperado
  expect(button.getAttribute('aria-expanded')).toBe('false');
});