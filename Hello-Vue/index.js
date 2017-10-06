let app = new Vue({
  el:'#root',
  data: {
    message:"Hello Vue",
    tagline:"Vue is Sexy",
    nameArray: ['John', 'Sita', 'Geeta', 'Sunita'],
    nameInput:'',
    title:"Now the title is being set through javascript",
    className:"color-red",
    disabled:false,
    tasks:[
      {description:"Go to Office", completed: false},
      {description:"Take a brush", completed: true},
      {description:"Freshen up", completed: false},
      {description:"Make your breakfast", completed: true},
      {description:"Get a bath", completed: false},
      {description:"Fill your bottle", completed: false},
      {description:"Pack your bags and go", completed: false},
    ],
  },

  methods:{
  	addName(){
  		this.nameArray.push(this.nameInput);
  		this.nameInput = '';
  	},
    toggleDisable(){
      this.disabled = !this.disabled;
    }
  },
  computed:{
    incompleteTasks(){
      return this.tasks.filter(task => !task.completed);
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
