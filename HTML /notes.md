HTML TUTORIAL 
 
What is HTML? 
HTML is a language for describing web pages. 
 
HTML stands for 
H
yper 
T
ext 
M
arkup 
L
anguage 
 
HTML is not a programming language, it is a 
markup language
 
 
A markup language is a set of 
markup tags
 
 
HTML uses 
markup tags
 to describe web pages 
HTML Tags 
HTML markup tags are us
ually called HTML tags 
 
HTML tags are keywords surrounded by 
angle brackets 
like <html> 
 
HTML tags normally 
come in pairs
 like <b> and </b> 
 
The first tag in a pair is the 
start tag,
 the second tag is the 
end tag
 
 
Start and end tags are also called 
opening tags
 and 
closing tags
 
HTML Documents = Web Pages 
 
HTML documents 
describe web pages
 
 
HTML documents 
contain HTML tags
 and plain text 
 
HTML documents are also 
called web pages
 
The purpose of a web browser (like Internet 
Explorer or Fi refox) is to read HTML 
documents and display them as web pages. 
The browser does not display the HTML tags, 
but uses the tags to interp
ret the content of the page: 
<html> 
<body> 

 

<h1>My First Heading</h1> 
<p>My first paragraph.</p> 
 

</body> 

</html > 

 

 

 

 


Example Explained 
 
The text between <html> and </
html> describes the web page 
 
The text between <body> and </body>
 is the visible page content 
 
The text between <h1> and </h1>
 is displayed as a heading 
 
The text between <p> and </p> 
is displayed as a paragraph 
Editing HTML 
HTML can be written and edited using ma
ny different editors like Dreamweaver and 
Visual Studio. 
However, in this tutorial we use a plain te
xt editor (like Notepad) to edit HTML. We 
believe using a plain text editor 
is the best way to learn HTML. 
.HTM or .HTML File Extension? 
When you save an HTML file, you can use eith
er the .htm or the .html file extension. 
There is no difference; it is entirely up to you. 
HTML Headings 
HTML headings are defined with the <h1> to <h6> tags. 
Example 
<h1>This is a heading</h1> 
<h2>This is a heading</h2> 

<h3>This is a heading</h3>  

 

 

 
 
HTML Paragraphs 
HTML paragraphs are defined with the <p> tag. 
Example 
<p>This is a paragraph.</p> 

<p>This is another paragraph.</p>  

 

 


HTML Links 
HTML links are defined with the <a> tag. 
Example 
<a href="http://www.xitecsoluti
ons.com">This is a link</a>  
Note:
 The link address is specified
 in the href attribute. 
(You will learn about attributes in a 
later chapter of 
this tutorial). 
 
HTML Images 
HTML i mages are de fined with the <img> tag. 
Example 
<img src="xitec.jpg" widt
h="104" height="142" />  
 

Note:
 The name and the size of the image are provided as attributes. 


HTML Elements 
An HTML element is everything from
 the start tag to the end tag: 
Start tag * Element content End tag * 
<p> This is a paragraph </p> 
<a href="default.htm" > This is a link </a> 

<br />     
*
 The start tag is often called the 
opening tag
. The end tag is often called the 
closing tag
. 
 
HTML Element Syntax 
 
An HTML element starts with a 
start tag / opening tag
 
 
An HTML element ends with an 
end tag / closing tag
 
 
The 
element content
 is everything between th
e start and the end tag 
 
Some HTML elements have 
empty content
 
 
Empty elements are 
closed in the start tag
 
 
Most HTML elements can have 
attributes
 
Tip:
 You will learn about attributes in 
the next chapter of this tutorial. 
 
Nested HTML El ements 
Most HTML elements can be nested (can contain other HTML elements). 
HTML documents consist of nested HTML elements. 

 
HTML Document Example 
<html> 
 

<body> 
<p>This is my first paragraph.</p> 
</body> 

 

</html >  


The example above contains 3 HTML elements. 
 
HTML Example Explained 
The <p> element:
 
<p>This is my first paragraph.</p> 
The <p> element defines a paragraph in the HTML document. 
The element has a start tag <p> and an end tag </p>. 
The element content is: This is my first paragraph. 
The <body> element:
 
<body> 
<p>This is my first paragraph.</p> 

</body>  
The <body> element defines the 
body of the HTML document. 
The element has a start tag <body> and an end tag </body>. 
The element content is another HTML element (a p element). 
The <html> element:
 
<html> 
 

<body> 

<p>This is my first paragraph.</p> 

</body> 

 

</html >  
The <html> element defines the whole HTML document. 
The element has a start tag <html> and an end tag </html>. 
The element content is another HTML element (the body element). 
 
Don't Forget the End Tag 
Some HTML elements might display corre
ctly even if you forget the end tag: 
<p>This is a paragraph 
<p>This is a paragraph  


The example above works in most browsers
, because the closing tag is considered 
optional.  
Never rely on this. Many HTML elements 
will produce unexpected results and/or errors 
if you forget the end tag . 
 
Empty HTML Elements 
HTML elements with no content are called empty elements. 

<br> is an empty element without a closi
ng tag (the <br> tag 
defines a line break). 
Tip:
 In XHTML, all elements must be closed. 
Adding a slash inside 
the start tag, like <br 
/>, is the proper way of closing 
empty elements in XHTML (a nd XML). 
 
HTML Tip: Use Lowercase Tags 
HTML tags are not case sensitive: <P> m
eans the same as <p>. Many web sites use 
uppercase HTML tags. 
HTML Attributes 
 
HTML elements can have 
attributes
 
 
Attributes provide 
additional information
 about an element 
 
Attributes are always specified in 
the start tag
 
 
Attributes come in name/value pairs like: 
name="value"
 
 
Attribute Example 
HTML links are defined with the <a> tag. Th
e link address is specified in the href 
attribute: 
Example 
<a href="http://www. xitecsoluti
ons.com">This is a link</a>  
 

 

 

 


Always Quote Attribute Values 
Attribute values should always
 be enclosed in quotes.  
Double style quotes are the most common, but
 single style quotes are also allowed. 
Tip:
 In some rare situations, when the attr
ibute value itself contains quotes, it is 
necessary to use single quotes
: name='John "ShotGun" Nelson' 
 
HTML Tip: Use Lowercase Attributes 
Attribute names and attribute 
values are case-insensitive. 
Newer versions of (X)HTML will demand lowercase attributes. 
 
HTML Attribute
s Reference 
A complete list of legal attributes fo
r each HTML element is listed in our: 
Below is a list of some attributes that
 are standard for most HTML elements: 
Attribute Value Description 
class 
classname
 
Specifies a classname for an element 
id 
id
 
Specifies a unique id for an element 
style 
style_definition
 
Specifies an inline style for an element 
title 
tooltip_text 
 
Specifies extra information about an element 
(displayed as a tool tip) 
For more information about standard attributes:  
HTML Headings 
Headings are defined with the <h1> to <h6> tags. 
<h1> defines the most important heading. 
<h6> defines the least important heading. 
Example 
<h1>This is a heading</h1> 
<h2>This is a heading</h2> 

<h3>This is a heading</h3>  


 
 
Note:
 Browsers automatically add some empty space (a margin) before and after each 
heading. 
 
Headings Are Important 
Use HTML headings for headings onl
y. Don't use headings to make text 
BIG
 or 
bold
. 
Search engines use your headings to index th
e structure and content 
of your web pages. 
Since users may skim your pages by its headi
ngs, it is important to 
use headings to show 
the document structure. 
H1 headings should be used as ma in headings, followed by H2 headings, then the less 
important H3 headings, and so on. 
 
HTML Lines 
The <hr /> tag creates a horizon
tal line in an HTML page. 
 
The hr element can be used to separate content: 
Example 
<p>This is a paragraph</p> 
<hr /> 

<p>This is a paragraph</p> 

<hr /> 

<p>This is a paragraph</p>  

 

 

 
 
HTML Comments 
Comments can be inserted into the HTML
 code to make it more readable and 
understandable. Comments are ignored by 
the browser and are not displayed. 


Comments are written like this: 
Example 
<!-- This is a comment -->  
 

 
Note:
 There is an exclamation point after the op
ening bracket, but not before the closing 
bracket. 
 
HTML Tip - How to 
View HTML Source 
Have you ever seen a Web page and w
ondered "Hey! How did they do that?" 
To find out, right-click in the page and sele
ct "View Source" (IE) or "View Page Source" 
(Firefox), or similar for other browsers. Th
is will open a window containing the HTML 
code of the page. 
HTML Tag Reference 
You will learn more about HTML tags and attribut
es in the next chapters of this tutorial. 
Tag Description 
<html>
 Defines an HTML document
<body>
 Definesthedocument'sbody
<h1> to <h6>
 Defines HTML headings 
<hr />
 Defines a horizontal line 
<!-->
 Defines a comment 
HTML Paragraphs 
Paragraphs are defined with the <p> tag. 
Example 
<p>This is a paragraph</p> 
<p>This is another paragraph</p>  

 

 
Note:
 Browsers automa tically add an empt
y line before and after a paragraph. 


Don't Forget the End Tag 
Most browsers will display HTML corre
ctly even if you forget the end tag: 
Example 
<p>This is a paragraph 
<p>This is another paragraph  

 

 
The exampl e above will work in most browse
rs, but don't rely on it. Forgetting the end 
tag can produce unexpected results or errors. 
Note:
 Future version of HTML will not allow you to skip end tags. 
 
HTML Line Breaks 
Use the <br /> tag if you want 
a line break (a new line) with
out starting a new paragraph: 
Example 
<p>This is<br />a para<br />gr
aph with line breaks</p>  
 

The <br /> element is an empty 
HTML element. It has no end tag. 
<br> or <br /> 
In XHTML, XML, elements with no e
nd tag (closing tag) are not allowed.  
Even if <br> works in all 
browsers, writing <br /> instea
d works better in XHTML and 
XML applications. 
 
HTML Output - Useful Tips 
You cannot be sure how HTML will be displa
yed. Large or small screens, and resized 
windows will create different results.  
With HTML, you cannot change the output by ad
ding extra spaces or extra lines in your 
HTML code. 


The browser will remove extra spaces and extra lines when the page is displayed. Any 
number of lines count as one line, and 
any number of spaces count as one space. 
 
HTML Tag Reference 
Tag Description 
<p>
 Defines a paragraph 
<br />
 Inserts a single line break 
 


HTML Text Formatting 
This text is bold
 
 
This text is big 

 
This text is italic
 
 
 
HTML Formatting Tags 
HTML uses tags like <b> and <i> for formatting output, like 
bold
 or 
italic
 text. 
These HTML tags are called formatting tags 
(look at the bottom of this page for a 
complete reference).  
 
Often <strong> renders as <b>, and <em> renders as <i>.
 
 
However, there is a difference in the meaning of these tags: 

 

<b> or <i> defines bold 
or italic text only. 
 

<strong> or <em> means that you want the 
text to be rendered in a way that the 
user understands as "important". Today, a
ll major browsers render strong as bold 
and em as italics. However, if a browser 
one day wants to make a text highlighted 
with the strong feature, it might be
 cursive for example and not bold! 
 
HTML Text Formatting Tags 
Tag Description 
<b>
 Defines bold text 
<big>
 Defines big text 
<em>
 Defines emphasized text  
<i>
 Defines italic text 
<small>
 Defines small text 
<strong>
 Defines strong text 
<sub>
 Defines subscripted text 
<sup>
 Defines superscripted text 
<ins>
 Definesinsertedtext 
<del>
 Defines deleted text 


HTML "Computer Output" Tags 
Tag Description 
<code>
 Defines computer code text 
<kbd>
 Defines keyboard text  
<samp>
 Defines sample computer code 
<tt>
 Defines teletype text 
<var>
 Defines a variable 
<pre>
 Defines preformatted text 
HTML Citations, Quotations, and Definition Tags 
Tag Description 
<abbr>
 Defines an abbreviation 
<acronym>
 Defines an acronym 
<address>
 Defines contact information for the author/owner of a document 
<bdo>
 Defines the text direction 
<blockquote>
 Defines a long quotation 
<q>
 Defines a short quotation 
<cite>
 Defines a citation 
<dfn>
 Defines a definition term 
 
HTML Fonts 
The example below shows how the HTML could look by using the <font> tag: 
Example 
<p> 
<font size="5" face="a
rial" color="red"> 
This paragraph is in Arial, size 5, and in red text color. 

</font> 

</p> 

 

<p> 

<font size="3" face="verdana" color="blue"> 

This paragraph is in Verdana, si
ze 3, and in blue text color. 
</font> 

</p> 

 


HTML Styles - CSS 
CSS is used to style HTML elements. 
Look! Styles and colors
 
This text is in Verdana and red 
This text is in Times and blue 
This text is 30 pixels high 
 
Styling HTML with CSS 
CSS was introduced together with HTML 4, to provide a better way to style HTML 
elements. 
CSS can be added to HTML in the following ways: 
 
in 
separate style sheet files
 (CSS files) 
 
in the 
style element
 in the HTML head section 
 
in the 
style attribute
 in single HTML elements 
 
Using the HTML Style Attribute 
It is time consuming and not very practical
 to style HTML elements using the style 
attribute. 
The preferred way to add CSS to HTML, is 
to put CSS syntax in separate CSS files.
 
However, in this HTML tutorial we will in
troduce you to CSS using the style attribute. 
This is done to simplify the examples. It al
so makes it easier for you to edit the code and 
try it yourself.  
 
 

 


HTML Style Example - Background Color 
The background-color property defines 
the background color for an element: 
Example 
<html> 
 

<body style="background-color:yellow;"> 

<h2 style="background-color:red;">This is a heading</h2> 

<p style="background-color:green
;">This is a paragraph.</p> 
</body> 

 

</html > 

 

The background-color property makes th
e "old" bgcolor attribute obsolete. 
 
HTML Style Example - Font, Color and Size 
The font-family, color, and font
-size properties define the font
, color, and size of the text 
in an element: 
Example 
<html> 
 

<body> 

<h1 style="font-family:ver
dana;">A heading</h1> 
<p style="font-family:arial;color:r
ed;font-size:20px;">A paragraph.</p> 
</body> 

 

</html > 

 

The font-family, color, and font-size prope
rties make the old <font> tag obsolete. 
 
 
 
 


HTML Style Example - Text Alignment 
The text-align property specifi
es the horizontal alignment of text in an element: 
Example 
<html> 
 

<body> 

<h1 style="text-align: center;"
>Center-aligned heading</h1> 
<p>This is a paragraph.</p> 

</body> 

 

</html > 

 

The text-align property makes th
e old <center> tag obsolete. 
 
Deprecated Tags and Attributes 
In HTML 4, several tags and attributes were deprecated. Deprecated means that they will 
not be supported in future versions of HTML. 
The message is clear:
 Avoid using deprecated tags and attributes! 
These tags and attribut
es should be avoided: 
Tags Description 
<center> Deprecated. Defines centered cont ent 
<font> and <basefont> Deprecat
ed. Defines HTML fonts 
<s> and <strike> Deprecated. 
Defines strikethrough text 
<u> Deprecated. Defines underlined text 
Attributes Description 
align Deprecated. Defines the alignment of text
bgcolor Deprecated. Defines the background color

color Deprecated. Defines the text color 
For all of the above: Use styles instead! 
 
 


HTML Links 
Links are found in nearly all Web pages. Links
 allow users to click their way from page 
to page. 
HTML Hyperlinks (Links) 
A hyperlink (or link) is a word, 
group of words, or image that you can click on to jump to 
a new document or a new section within the current document. 
When you move the cursor over a link in a We
b page, the arrow will turn into a little 
hand. 
Links are specified in HTML using the <a> tag. 

The <a> tag can be used in two ways: 
1.
 
To create a link to another document, by using the href attribute 
2.
 
To create a bookmark inside a docum
ent, by using the name attribute 
HTML Link Syntax 
The HTML code for a link is simple. It looks like this: 
<a href="
url
">
Link text
</a>  
The href attribute specifies the destination of a link. 
Example 
<a href="http://www.xitecsolutions.com/">Visit
 Xitec Solutions</a> 
 which will display 
like this: 
Visit Xitec Solutions
  
Clicking on this hyperlink 
will send the user to Xitec Solutions homepage. 
Tip:
 The "
Link text
" doesn't have to be text. It can be an image or any other HTML 
element. 
 
HTML Links - The target Attribute 
The target attribute specifies where to open the linked document. 

The exampl e below will open the linked doc
ume nt in a new browser window or a new 
tab: 


Example 
<a href="http://www. xitecsolutions.com/" 
target="_blank">Visit Xitec Solutions!</a>  
 

 
HTML Links - The 
name Attribute 
The name attribute specifies the name of an anchor. 
The name attribute is used to create
 a bookmark inside an HTML document. 
Note: 
The upcoming HTML5 standard suggest using 
the id attribute in
stead of the name 
attribute for specifying the name of an anchor
. Using the id attribute actually works also 
for HTML4 in all modern browsers. 
Bookmarks are not displayed in any special 
way. They are invisible to the reader. 
Example 
A na me d anchor inside an HTML docume nt: 

<a name ="tips">Useful Tips Section</a>  
Create a link to the "Useful Tips Section" inside the same document: 
<a href="#tips">Visit the Useful Tips Section</a>  
Or, create a link to the "Useful Ti
ps Section" from another page: 
<a href="http://www. xitecsolutions.com/html_links.htm#tips"> 
Visit the Useful Tips Section</a>  

 

 
HTML Link Tags 
Tag Description 
<a>
 Defines an anchor 
 


HTML Images 
Example 
 
 
HTML Images - The <img> Tag and the Src Attribute  
In HTML, images are defined with the <img> tag.   

The <img> tag is empty, which means that it 
contains attributes 
only, and has no closing 
tag.  
To display an image on a page, you need to us
e the src attribute. Src stands for "source". 
The value of the src attribute is the 
URL of the image you want to display.  
Syntax for defining an image:
 
<img src="
url
" alt="
some_text
"/>  
 
HTML Images - The Alt Attribute 
The required alt attribute specifies an alternat
e text for an image, if the image cannot be 
displayed. 
The value of the alt attribute 
is an author-defined text:  
<img src="boat.gif" alt="Big Boat" />  
The alt attribute provides alternative informa
tion for an image if a user for some reason 
cannot view it (because of slow connection, an erro
r in the src attribute, or if the user uses 
a screen reader). 


 
HTML Images - Set Height 
and Width of an Image 
The height and width attributes are used to 
specify the height and width of an image. 
The attribute values are specified in pixels by default: 

<img src="pulpit.jpg" alt="Pulpit 
rock" width="304" height="228" />  
Tip:
 It is a good practice to specify both the heig
ht and width attributes for an image. If 
these attributes are set, the space required fo
r the image is reserved when the page is 
loaded. However, without th
ese attributes, the browser 
does not know the size of the 
image. The effect will be that the page 
layout will change during loading (while the 
images load). 
 
HTML Image Tags 
Tag Description 
<img />
 Defines an image 
<map>
 Defines an image- map 
<area />
 Defines a clickable area inside an image-map
 


HTML Tables 
Apples 44% 
Bananas 23% 
Oranges 13% 

Other 10% 
 
Tables are defined with the <table> tag. 
A table is divided into rows (with the <tr> 
tag), and each row is divided into data cells 
(with the <td> tag). td stands for "table data,"
 and holds the content of
 a data cell. A <td> 
tag can contain text, links, images, 
lists, forms, other tables, etc. 
Table Example 
<table border="1"> 
<tr> 

<td>row 1, cell 1</td> 

<td>row 1, cell 2</td> 

</tr> 

<tr> 

<td>row 2, cell 1</td> 

<td>row 2, cell 2</td> 

</tr> 

</table>  
How the HTML code above looks in a browser: 
row 1, cell 1 row 1, cell 2 
row 2, cell 1 row 2, cell 2 
 
 
HTML Tables and the Border Attribute 
If you do not specify a border attribute, th
e table will be displayed without borders. 
Sometimes this can be useful, but most of 
the time, we want the borders to show.  
To display a table with borders, specify the border attribute: 

<table border="1"> 
<tr> 


<td>Row 1, cell 1</td> 
<td>Row 1, cell 2</td> 

</tr> 

</table>  

 

 
HTML Table Headers 
Header information in a table are defined with the <th> tag. 
All major browsers will display the text in
 the <th> element as bold and centered. 
<table border="1"> 
<tr> 

<th>Header 1</th> 

<th>Header 2</th> 

</tr> 

<tr> 

<td>row 1, cell 1</td> 

<td>row 1, cell 2</td> 

</tr> 

<tr> 

<td>row 2, cell 1</td> 

<td>row 2, cell 2</td> 

</tr> 

</table>  
How the HTML code above looks in your browser: 
Header 1 Header 2 
row 1, cell 1 row 1, cell 2 
row 2, cell 1 row 2, cell 2 
 
Notes: 
Tables without borders 
How to create tables without borders. 
Table headers
 
How to create table headers. 
Table with a caption
 
How to add a caption to a table. 


Table cells that span more than one row/ column 
How to define table cells that span more than one row or one column. 
Tags inside a table
 
How to display elements inside other elements. 
Cell padding 
How to use cellpadding to create more wh
ite space between the cell content and its 
borders. 
Cell spacing 
How to use cellspacing to increase the distance between the cells. 
The frame attribute 
How to use the "frame" attribute to 
control the borders around the table. 
HTML Table Tags 
Tag Description 
<table>
 Defines a table 
<th>
 Defines a table header 
<tr>
 Defines a table row 
<td>
 Defines a table cell 
<caption>
 Defines a table caption 
<colgroup>
 Defines a group of columns in a table, for formatting 
<col />
 Defines attribute values for one or more columns in a table 
<thead>
 Groups the header content in a table 
<tbody>
 Groups the body content in a table 
<tfoot>
 Groups the footer content in a table  
 
 

 
 
HTML Lists 
The most common HTML lists ar
e ordered and unordered lists: 


An ordered list: 
1.
 
The first list item 
2.
 
The second list item 
3.
 
The third list item 
An unordered list: 
 
List item 
 
List item 
 
List item 
Unordered list 
How to create an unordered list in an HTML document. 
Ordered list 
How to create an ordered list in an HTML document. 
 
HTML Unordered Lists 
An unordered list starts with 
the <ul> tag. Each list item
 starts with the <li> tag. 
The list items are marked with bulle
ts (typically small black circles). 
<ul> 
<li>Coffee</li> 

<li>Milk</li> 

</ul>  
How the HTML code above looks in a browser: 
 
Coffee 
 
Milk 
HTML Ordered Lists 
An ordered list starts with the <ol> tag. 
Each list item starts with the <li> tag. 
The list items are marked with numbers. 

<ol> 
<li>Coffee</li> 

<li>Milk</li> 

</ol>  
How the HTML code above looks in a browser: 
1.
 
Coffee 


2.
 
Milk 
 
HTML Definition Lists 
A definition list is a list of items, 
with a description of each item. 
The <dl> tag defines a definition list. 

The <dl> tag is used in conjunction with <d
t> (defines the item in the list) and <dd> 
(describes the item in the list): 
<dl> 
<dt>Coffee</dt> 

<dd>- black hot drink</dd> 

<dt>Milk</dt> 

<dd>- white cold drink</dd> 

</dl>  
How the HTML code above looks in a browser: 
Coffee 
- black hot drink 
Milk 
- white cold drink 
 
Notes: 
Different types of ordered lists 
Demonstrates different types of ordered lists. 
Different types of unordered lists 
Demonstrates different types of unordered lists. 
Nested list 
Demonstrates how you can nest lists. 
Nested list 2 
Demonstrates a more complicated nested list. 
Definition list
 
Demonstrates a definition list. 
 


HTML List Tags 
Tag Description 
<ol>
 Defines an ordered list 
<ul>
 Defines an unordered list 
<li>
 Defines a list item 
<dl>
 Defines a definition list 
<dt>
 Defines an item in a definition list 
<dd>
 Defines a description of 
an item in a definition list
 
HTML Forms and Input 
HTML Forms are used to select 
different kinds of user input. 
HTML for ms are used to pass data to a server. 

A form can contain input elements like te
xt fields, checkboxes, radio-buttons, submit 
buttons and more. A form can also contain sele
ct lists, textarea, fieldset, legend, and label 
elements. 
The <form>  tag is used to create an HTML for m: 
<form> 
 
input elements
 
. 
</form> 

 
HTML Forms - The Input Element 
The most important form element is the input element.  
The input element is used to select user information. 

An input element can vary in many ways, 
depending on the type attribute. An input 
element can be of type text field, chec
kbox, password, radio button, submit button, and 
more. 
The most used input types are described below. 
Text Fields 


<input type="text" /> defines 
a one-line input field that a 
user can enter text into: 
<form> 
First name: <input type="text" 
name="firstname" /><br /> 
Last name: <input type="text" name="lastname" /> 

</form>  
How the HTML code above looks in a browser: 
First name: 
 
Last name: 
 
Note:
 The form itself is not visibl
e. Also note that the default 
width of a text field is 20 
characters.   
Password Field 
<input type="password" /> 
defines a password field: 
<form> 
Password: <input type="pa
ssword" name="pwd" /> 
</form>  
How the HTML code above looks in a browser: 
Password: 
 
Note:
 The characters in a password field are ma
sked (shown as asteri
sks or circles).   
Radio Buttons 
<input type="radio" />
 defines a radio button. Ra dio butt
ons let a user select ONLY ONE 
of a limited number of choices: 
<form> 
<input type="radio" name ="sex" 
value="male" /> Male<br /> 
<input type="radio" name ="sex"
 value="female" /> Female 
</form>  
How the HTML code above looks in a browser: 
Male 
Fe ma le  
 


Checkboxes  
<input type="checkbox" /> defines a chec
kbox. Checkboxes let a user select ONE or 
MORE options of a limited number of choices. 
<form> 
<input type="checkbox" name="vehicle" va
lue="Bike" /> I have a bike<br /> 
<input type="checkbox" name ="vehicle"
 value="Car" /> I have a car  
</form>  
How the HTML code above looks in a browser: 
I have a bike 
I have a car  
 
Submit Button  
<input type="submit" /> defines a submit button. 
A submit button is used to send form data to
 a server. The data is sent to the page 
specified in the form's action attribute. The 
file defined in the action attribute usually 
does something with the received input: 
<form name="input" action="html_form_action.asp" method="get"> 
Username: <input type="
text" name ="user" /> 
<input type="submit" value="Submit" /> 

</form>  
How the HTML code above looks in a browser: 
Username: 
S
ubmit
 
If you type some characters in the text fi
eld above, and click the "Submit" button, the 
browser will send your input to a page calle
d "html_form_action.asp". The page will 
show you the received input.  
HTML Form Tags 
Tag Description 
<form>
 Defines an HTML form for user input 
<input />
 Defines an input control 
<textarea>
 Defines a multi-line text input control 


<label>
 Defines a label for an input element 
<fieldset>
 Defines a border around elements in a form 
<legend>
 Defines a caption for a fieldset element 
<select>
 Defines a select 
list (drop-down list) 
<optgroup>
 Defines a group of related 
options in a select list
<option>
 Defines an option in a select list 
<button>
 Defines a push button 
 
HTML Frames 
With frames, you can display more than one HTML document in the same browser 
window. Each HTML document is called a fram
e, and each frame is independent of the 
others. 
The disadvantages of using frames are: 
 
Frames are not expected to be suppo
rted in future versions of HTML 
 
Frames are difficult to use. (Printing the entire page is difficult). 
 
The web developer must keep track of more HTML documents 
The HTML frameset Element 
The frameset element holds one or more frame elements. Each frame element can hold a 
separate document. 
The frameset element states HOW MANY columns 
or rows there will be in the frameset, 
and HOW MUCH percentage/pixels of
 space will occupy each of them. 
 
The HTML frame Element 
The <frame> tag defines one particular
 window (fra me) within a frameset. 
In the example below we have a frameset with two columns. 
The first column is set to 25% of the width 
of the browser window. The second column is 
set to 75% of the width of the browser wi
ndow. The document "frame_a.htm" is put into 
the first column, and the document "frame
_b.ht m" is put into the second column: 


<frameset cols="25%,75%"> 
   <frame src="frame_a.htm" /> 

   <frame src="frame_b.htm" /> 

</frameset>  
Note:
 The frameset column size can also be se
t in pixels (cols="200,500"), and one of the 
columns can be set to use the remaining space, with an asterisk (cols="25%,*"). 
Basic Notes - Useful Tips 
Tip:
 If a frame has visible borders, the user
 can resize it by dragging the border. To 
prevent a user from doing this, you can a
dd noresize="noresize" to the <frame> tag. 
Note:
 Add the <noframes> tag for brow
sers that do not support frames. 
Important:
 You cannot use the <body></body>
 tags together with the 
<frameset></frameset> tags! However, if you 
add a <noframes> tag containing some text 
for browsers that do not support frames, 
you will have to enclose the text in 
<body></body> tags! See how it is d
one in the first example below. 
 
HTML Frame Tags 
Tag Description 
<frameset>
 Defines a set of frames 
<frame />
 Defines a sub window (a frame) 
<noframes>
 Defines a nofra me  section for browsers that do not handle frames 
 


HTML Iframes 
An iframe is used to display 
a web page within a web page. 
Syntax for adding an iframe:
 
<iframe src="
URL
"></iframe>  
The URL points to the loca
tion of the separate page. 
Iframe - Set Height and Width 
The height and width attributes are used to 
specify the height and width of the iframe. 
The attribute values are specified
 in pixels by default, but they
 can also be in percent (like 
"80%"). 
Example 
<iframe src="demo_iframe.htm" wi
dth="200" height="200"></iframe> 
 

 
Iframe - Remove the Border 
The frameborder attribute spec
ifies whether or not to disp
lay a border around the iframe. 
Set the attribute value to "0" to remove the border: 
Example 
<iframe src="demo_iframe.htm"  frameborder="0"></iframe> 
 

 
Use iframe as a Target for a Link 
An iframe can be used as the target frame for a link. 
The target attribute of a link must refer to the name attribute of the iframe: 
Example 
<iframe src="demo_iframe.htm"
 name="iframe_a"></iframe> 
<p><a href="http://www. xitecsol
utions.com" target="iframe_a"> 
xitecsolutions.com</a></p>  


HTML iframe Tag 
Tag Description 
<iframe>
 Defines an inline sub window (fra me)
 
HTML Colors 
Colors are displayed combining RED, GREEN, and BLUE light. 
Color Values  
HTML colors are defined using a hexadeci
mal notation (HEX) for the combination of 
Red, Green, and Blue color values (RGB).  
The lowest value that can be given to one 
of the light sources is 0 (in HEX: 00). The 
highest value is 255 (in HEX: FF). 
HEX values are specified as 3 pairs of 
two-digit numbers, st
arting with a # sign. 
Color Values 
Color 
Color HEX 
Color RGB 
  
#000000 rgb(0,0,0) 
  #FF0000 rgb(255,0,0) 
  #00FF00 rgb(0,255,0) 
  
#0000FF rgb(0,0,255) 
  #FFFF00 rgb(255,255,0) 
  #00FFFF rgb(0,255,255) 
  #FF00FF rgb(255,0,255) 
  #C0C0C0 rgb(192,192,192) 
  #FFFFFF rgb(255,255,255) 
 
16 Million Different Colors 
The combination of Red, Green, and Blue va
lues from 0 to 255, gives more than 16 
million different colors (256 x 256 x 256). 
If you look at the color table be
low, you will see the result of 
varying the red light from 0 
to 255, while keeping the green
 and blue light at zero. 


To see the full list of color mixes when RE
D varies from 0 to 255, click on one of the 
HEX or RGB values below. 
Red Light Color HEXColor RGB 
  
#000000  
rgb(0,0,0)
  
  
#080000  
rgb(8,0,0)
  
  
#100000  
rgb(16,0,0)
  
  
#180000  
rgb(24,0,0)
  
  
#200000
  
rgb(32,0,0)
  
  
#280000
  
rgb(40,0,0)
  
  
#300000
  
rgb(48,0,0)
  
  
#380000
  rgb(56,0,0)  
  
#400000
  
rgb(64,0,0)
  
  
#480000
  
rgb(72,0,0)
  
  
#500000
  
rgb(80,0,0)
  
  
#580000
  
rgb(88,0,0)
  
  
#600000
  
rgb(96,0,0)
  
  
#680000
  
rgb(104,0,0)
  
  
#700000
  
rgb(112,0,0)
  
  
#780000
  
rgb(120,0,0)
  
  
#800000
  
rgb(128,0,0)
  
  
#880000
  
rgb(136,0,0)
  
  
#900000
  
rgb(144,0,0)
  
  
#980000
  
rgb(152,0,0)
  
  
#A00000
  
rgb(160,0,0)
  
  
#A80000
  rgb(168,0,0)  
  
#B00000
  
rgb(176,0,0)
  
  
#B80000
  
rgb(184,0,0)
  
  
#C00000
  
rgb(192,0,0)
  
  
#C80000
  
rgb(200,0,0)
  
  
#D00000
  
rgb(208,0,0)
  
  
#D80000
  
rgb(216,0,0)
  
  
#E00000
  
rgb(224,0,0)
  
  
#E80000
  
rgb(232,0,0)
  
  
#F00000
  
rgb(240,0,0)
  
  
#F80000
  
rgb(248,0,0)
  
  
#FF0000
  
rgb(255,0,0)
  
 


Shades of Gray 
Gray colors are created by using an equal am
ount of power to all of
 the light sources. 
To make it easier for you to select the corre
ct shade, we have created a table of gray 
shades for you: 
Gray Shades Color HEXColor RGB 
  
#000000  rgb(0,0,0)  
  
#080808  rgb(8,8,8)  
  
#101010  rgb(16,16,16)  
  
#181818  rgb(24,24,24)  
  
#202020  rgb(32,32,32)  
  
#282828  rgb(40,40,40)  
  
#303030  rgb(48,48,48)  
  
#383838  rgb(56,56,56)  
  #404040  rgb(64,64,64)  
  #484848  rgb(72,72,72)  
  #505050  rgb(80,80,80)  
  #585858  rgb(88,88,88)  
  #606060  rgb(96,96,96)  
  #686868  rgb(104,104,104) 
  #707070  rgb(112,112,112) 
  #787878  rgb(120,120,120) 
  #808080  rgb(128,128,128) 
  #888888  rgb(136,136,136) 
  #909090  rgb(144,144,144) 
  #989898  rgb(152,152,152) 
  #A0A0A0  rgb(160,160,160) 
  #A8A8A8  rgb(168,168,168) 
  #B0B0B0  rgb(176,176,176) 
  #B8B8B8  rgb(184,184,184) 
  #C0C0C0  rgb(192,192,192) 
  #C8C8C8  rgb(200,200,200) 
  #D0D0D0  rgb(208,208,208) 
  #D8D8D8  rgb(216,216,216) 
  #E0E0E0  rgb(224,224,224) 
  #E8E8E8  rgb(232,232,232) 
  #F0F0F0  rgb(240,240,240) 


  #F8F8F8  rgb(248,248,248) 
  #FFFFFF  rgb(255,255,255) 
 
 
Web Safe Colors? 
Some years ago, when computers supported ma
x 256 different colors, a list of 216 "Web 
Safe Colors" was suggested as a Web sta
ndard, reserving 40 fixed system colors. 
The 216 cross-browser color pa
lette was created to ensure
 that all computers would 
display the colors correctly wh
en running a 256 color palette. 
This is not important today, since most computers can display millions of different 
colors. Anyway, here is the list: 
000000 
000033 
000066 
000099 
0000CC 
0000FF 
003300 
003333 
003366 
003399 
0033CC 
0033FF 
006600 
006633 
006666 
006699 
0066CC 
0066FF 
009900 
009933 
009966 
009999 
0099CC 
0099FF 
00CC00 
00CC33 
00CC66 
00CC99 
00CCCC 
00CCFF 
00FF00 
00FF33 
00FF66 
00FF99 
00FFCC 
00FFFF 
330000 
330033 
330066 
330099 
3300CC 
3300FF 
333300 
333333 
333366 
333399 
3333CC 
3333FF 
336600 
336633 
336666 
336699 
3366CC 
3366FF 
339900 
339933 
339966 
339999 
3399CC 
3399FF 
33CC00 
33CC33 
33CC66 
33CC99 
33CCCC 
33CCFF 
33FF00 
33FF33 
33FF66 
33FF99 
33FFCC 
33FFFF 
660000 
660033 
660066 
660099 
6600CC 
6600FF 
663300 
663333 
663366 
663399 
6633CC 
6633FF 
666600 
666633 
666666 
666699 
6666CC 
6666FF 
669900 
669933 
669966 
669999 
6699CC 
6699FF 
66CC00 
66CC33 
66CC66 
66CC99 
66CCCC 
66CCFF 
66FF00 
66FF33 
66FF66 
66FF99 
66FFCC 
66FFFF 
990000 
990033 
990066 
990099 
9900CC 
9900FF 
993300 
993333 
993366 
993399 
9933CC 
9933FF 
996600 
996633 
996666 
996699 
9966CC 
9966FF 
999900 
999933 
999966 
999999 
9999CC 
9999FF 


99CC00 
99CC33 
99CC66 
99CC99 
99CCCC 
99CCFF 
99FF00 
99FF33 
99FF66 
99FF99 
99FFCC 
99FFFF 
CC0000 
CC0033 
CC0066 
CC0099 
CC00CC 
CC00FF 
CC3300 
CC3333 
CC3366 
CC3399 
CC33CC 
CC33FF 
CC6600 
CC6633 
CC6666 
CC6699 
CC66CC 
CC66FF 
CC9900 
CC9933 
CC9966 
CC9999 
CC99CC 
CC99FF 
CCCC00 
CCCC33 
CCCC66 
CCCC99 
CCCCCC 
CCCCFF 
CCFF00 
CCFF33 
CCFF66 
CCFF99 
CCFFCC 
CCFFFF 
FF0000 
FF0033 
FF0066 
FF0099 
FF00CC 
FF00FF 
FF3300 
FF3333 
FF3366 
FF3399 
FF33CC 
FF33FF 
FF6600 
FF6633 
FF6666 
FF6699 
FF66CC 
FF66FF 
FF9900 
FF9933 
FF9966 
FF9999 
FF99CC 
FF99FF 
FFCC00 
FFCC33 
FFCC66 
FFCC99 
FFCCCC 
FFCCFF 
FFFF00 
FFFF33 
FFFF66 
FFFF99 
FFFFCC 
FFFFFF 
 
HTML Color Names 
 
Color Names Supported by All Browsers 
147 color names are defined in the HTML a
nd CSS color specification (17 standard 
colors plus 130 more). The table below lis
ts them all, along with their hexadecimal 
values. 
Tip:
 The 17 standard colors are: aqua, blac
k, blue, fuchsia, gray, grey, green, lime, 
ma roon, navy, olive, purple, red, s
ilver, teal, white, and yellow. 
Click on a color name  (or a hex value) to vi
ew the color as the background-color along 
with different text colors: 
Sorted by Color Name 
Same list sorted by hex values
 
Color Name HEX Color Shades Mix 
AliceBlue
  #F0F8FF
 
  Shades
 Mix
 
AntiqueWhite
  #FAEBD7
 
  Shades
 Mix
 
Aqua
  #00FFFF
 
  Shades
 Mix
 


Aquamarine
  #7FFFD4
 
  Shades
 Mix
 
Azure
  #F0FFFF
 
  Shades
 Mix
 
Beige
  #F5F5DC
 
  Shades
 Mix
 
Bisque
  #FFE4C4
 
  Shades
 Mix
 
Black
  #000000
 
  
Shades
 Mix
 
BlanchedAlmond
  #FFEBCD
 
  Shades
 Mix
 
Blue
  #0000FF
 
  
Shades
 Mix
 
BlueViolet
  #8A2BE2
 
  Shades
 Mix
 
Brown
  #A52A2A
 
  Shades
 Mix
 
BurlyWood
  #DEB887
 
  Shades
 Mix
 
CadetBlue
  #5F9EA0
 
  Shades
 Mix
 
Chartreuse
  #7FFF00
 
  Shades
 Mix
 
Chocolate
  #D2691E
 
  Shades
 Mix
 
Coral
  #FF7F50
 
  Shades
 Mix
 
CornflowerBlue
  #6495ED
 
  Shades
 Mix
 
Cornsilk
  #FFF8DC
 
  Shades
 Mix
 
Crimson
  #DC143C
 
  Shades
 Mix
 
Cyan
  #00FFFF
 
  Shades
 Mix
 
DarkBlue
  #00008B
 
  
Shades
 Mix
 
DarkCyan
  #008B8B
 
  Shades
 Mix
 
DarkGoldenRod
  #B8860B
 
  Shades
 Mix
 
DarkGray
  #A9A9A9
 
  Shades
 Mix
 
DarkGrey
  #A9A9A9
 
  Shades
 Mix
 
DarkGreen
  #006400
 
  
Shades
 Mix
 
DarkKhaki
  #BDB76B
 
  Shades
 Mix
 
DarkMagenta
  #8B008B
 
  
Shades
 Mix
 
DarkOliveGreen
  #556B2F
 
  Shades
 Mix
 
Darkorange
  #FF8C00
 
  Shades
 Mix
 
DarkOrchid
  #9932CC
 
  Shades
 Mix
 
DarkRed
  #8B0000
 
  
Shades
 Mix
 
DarkSalmon
  #E9967A
 
  Shades
 Mix
 
DarkSeaGreen
  #8FBC8F
 
  Shades
 Mix
 
DarkSlateBlue
  #483D8B
 
  Shades
 Mix
 
DarkSlateGray
  #2F4F4F
 
  Shades
 Mix
 
DarkSlateGrey
  #2F4F4F
 
  Shades
 Mix
 
DarkTurquoise
  #00CED1
 
  Shades
 Mix
 
DarkViolet
  #9400D3
 
  Shades
 Mix
 
DeepPink
  #FF1493
 
  Shades
 Mix
 


DeepSkyBlue
  #00BFFF
 
  Shades
 Mix
 
DimGray
  #696969
 
  Shades
 Mix
 
DimGrey
  #696969
 
  Shades
 Mix
 
DodgerBlue
  #1E90FF
 
  Shades
 Mix
 
FireBrick
  #B22222
 
  Shades
 Mix
 
FloralWhite
  #FFFAF0
 
  Shades
 Mix
 
ForestGreen
  #228B22
 
  Shades
 Mix
 
Fuchsia
  #FF00FF
 
  Shades
 Mix
 
Gainsboro
  #DCDCDC
  Shades
 Mix
 
GhostWhite
  #F8F8FF
 
  Shades
 Mix
 
Gold
  #FFD700
 
  Shades
 Mix
 
GoldenRod
  #DAA520
 
  Shades
 Mix
 
Gray
  #808080
 
  Shades
 Mix
 
Grey
  #808080
 
  Shades
 Mix
 
Green
  #008000
 
  Shades
 Mix
 
GreenYellow
  #ADFF2F
 
  Shades
 Mix
 
HoneyDew
  #F0FFF0
 
  Shades
 Mix
 
HotPink
  #FF69B4
 
  Shades
 Mix
 
IndianRed 
  #CD5C5C
 
  Shades
 Mix
 
Indigo 
  #4B0082
 
  
Shades
 Mix
 
Ivory
  #FFFFF0
 
  Shades
 Mix
 
Khaki
  #F0E68C
 
  Shades
 Mix
 
Lavender
  #E6E6FA
 
  Shades
 Mix
 
LavenderBlush
  #FFF0F5
 
  Shades
 Mix
 
LawnGreen
  #7CFC00
 
  Shades
 Mix
 
LemonChiffon
  #FFFACD
 
  Shades
 Mix
 
LightBlue
  #ADD8E6
 
  Shades
 Mix
 
LightCoral
  #F08080
 
  Shades
 Mix
 
LightCyan
  #E0FFFF
 
  Shades
 Mix
 
LightGoldenRodYellow
  #FAFAD2
 
  Shades
 Mix
 
LightGray
  #D3D3D3
 
  Shades
 Mix
 
LightGrey
  #D3D3D3
 
  Shades
 Mix
 
LightGreen
  #90EE90
 
  Shades
 Mix
 
LightPink
  #FFB6C1
 
  Shades
 Mix
 
LightSalmon
  #FFA07A
 
  Shades
 Mix
 
LightSeaGreen
  #20B2AA
 
  Shades
 Mix
 
LightSkyBlue
  #87CEFA
 
  Shades
 Mix
 
LightSlateGray
  #778899
 
  Shades
 Mix
 


LightSlateGrey
  #778899
 
  Shades
 Mix
 
LightSteelBlue
  #B0C4DE
 
  Shades
 Mix
 
LightYellow
  #FFFFE0
 
  Shades
 Mix
 
Lime
  #00FF00
 
  Shades
 Mix
 
LimeGreen
  #32CD32
 
  Shades
 Mix
 
Linen
  #FAF0E6
 
  Shades
 Mix
 
Magenta
  #FF00FF
 
  Shades
 Mix
 
Maroon
  #800000
 
  
Shades
 Mix
 
MediumAquaMarine
  #66CDAA
 
  Shades
 Mix
 
MediumBlue
  #0000CD
 
  
Shades
 Mix
 
MediumOrchid
  #BA55D3
 
  Shades
 Mix
 
MediumPurple
  #9370D8
 
  Shades
 Mix
 
MediumSeaGreen
  #3CB371
 
  Shades
 Mix
 
MediumSlateBlue
  #7B68EE
 
  Shades
 Mix
 
MediumSpringGreen
  #00FA9A
 
  Shades
 Mix
 
MediumTurquoise
  #48D1CC
 
  Shades
 Mix
 
MediumVioletRed
  #C71585
 
  Shades
 Mix
 
MidnightBlue
  #191970
 
  
Shades
 Mix
 
MintCream
  #F5FFFA
 
  Shades
 Mix
 
MistyRose
  #FFE4E1
 
  Shades
 Mix
 
Moccasin
  #FFE4B5
 
  Shades
 Mix
 
NavajoWhite
  #FFDEAD
  Shades
 Mix
 
Navy
  #000080
 
  
Shades
 Mix
 
OldLace
  #FDF5E6
 
  Shades
 Mix
 
Olive
  #808000
 
  Shades
 Mix
 
OliveDrab
  #6B8E23
 
  Shades
 Mix
 
Orange
  #FFA500
 
  Shades
 Mix
 
OrangeRed
  #FF4500
 
  Shades
 Mix
 
Orchid
  #DA70D6
 
  Shades
 Mix
 
PaleGoldenRod
  #EEE8AA
 
  Shades
 Mix
 
PaleGreen
  #98FB98
 
  Shades
 Mix
 
PaleTurquoise
  #AFEEEE
 
  Shades
 Mix
 
PaleVioletRed
  #D87093
 
  Shades
 Mix
 
PapayaWhip
  #FFEFD5
 
  Shades
 Mix
 
PeachPuff
  #FFDAB9
 
  Shades
 Mix
 
Peru
  #CD853F
 
  Shades
 Mix
 
Pink
  #FFC0CB
 
  Shades
 Mix
 
Plum
  #DDA0DD
  Shades
 Mix
 


PowderBlue
  #B0E0E6
 
  Shades
 Mix
 
Purple
  #800080
 
  
Shades
 Mix
 
Red
  #FF0000
 
  Shades
 Mix
 
RosyBrown
  #BC8F8F
 
  Shades
 Mix
 
RoyalBlue
  #4169E1
 
  Shades
 Mix
 
SaddleBrown
  #8B4513
 
  Shades
 Mix
 
Salmon
  #FA8072
 
  Shades
 Mix
 
SandyBrown
  #F4A460
 
  Shades
 Mix
 
SeaGreen
  #2E8B57
 
  Shades
 Mix
 
SeaShell
  #FFF5EE
 
  Shades
 Mix
 
Sienna
  #A0522D
 
  Shades
 Mix
 
Silver
  #C0C0C0
 
  Shades
 Mix
 
SkyBlue
  #87CEEB
 
  Shades
 Mix
 
SlateBlue
  #6A5ACD
 
  Shades
 Mix
 
SlateGray
  #708090
 
  Shades
 Mix
 
SlateGrey
  #708090
 
  Shades
 Mix
 
Snow
  #FFFAFA
 
  Shades
 Mix
 
SpringGreen
  #00FF7F
 
  Shades
 Mix
 
SteelBlue
  #4682B4
 
  Shades
 Mix
 
Tan
  #D2B48C
 
  Shades
 Mix
 
Teal
  #008080
 
  Shades
 Mix
 
Thistle
  #D8BFD8
 
  Shades
 Mix
 
Tomato
  #FF6347
 
  Shades
 Mix
 
Turquoise
  #40E0D0
 
  Shades
 Mix
 
Violet
  #EE82EE
 
  Shades
 Mix
 
Wheat
  #F5DEB3
 
  Shades
 Mix
 
White
  #FFFFFF
 
  Shades
 Mix
 
WhiteSmoke
  #F5F5F5
 
  Shades
 Mix
 
Yellow
  #FFFF00
 
  Shades
 Mix
 
YellowGreen
  #9ACD32
 
  Shades
 Mix
 
 


HTML Color Values 
Sorted by Hex Value 
Same list sorted by color name 
Color Name HEX Color Shades Mix
Black
  #000000
 
  
Shades
 Mix
Navy
  #000080
 
  
Shades
 Mix
DarkBlue
  #00008B
 
  
Shades
 Mix
MediumBlue
  #0000CD
 
  
Shades
 Mix
Blue
  #0000FF
 
  
Shades
 Mix
DarkGreen
  #006400
 
  
Shades
 Mix
Green
  #008000
 
  Shades
 Mix
Teal
  #008080
 
  Shades
 Mix
DarkCyan
  #008B8B
 
  Shades
 Mix
DeepSkyBlue
  #00BFFF
 
  Shades
 Mix
DarkTurquoise
  #00CED1
 
  Shades
 Mix
MediumSpringGreen
  #00FA9A
 
  Shades
 Mix
Lime
  #00FF00
 
  Shades
 Mix
SpringGreen
  #00FF7F
 
  Shades
 Mix
Aqua
  #00FFFF
 
  Shades
 Mix
Cyan
  #00FFFF
 
  Shades
 Mix
MidnightBlue
  #191970
 
  
Shades
 Mix
DodgerBlue
  #1E90FF
 
  Shades
 Mix
LightSeaGreen
  #20B2AA
 
  Shades
 Mix
ForestGreen
  #228B22
 
  Shades
 Mix
SeaGreen
  #2E8B57
 
  Shades
 Mix
DarkSlateGray
  #2F4F4F
 
  Shades
 Mix
DarkSlateGrey
  #2F4F4F
 
  Shades
 Mix
LimeGreen
  #32CD32
 
  Shades
 Mix
MediumSeaGreen
  #3CB371
 
  Shades
 Mix
Turquoise
  #40E0D0
 
  Shades
 Mix
RoyalBlue
  #4169E1
 
  Shades
 Mix
SteelBlue
  #4682B4
 
  Shades
 Mix
DarkSlateBlue
  #483D8B
 
  Shades
 Mix
MediumTurquoise
  #48D1CC
 
  Shades
 Mix
Indigo 
  #4B0082
 
  
Shades
 Mix


DarkOliveGreen
  #556B2F
 
  Shades
 Mix
CadetBlue
  #5F9EA0
 
  Shades
 Mix
CornflowerBlue
  #6495ED
 
  Shades
 Mix
MediumAquaMarine
  #66CDAA
 
  Shades
 Mix
DimGray
  #696969
 
  Shades
 Mix
DimGrey
  #696969
 
  Shades
 Mix
SlateBlue
  #6A5ACD
 
  Shades
 Mix
OliveDrab
  #6B8E23
 
  Shades
 Mix
SlateGray
  #708090
 
  Shades
 Mix
SlateGrey
  #708090
 
  Shades
 Mix
LightSlateGray
  #778899
 
  Shades
 Mix
LightSlateGrey
  #778899
 
  Shades
 Mix
MediumSlateBlue
  #7B68EE
 
  Shades
 Mix
LawnGreen
  #7CFC00
 
  Shades
 Mix
Chartreuse
  #7FFF00
 
  Shades
 Mix
Aquamarine
  #7FFFD4
 
  Shades
 Mix
Maroon
  #800000
 
  
Shades
 Mix
Purple
  #800080
 
  
Shades
 Mix
Olive
  #808000
 
  Shades
 Mix
Gray
  #808080
 
  Shades
 Mix
Grey
  #808080
 
  Shades
 Mix
SkyBlue
  #87CEEB
 
  Shades
 Mix
LightSkyBlue
  #87CEFA
 
  Shades
 Mix
BlueViolet
  #8A2BE2
 
  Shades
 Mix
DarkRed
  #8B0000
 
  
Shades
 Mix
DarkMagenta
  #8B008B
 
  
Shades
 Mix
SaddleBrown
  #8B4513
 
  Shades
 Mix
DarkSeaGreen
  #8FBC8F
 
  Shades
 Mix
LightGreen
  #90EE90
 
  Shades
 Mix
MediumPurple
  #9370D8
 
  Shades
 Mix
DarkViolet
  #9400D3
 
  Shades
 Mix
PaleGreen
  #98FB98
 
  Shades
 Mix
DarkOrchid
  #9932CC
 
  Shades
 Mix
YellowGreen
  #9ACD32
 
  Shades
 Mix
Sienna
  #A0522D
 
  Shades
 Mix
Brown
  #A52A2A
 
  Shades
 Mix
DarkGray
  #A9A9A9
 
  Shades
 Mix
DarkGrey
  #A9A9A9
 
  Shades
 Mix


LightBlue
  #ADD8E6
 
  Shades
 Mix
GreenYellow
  #ADFF2F
 
  Shades
 Mix
PaleTurquoise
  #AFEEEE
 
  Shades
 Mix
LightSteelBlue
  #B0C4DE
 
  Shades
 Mix
PowderBlue
  #B0E0E6
 
  Shades
 Mix
FireBrick
  #B22222
 
  Shades
 Mix
DarkGoldenRod
  #B8860B
 
  Shades
 Mix
MediumOrchid
  #BA55D3
 
  Shades
 Mix
RosyBrown
  #BC8F8F
 
  Shades
 Mix
DarkKhaki
  #BDB76B
 
  Shades
 Mix
Silver
  #C0C0C0
 
  Shades
 Mix
MediumVioletRed
  #C71585
 
  Shades
 Mix
IndianRed 
  #CD5C5C
 
  Shades
 Mix
Peru
  #CD853F
 
  Shades
 Mix
Chocolate
  #D2691E
 
  Shades
 Mix
Tan
  #D2B48C
 
  Shades
 Mix
LightGray
  #D3D3D3
 
  Shades
 Mix
LightGrey
  #D3D3D3
 
  Shades
 Mix
PaleVioletRed
  #D87093
 
  Shades
 Mix
Thistle
  #D8BFD8
 
  Shades
 Mix
Orchid
  #DA70D6
 
  Shades
 Mix
GoldenRod
  #DAA520
 
  Shades
 Mix
Crimson
  #DC143C
 
  Shades
 Mix
Gainsboro
  #DCDCDC
  Shades
 Mix
Plum
  #DDA0DD
  Shades
 Mix
BurlyWood
  #DEB887
 
  Shades
 Mix
LightCyan
  #E0FFFF
 
  Shades
 Mix
Lavender
  #E6E6FA
 
  Shades
 Mix
DarkSalmon
  #E9967A
 
  Shades
 Mix
Violet
  #EE82EE
 
  Shades
 Mix
PaleGoldenRod
  #EEE8AA
 
  Shades
 Mix
LightCoral
  #F08080
 
  Shades
 Mix
Khaki
  #F0E68C
 
  Shades
 Mix
AliceBlue
  #F0F8FF
 
  Shades
 Mix
HoneyDew
  #F0FFF0
 
  Shades
 Mix
Azure
  #F0FFFF
 
  Shades
 Mix
SandyBrown
  #F4A460
 
  Shades
 Mix
Wheat
  #F5DEB3
 
  Shades
 Mix


Beige
  #F5F5DC
 
  Shades
 Mix
WhiteSmoke
  #F5F5F5
 
  Shades
 Mix
MintCream
  #F5FFFA
 
  Shades
 Mix
GhostWhite
  #F8F8FF
 
  Shades
 Mix
Salmon
  #FA8072
 
  Shades
 Mix
AntiqueWhite
  #FAEBD7
 
  Shades
 Mix
Linen
  #FAF0E6
 
  Shades
 Mix
LightGoldenRodYellow
  #FAFAD2
 
  Shades
 Mix
OldLace
  #FDF5E6
 
  Shades
 Mix
Red
  #FF0000
 
  Shades
 Mix
Fuchsia
  #FF00FF
 
  Shades
 Mix
Magenta
  #FF00FF
 
  Shades
 Mix
DeepPink
  #FF1493
 
  Shades
 Mix
OrangeRed
  #FF4500
 
  Shades
 Mix
Tomato
  #FF6347
 
  Shades
 Mix
HotPink
  #FF69B4
 
  Shades
 Mix
Coral
  #FF7F50
 
  Shades
 Mix
Darkorange
  #FF8C00
 
  Shades
 Mix
LightSalmon
  #FFA07A
 
  Shades
 Mix
Orange
  #FFA500
 
  Shades
 Mix
LightPink
  #FFB6C1
 
  Shades
 Mix
Pink
  #FFC0CB
 
  Shades
 Mix
Gold
  #FFD700
 
  Shades
 Mix
PeachPuff
  #FFDAB9
 
  Shades
 Mix
NavajoWhite
  #FFDEAD
 
  Shades
 Mix
Moccasin
  #FFE4B5
 
  Shades
 Mix
Bisque
  #FFE4C4
 
  Shades
 Mix
MistyRose
  #FFE4E1
 
  Shades
 Mix
BlanchedAlmond
  #FFEBCD
 
  Shades
 Mix
PapayaWhip
  #FFEFD5
 
  Shades
 Mix
LavenderBlush
  #FFF0F5
 
  Shades
 Mix
SeaShell
  #FFF5EE
 
  Shades
 Mix
Cornsilk
  #FFF8DC
 
  Shades
 Mix
LemonChiffon
  #FFFACD
 
  Shades
 Mix
FloralWhite
  #FFFAF0
 
  Shades
 Mix
Snow
  #FFFAFA
 
  Shades
 Mix
Yellow
  #FFFF00
 
  Shades
 Mix
LightYellow
  #FFFFE0
 
  Shades Mix


Ivory  #FFFFF0 
  Shades Mix
White  #FFFFFF 
  Shades Mix
 
 
HTML 4.01 Quick List 
HTML Basic Document 
<html> 
<head> 

<title>Title of document goes here</title> 
</head> 
<body> 
Visible text goes here... 

</body>  
</html > 
Heading Elements 
<h1>Largest Heading</h1>  
<h2> . . . </h2> 
<h3> . . . </h3> 
<h4> . . . </h4> 
<h5> . . . </h5> 
<h6>Smallest Heading</h6> 
Text Elements 
<p>This is a paragraph</p> 
<br /> (line break) 

<hr /> (horizontal rule) 

<pre>This text is preforma tted</pre>  
Logical Styles 
<em>This text is emphasized</em> 
<strong>This text is strong</strong> 

<code>This is some computer code</code>  


Physical Styles 
<b>This text is bold</b> 
<i>This text is italic</i>  
Links 
Ordinary link: <a href="http://www.ex
ample.com/">Link-text goes here</a> 
Image-link: <a href="http://www.example.co
m/"><img src="URL" alt="Alternate Text" 
/></a> 

Mailto link: <a href="mailto:webmaster@example.com">Send e-mail</a> 
A named anchor: 
<a name="tips">Tips Section</a> 
<a href="#tips">Jump to the Tips Section</a> 
Unordered list 
<ul> 
  <li>Item</li> 

  <li>Item</li> 

</ul>  
Ordered list 
<ol> 
  <li>First item</li> 

  <li>Second item</li> 

</ol>  
Definition list 
<dl> 
  <dt>First term</dt> 

    <dd>Definition</dd> 

  <dt>Next term</dt> 

    <dd>Definition</dd> 

</dl>  
 
Tables 
<table border="1"> 
  <tr> 

    <th>Tableheader</th> 

    <th>Tableheader</th> 


  </tr> 
  <tr> 

    <td>sometext</td> 

    <td>sometext</td> 

  </tr> 
</table> 
Iframe 
<iframe src="demo_iframe.htm" ></iframe> 
Frames 
<frameset cols="25%,75%"> 
  <frame src="page1.htm" /> 

  <frame src="page2.htm" /> 
</frameset> 
Forms 
<form action="http://www.example.co
m/test.asp" method="post/get">  
<input type="text" name="email" 
size="40" maxlength="50" /> 
<input type="password" /> 
<input type="checkbox" 
checked="checked" /> 
<input type="radio" ch
ecked="checked" /> 
<input type="submit" value="Send" /> 

<input type="reset" /> 

<input type="hidden" /> 

 

<select> 

<option>Apples</option> 

<option selected="select
ed">Bananas</option> 
<option>Cherries</option> 
</select> 
<textarea name="comment" rows="60" cols=" 20"></textarea> 
 
</form> 
Entities 
&lt; is the same as < 
&gt; is the same as > 

&#169; is the same as © 


