data-href
=========

A quick bit of JavaScript to let you define an href on any element. This vanilla JS is library agnostic, and will degrade gracefully so long as your content also has a link to the desired URL. I built this because the HTML5 spec states that while you can use block-level anchors, you still [cannot nest an anchor within an anchor](http://dev.w3.org/html5/markup/a.html). This makes the tag links in the pattern below invalid. So I thought it might be fun to resurrect a feature of XHTML2 that I really liked – [adding an href to any element](http://xhtml.com/en/future/x-html-5-versus-xhtml-2/#x2-cool-hyperlink).

## Using data-href

Integrating with your HTML is simple: copy the script into your JS, and then add a “data-href” attribute to any element, pointing to the desired URL. For example:

`<article data-href="/content-page">

  <h1><a href="/content-page">Headline goes here.</a></h1>
  <p>And here goes a bit of copy about the content of the article.</p>
  
  <small>Tags: <a href="/tags/content">content</a>, <a href="/tags/headlines">headlines</a></small>

</article>`

Priority will be given to any nested link’s href. So, if you click an element with a data-href, you go to the data-href URL; if you click a link inside of that element, you go to the URL on that link.

Demo here: http://nathanford.github.io/data-href

_Please note:_ This is an enhancement. You should still provide a regular anchor link to your content somewhere in the element. In the example, the H1 still links to the content-page, and would work fine even if JavaScript was turned off.