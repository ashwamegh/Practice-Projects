<contact-list>
  <h1>Contacts</h1>
  <!--  looping throught the people array from options passed by parent component  -->
  <ul>
    <li each={p in opts.people}>{p.first} {p.last}</li>
  </ul>
  <script>
  this.on('mount', () => {
    console.log("Riot mount event fired");
    opts.callback(this);
  });

  this.on('data_loaded', (peeps) => {
    opts.people = peeps;
    this.update();
  });

  </script>
</contact-list>