const express = require('express'),
      swig = require('swig'),
      app = express(),
      riot = require('riot');


app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname+'/views');
  
app.get('/', (req, res) => {
  // const sampleHtml = riot.render(helloworldtag);
  const hello = riot.require('./hello-world.tag');  
  const sampleHtml = riot.render(hello);
 res.render('index', {tagHtml: sampleHtml});
})

app.listen(8080, ()=>{
  console.log("Server is running at 8080");
})