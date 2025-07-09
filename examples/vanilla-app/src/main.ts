import { createButton } from 'my-lib/vanilla';
import { generateId, formatNumber, capitalize } from 'my-lib';

// Simple example
function createExample() {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  app.innerHTML = `
    <div class="container">
      <h1>My Library - Vanilla Example</h1>
      <div id="button-example"></div>
      <div id="utility-example"></div>
    </div>
  `;

  // Button example
  const buttonExample = document.getElementById('button-example');
  if (buttonExample) {
    const button = createButton({
      text: 'Click me!',
      color: 'primary',
      onClick: () => alert('Button clicked!')
    });
    buttonExample.appendChild(button);
  }

  // Utility example
  const utilityExample = document.getElementById('utility-example');
  if (utilityExample) {
    utilityExample.innerHTML = `
      <p>ID: ${generateId()}</p>
      <p>Number: ${formatNumber(1234567)}</p>
      <p>Capitalized: ${capitalize('hello world')}</p>
    `;
  }
}

createExample(); 