# customizable-button

The customizable-button component is a versatile button that allows for easy customization of its appearance. It provides properties to customize the button's background color, text color, font size, border radius, and more. It also supports adding an icon to the button.

## Installation

To use the customizable-button component in your Stencil project, follow these steps:

1- Install the component using npm:

  npm install customizable-button

2- Import the component in your Stencil component or application:

  import { Component, h } from '@stencil/core';
  import 'customizable-button';

3- Use the component in your JSX code:

<customizable-button
  background-color="#007bff"
  text-color="#ffffff"
  font-size="16px"
  border-radius="4px"
  button-text="Click me!"
></customizable-button>


## Properties

The customizable-button component exposes the following properties for customization:

| Property          | Attribute          | Description                                                                  |
| ----------------- | ------------------ | ---------------------------------------------------------------------------- |
| `backgroundColor` | `background-color` | 	The background color of the button. |
| `textColor` | `text-color` | 		The text color of the button.|
| `fontSize` | `font-size` | 		The font size of the button text.|
| `borderRadius` | `border-radius` | 		The border radius of the button.|
| `textDecoration` | `text-decoration` | 		The text decoration style of the button text (e.g., "underline", "none").|
| `paddingBottom` | `padding-bottom` | 		The bottom padding of the button.|
| `paddingLeft` | `padding-left` | 		The left padding of the button.|
| `paddingRight` | `padding-right` | 		The right padding of the button.|
| `paddingTop` | `padding-top` | 		The top padding of the button.|
| `fontFamily` | `font-family` | 		The font family of the button text.|
| `fontWeight` | `font-weight` | 		The font weight of the button text.|
| `lineHeight` | `line-height` | 		The line height of the button text.|
| `border` | `border` | 		The border style of the button.|
| `buttonText` | `button-text` | 		The text to be displayed on the button.|
| `icon` | `icon` | 		The URL or path of the icon image to be displayed on the button.|
| `iconRight` | `icon-right` | 		Determines whether the icon should be positioned to the right of the button.|


## Events

The customizable-button component emits the following event:

| Event         | Description         |
| ------------- | ------------------- |
| `buttonClick` | `CustomEvent<void>` |

You can listen for the buttonClick event using the addEventListener method or by using the event binding syntax in your Stencil component or application.

// Listening for the buttonClick event
document.querySelector('customizable-button').addEventListener('buttonClick', () => {
  console.log('Button clicked!');
});

<!-- Event binding syntax -->
<customizable-button onButtonClick={() => handleButtonClick()}></customizable-button>

## Styling
The customizable-button component can be styled using CSS. You can define custom styles in the customizable-button.css file or use CSS variables to apply dynamic styles.

## CSS Variables

The following CSS variables can be used to customize the button's appearance:

| CSS Variable  | 	Description   | 
| ------------- | ------------------- |
| `--button-background-color` | 	Background color of the button. |
| `--button-text-color` | 	Text color of the button. |
| `--button-font-size` | 	Font size of the button text. |
| `--button-border-radius`   | 	Border radius of the button. |
| `--button-text-decoration` | 	Text decoration style of the button text. |
| `--button-padding-bottom`  | 	Bottom padding of the button. |
| `--button-padding-left`    | 	Left padding of the button. |
| `--button-padding-right`   | 	Right padding of the button. |
| `--button-padding-top`     | 	Top padding of the button. |
| `--button-font-family`     | 	Font family of the button text. |
| `--button-font-weight`     | 	Font weight of the button text. |
| `--button-line-height`     | 	Line height of the button text. |
| `--button-border` | 	Border style of the button. |


You can define these CSS variables in your own CSS files or inline styles to customize the button's appearance.

*Built with [StencilJS](https://stenciljs.com/)*
