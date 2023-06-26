import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import '../../assets/tokens.css'; 

@Component({
  tag: 'customizable-button',
  styleUrl: 'customizable-button.css',
  shadow: true,
})
export class CustomizableButton {
  @Prop() backgroundColor: string;
  @Prop() textColor: string;
  @Prop() fontSize: string;
  @Prop() borderRadius: string;
  @Prop() textDecoration: string;
  @Prop() paddingBottom: string;
  @Prop() paddingLeft: string;
  @Prop() paddingRight:string;
  @Prop() paddingTop: string;
  @Prop() fontFamily: string;
  @Prop() fontWeight: string;
  @Prop() lineHeight: string;
  @Prop() border: string;  
  @Prop() buttonText: string;
  @Prop() icon: string;
  @Prop() iconRight: boolean;

  @Event() buttonClick: EventEmitter<void>;

  handleClick() {
    this.buttonClick.emit();
  }

  render() {
    const buttonStyle = {
      backgroundColor: this.backgroundColor,
      color: this.textColor,
      fontSize: this.fontSize,
      borderRadius: this.borderRadius,
      textDecoration: this.textDecoration,
      paddingBottom: this.paddingBottom,
      paddingLeft: this.paddingLeft,
      paddingRight:this.paddingRight,
      paddingTop: this.paddingTop,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      lineHeight: this.lineHeight,
      border: this.border,  
    };

    return (
      <button style={buttonStyle} onClick={() => this.handleClick()}>
         {this.iconRight && this.buttonText && (<span class="button-text">{this.buttonText}</span>)}
        {this.icon && (
          <img class="button-icon"src={this.icon} alt={this.icon} />
        )}
        {!this.iconRight && this.buttonText && (<span class="button-text">{this.buttonText}</span>)}
      </button>
    );
  }
}

