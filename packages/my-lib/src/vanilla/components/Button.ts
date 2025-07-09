import { BaseComponentProps, Size, Color } from '../../core';

export interface ButtonProps extends BaseComponentProps {
  text: string;
  size?: Size;
  color?: Color;
  onClick?: () => void;
}

export class Button {
  private element: HTMLButtonElement;
  private props: ButtonProps;

  constructor(props: ButtonProps) {
    this.props = { size: 'md', color: 'primary', ...props };
    this.element = this.createButton();
  }

  private createButton(): HTMLButtonElement {
    const button = document.createElement('button');
    button.textContent = this.props.text;
    button.className = `btn btn-${this.props.size} btn-${this.props.color} ${this.props.className || ''}`;
    
    if (this.props.onClick) {
      button.addEventListener('click', this.props.onClick);
    }

    return button;
  }

  appendTo(parent: HTMLElement): void {
    parent.appendChild(this.element);
  }

  update(newProps: Partial<ButtonProps>): void {
    this.props = { ...this.props, ...newProps };
    this.element.textContent = this.props.text;
    this.element.className = `btn btn-${this.props.size} btn-${this.props.color} ${this.props.className || ''}`;
  }
}

export function createButton(props: ButtonProps): HTMLButtonElement {
  const button = new Button(props);
  return button['element'];
} 