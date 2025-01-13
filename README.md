<!DOCTYPE html>
<html>
<head>
  <mata charset="UTF-8"></mata>
  <meta name="viewport" content="width=device-width, initial-scale=1">
 </head>
<body>
<h1>Live Project</h1>
<br>
<h2>Introduction</h2>
<p>My time at the Tech Academy included an internship with Prosper IT Consulting, during which I 
participated in a 2-week sprint.
 This hands-on experience included Agile/Scrum practices including:  
 participating in daily stand-ups, a sprint retrospective, and using Azure DevOps to complete stories. 
 I was tasked with creating a “Lifestyle” brand website that’s meant to focus on an area’s food scene. 
 During this project, I used HTML, CSS, and JavaScript techniques learned through coursework. 
 I then expanded my knowledge by taking on new web-development concepts for this apprenticeship. 
 I finished the first project three days ahead of schedule and was assigned a second project called "Cookery."

Below you will find two sections of stories for the projects I worked on. This first is for the LifeStyle 
website, and the second is for a site called “Cookery”. With each description, you will find sections of 
code, photos and gifs of site elements.

<h2>Front-end Web Development Stories</h2>
LifeStyle (Culinary Guide)<br>
Cookery
<br>
<br>
<h2> LifeStyle Stories</h2>
Creating Your Component<br>
Implement a grid system<br>
Create a signup form<br>
Back To Top Button<br>
Creating a Dark Theme<br>
Make your Page Responsive<br>
Create an Animation Feature
<br>
<br>
<h2>Creating Your Component</h2>
In this story, I set up the basics of the website. I created component folders for style and script files, and images for the site.  Then I laid out my landing page with basic HTML which included:
Meta data, links to Bootstrap, CSS stylesheet, JavaScript, etc.
Body with navbar, footer, and background color. 
Hero Banner / Header photo with text overlay 

<h2>Implement a grid system</h2>
In this story, I created a grid layout using Bootstrap. I added basic content to my layout, including three carousels on the same row. I also added a smooth scrolling effect to the page. 
<br><br>
<img src="LifeStyle-Restaurant-Samples/Misc/Mobile-Light.png">

<h2>Create a signup form</h2>
Here I created a working popup contact form using Formspree. It sits at the bottom of the page in the footer and was styled using Bootstrap and CSS properties. I also implemented JavaScript to prevent Formspree from loading a new page once the submit button is clicked. <br><br>
<img src="LifeStyle-Restaurant-Samples/Contact Form/StopFormspreePage-JS.png" width="500" height="500">

<h2>Back To Top Button</h2>
I was then tasked with creating a “back to top” button that sits fixed on the screen so when you scroll, the button will not move.  This task required the use of a Javascript function that gets called when the button is clicked and moves the user back to the top of the page. This also has a second function that gets called when the scroll bar moves. It uses console.log inside the function to test that it's getting called.  It also includes a logic statement to show the button when the scroll bar is at the bottom of the page, otherwise it remains hidden. 

<h2>Creating a Dark Theme</h2>
This story is the one I found most challenging. I struggled to get dark mode to apply to all elements at the same time. Eventually I realized I was grouping too many elements together in CSS, which was preventing dark mode from being applied to them. Once this was resolved, all elements added after this point easily had dark mode applied. 

<h2>Make your Page Responsive</h2>
In this story I worked on making my page responsive so it is viewable on other devices like tablets, phones. In addition to what Bootstrap already had implemented, I added CSS media queries for various elements that would not have been included or had stylings overwritten. This is where I learned which parts of the site were not as responsive as I initially thought. For example, when viewed on smaller screen sizes, my navbar began to cut off part of my “header” text. I then went back to check both the navbar and header container to see where the problems are and adjust accordingly. 
<br>
<br>
<img src="LifeStyle-Restaurant-Samples/Navbar and mobile menu/Navbar-CSS.png" width="500" height="500">

This is also where I built and refined my mobile menu. Originally it was taking up the whole page, but after reading up on mobile menu design “best practices”, I reduced the width so the user can partially see where they are on the page. <br><br>
<img src="LifeStyle-Restaurant-Samples/Navbar and mobile menu/MobileMenu-CSS-Pt1.png" width="300" height="300">
<img src="LifeStyle-Restaurant-Samples/Navbar and mobile menu/MobileMenu-CSS-Pt2.png" width="300" height="300">
<img src="LifeStyle-Restaurant-Samples/Navbar and mobile menu/MobileMenu-Dark.png" width="163" height="300"><br>
<h2>Create an Animation Feature</h2>
Here I created a basic text animation using HTML & CSS. <br><br>
<img src="LifeStyle-Restaurant-Samples/Header Text Animation/TextAnimation.gif">
<br>
<br>
<h2>Cookery Stories</h2>
Create CSS Variables & Import Google Font API’s<br>
Create a Navigation Menu<br>
Change Mobile Menu Icon<br>
Add Hover Trigger – Food Dropdown Menu<br>
Update Navigation Text Color<br>
Create Hero Banner<br>
Navigation Bar Sticky & Shrink On-Scroll<br>
Search Bar Creation & Placement (Non-working)<br>
Create Featured Recipe Section<br>
Update Featured Recipe<br>
<br>
<br>
<h2>Create CSS Variables & Import Google Font API’s</h2>
This story involved researching and then creating root variables for CSS. I was excited to learn more about this as we briefly went over it in classwork and I then encountered it while researching and debugging in the LifeStyle website. We imported fonts from Google Fonts, something I was familiar with since we used it in practice a lot during our CSS drills. 

<h2>Create a Navigation Menu</h2>
Here we had to create a Navigation Menu with a submenu using bootstrap. I then further styled it following the client parameters which included a dropshadow on the navbar, background and text colors, navbar height, font size and weight, and removing the down arrow from the submenu.

<h2>Change Mobile Menu Icon</h2>
This was a simple change the client asked for - changing the color of the mobile menu icon to match the site’s main background color. 

<h2>Add Hover Trigger – Food Dropdown Menu</h2>
This was another client change where they asked to add a hover trigger to the dropdown menu. 

<h2>Update Navigation Text Color</h2>
Here the client wanted the text color on the navigation to change to the main-color  
when they hover their mouse over each link.

<h2>Create Hero Banner</h2>
In this story I created a Hero banner with text to the left of the screen and image to the right. The main parameter  was to have the photo touch the bottom of the Navbar and edge of the page. While I was able to make the visual design work, I struggled with the responsiveness of this element after I implemented the styling changes. 

<h2>Navigation Bar Sticky & Shrink On-Scroll</h2>
Here I ensured the navigation bar stays at the top of the page, but shrinks when the user scrolls down the page. This required the use of Jquery.

<h2>Search Bar Creation & Placement</h2>
In this story I created a non-working recipe search bar. The styling parameters were as follows:
Search bar background color white, opacity 80%
Box shadow 0 0 19 -2 black opacity 25%
This element required creating a second row in the hero banner. To achieve the desired outcome, I worked on the position and negative margins. 

<h2>Create Featured Recipe Section</h2>
The client wanted a featured recipe section that showcased a photo of the finished recipe, a brief description of the recipe, a button to view the recipe, and a bar at the bottom of the recipe car that holds social icons. Here I utilized Bootstrap Cards and Font Awesome. 

<h2>Update Featured Recipe</h2>
In this story update, the client wanted to add a hover effect to the “view recipe” button on the featured recipe card. The background color changes from green to grey when hovered over. 

<h2>Other Skills Learned</h2>
Utilizing Azure DevOps and Git for version control.<br>
Experienced a Scrum environment by participating in daily stand-ups and a sprint retrospective.<br>
Further enhance ability to research unfamiliar concepts and material. <br>
Further enhanced problem-solving skills through identifying and resolving errors.  <br>

</body>
</html>
