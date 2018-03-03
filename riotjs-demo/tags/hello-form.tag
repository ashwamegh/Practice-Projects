<hello-form>
<form onsubmit={sayHello}>
  <input type="text" ref="greet" name="greet">
  <button type="submit">Say Hello</button>
</form>
<h4>Hello {this.greeting} </h4>

<script>
 this.sayHello = (event) => {
    event.preventDefault();
    this.greeting = this.refs.greet.value;
    document.querySelector('input[name="greet"]').value = '';
  }
  /*this.sayHello = function(e){
    e.preventDefault();
    this.greeting = this.refs.greet.value;
    this.greet = '';
  } */
</script>
</hello-form>