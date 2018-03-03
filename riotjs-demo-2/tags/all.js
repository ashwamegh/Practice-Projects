riot.tag2('contact-list', '<h1>Contacts</h1> <ul> <li each="{p in opts.people}">{p.first} {p.last}</li> </ul>', '', '', function(opts) {
  this.on('mount', () => {
    console.log("Riot mount event fired");
    opts.callback(this);
  });

  this.on('data_loaded', (peeps) => {
    opts.people = peeps;
    this.update();
  });

});