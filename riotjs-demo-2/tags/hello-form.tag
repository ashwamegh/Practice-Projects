<hello-form>
<form onsubmit={sayHello}>
  <input type="text" ref="greet" name="greet">
  <button type="submit">Say Hello</button>
</form>
<h5>Hello {this.greeting} </h5>

<script>
 sayHello (event) {
    event.preventDefault();
    this.greeting = this.refs.greet.value;
    document.querySelector('input[name="greet"]').value = '';
}
</script>
</hello-form>