# React Web Store

[Live Preview](https://shopping-cart-sepia-eight.vercel.app/)

![desktop](https://github.com/johnnynava/shopping-cart/assets/137064281/bdb1807c-9098-4205-9ba6-9324003914d3)


Fashion Store I made from scratch using React.

## Primary technologies used
• React.js
<br>
• React Router
<br>
• CSS

## Other technologies/tools used
• Vite
<br>
• Prettier
<br>
• ESLint

## Comments

I'm really happy with this project!
<br>
<br>
The design itself is heavily inspired on Louis Vuitton's website (on Dec 2023).
<br>
<br>
There are a couple of things I want to change/implement eventually such as:
<br>
• Make it so that the Header doesn't re-render everytime the content of the page changes. I planned this from the beginning but I ran into the problem of the Header not being able to redirect to the different contents because it was outside the RouterProvider so - the workaround was to render the Header everytime the page changes but this of course is not ideal. I investigated and I should be able to fix this with Layout Routes.
<br>
• Make use of :product-name (in Routes) or something of that sort for the url path of each product in ProductDetail. Currently, the URL for each product is the same but the content changes based on the selected Product.
<br>
• Create tests (💀)
