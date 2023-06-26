import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  render() {
    return (
    <div>
    <customizable-button
      buttonText="Click Me"
      onButtonClick={() => {
        console.log('Button clicked!');
      }}>
    </customizable-button>
    <br />
    <customizable-button background-color="#007bff" text-color="#ffffff" font-size="16px" border-radius="4px" button-text="Click me!"  onButtonClick={() => {
        console.log('Button clicked!');
      }}></customizable-button>
    <br />
    <customizable-button
      background-color="#007bff"
      text-color="#ffffff"
      font-size="16px"
      border-radius="4px"
      button-text="Click me!"
      icon="https://www.svgrepo.com/show/58365/faq.svg"
      onButtonClick={() => {
        console.log('Button clicked!');
      }}
    ></customizable-button>
    <br />
    <customizable-button 
      button-text="Click me!" 
      icon="https://www.svgrepo.com/show/58365/faq.svg" 
      icon-right="true"
      onButtonClick={() => {
          console.log('Button clicked!');
        }}></customizable-button> 
    <br />
    <customizable-button 
      button-text="Click me!" 
      icon="https://www.svgrepo.com/show/58365/faq.svg" 
      onButtonClick={() => {
        console.log('Button clicked!');
      }} ></customizable-button> 
    <br />
    <customizable-button 
      icon="https://www.svgrepo.com/show/58365/faq.svg"    
      onButtonClick={() => {
        console.log('Button clicked!');
      }}></customizable-button>
    </div>
    );
  }
}
