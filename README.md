# Peacock-animated-button
This is a button hover effect of a peacock using HTML, CSS and JavaScript.

When you hover over the button the peacock will spread its feathers and will lift its head majistically, showing his beautiful appearance to all. Beautiful animation right.

## Usage
To use this button, simply download the zip file or copy the HTML and CSS and paste them into your project. If you want you could optimise the code further and modify it according to your requirements.

It's a long and nested code so I have tried to describe every element using its class name. If you get confused check out the class name of the element.

## Working
There is a square placed over the feather with color as same as the background and its origin is set to bottom right corner so that it rotates from the bottom right corner thus revealing the feathers.

When the mouse cursor hovers over the button a JavaScript code is used to determine when the mouse entered and when the mouse left. The moment the mouse enters the animation is triggered and the square rotates 90deg to the right giving that feather opening animation and the head rotates slightly from the middle to give that head lift effect.

CSS animation code:
```CSS
.hide{
    width: 30rem;
    height: 30rem;
    background-color: var(--background);
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -2;
    transform-origin: bottom right;
    transform: rotate(0deg);
    transition: transform 1.1s ease-in-out;
}

.animate-feather{
    transform: rotate(90deg);
}

.animate-peacock-head{
    transform: rotate(-10deg);
}
```

JavaScript code:
```JS
document.querySelector('.btn').addEventListener('mouseenter', () => {
    document.querySelector('.hide').classList.add('animate-feather')
    document.querySelector('.peacock-head').classList.add('animate-peacock-head')
})
document.querySelector('.btn').addEventListener('mouseleave', () => {
    document.querySelector('.hide').classList.remove('animate-feather')
    document.querySelector('.peacock-head').classList.remove('animate-peacock-head')
})
```

## Preview
https://user-images.githubusercontent.com/80671044/224689157-6bae16c6-5ea9-40ec-8674-406e4675f580.mp4
