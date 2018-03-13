var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var Articles = {
    'Article1': {
    title: 'Article1 | Harshin Shah',
    heading: 'Article1',
    date: '13 Mar 2018',
    content:     
    `<p>
    This is the content.This is the content.This is the content.This is the content.This is the content.
    This is the content.This is the content.This is the content.This is the content.
    This is the content.This is the content.
    </p>`
    },
    'Article2': {
    title: 'Article2 | Karan Rawal',
    heading: 'Article2',
    date: '15 Mar 2018',
    content:     
    `<p>
    This is the content.This is the content.This is the content.This is the content.This is the content.
    This is the content.This is the content.This is the content.This is the content.
    This is the content.This is the content.
    </p>`
    
    },
     
    'Article3':  {
    title: 'Article3 | Tirth Patel',
    heading: 'Article3',
    date: '17 Mar 2018',
    content:     
    `<p>
    This is the content.This is the content.This is the content.This is the content.This is the content.
    This is the content.This is the content.This is the content.This is the content.
    This is the content.This is the content.
    </p>`
    }
};
function createTemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var content = data.comtent;

var htmlTemplate =` 
<html>
<head>
<title> 
  ${title}
</title>
 <link href="/ui/style.css" rel="stylesheet" />
</head>

<body>
    <div>
        <a href="/">Home</a>
    </div>
<h1>${heading}</h1>
<div class="container">
    ${content}
</div>
</body>
</html>` ;
return htmlTemplate;

}

app.get('/ArticleName', function (req, res) {
    //ArticleName == Article1
    //Articles[ArticleName == {} contet object for Article1
    var ArticleName = req.params.ArticleName; 
  res.send(createTemplateArticles(ArticleName));
});

app.get('/Article2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article2.html'));
});

app.get('/Article3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
