# React Web Store

[Live Preview](https://shopping-cart-sepia-eight.vercel.app/)

Fashion Store I made from scratch using React.

Primary technologies used:
• React.js
• React Router
• CSS

Other technologies/tools used:
• Vite
• Prettier
• ESLint

I'm really happy with this project!

The design itself is heavily inspired on Louis Vuitton's website (on Dec 2023).

There are a couple of things I want to change/implement eventually such as:
• Make it so that the Header doesn't re-render everytime the content of the page changes. I planned this from the beginning but I ran into the problem of the Header not being able to redirect to the different contents because it was outside the RouterProvider so - the workaround was to render the Header everytime the page changes but this of course is not ideal. I investigated and I should be able to fix this with Layout Routes.
• Make use of :product-name (in Routes) or something of that sort for the url path of each product in ProductDetail. Currently, the URL for each product is the same but the content changes based on the selected Product.
• Create tests (sorry)
