riot.tag2('hello-form', '<form onsubmit="{sayHello}"> <input type="text" ref="greet" name="greet"> <button type="submit">Say Hello</button> </form> <h4>Hello {this.greeting} </h4>', '', '', function(opts) {
 this.sayHello = (event) => {
    event.preventDefault();
    this.greeting = this.refs.greet.value;
    document.querySelector('input[name="greet"]').value = '';
  }

});
riot.tag2('hello-world', '<h1>Hello {opts.greet}</h1> <h3>Its Sat, 3rd March Today</h3>', '', '', function(opts) {
});