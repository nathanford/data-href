data-href
=========

A quick bit of JavaScript to let you define an href on any element. This vanilla JS is library agnostic, and will degrade gracefully so long as your content also has a link to the desired URL.

Integrating with your HTML is simple: copy the script into your JS, and then add a “data-href” attribute to any element, pointing to the desired URL. For example:

<article data-href="/content-page">

  <h1><a href="/content-page">Headline goes here.</a></h1>
  <p>And here goes a bit of copy about the content of the article.</p>
  
  <small>Tags: <a href="/tags/content">content</a>, <a href="/tags/headlines">headlines</a></small>

</article>

Priority will be given to any nested link’s href. So, if you click an element with a data-href, you go to the data-href URL; if you click a link inside of that element, you go to the URL on that link.

Demo here: 
