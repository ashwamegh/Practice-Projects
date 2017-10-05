let app = new Vue({
  el:'#root',
  data: {
    message:"Hello World",
    tagline:"Vue is Sexy",
    nameArray: ['John', 'Sita', 'Geeta', 'Sunita'],
    nameInput:'',
  },

  methods:{
  	addName(){
  		this.nameArray.push(this.nameInput);
  		this.nameInput = '';
  	}
  }
//   mounted (){
//   	document.getElementById('addName').addEventListener('click', () => {
// 	const name = document.getElementById('nameInput');
// 	app.nameArray.push(name.value);
// 	name.value = "";
// });
//   }
});
