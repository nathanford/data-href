data-href
=========

A quick bit of JavaScript to let you define an href on any element. This vanilla JS is library agnostic, and will degrade gracefully so long as your content also has a link to the desired URL.

Integrating with your HTML is simple: copy the script into your JS, and then add a “data-href” attribute to any element, pointing to the desired URL. For example:

&lt;article data-href="/content-page">

&nbsp;&nbsp;&nbsp;&lt;h1>&lt;a href="/content-page">Headline goes here.&lt;/a>&lt;/h1>

&nbsp;&nbsp;&nbsp;&lt;p>And here goes a bit of copy about the content of the article.&lt;/p>
  
&nbsp;&nbsp;&nbsp;&lt;small>Tags: &lt;a href="/tags/content">content&lt;/a>, &lt;a href="/tags/headlines">headlines&lt;/a>&lt;/small>

&lt;/article>

Priority will be given to any nested link’s href. So, if you click an element with a data-href, you go to the data-href URL; if you click a link inside of that element, you go to the URL on that link.

Demo here: http://nathanford.github.io/data-href
