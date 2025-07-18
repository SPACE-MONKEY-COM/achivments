var counters = document.querySelectorAll('#counter');
var countersOtp = document.querySelectorAll('.counter');

var plus_btn = document.querySelectorAll('#plus-btn');
var minus_btn = document.querySelectorAll('#minus-btn');

// 

var ach_add = document.getElementById("ach_add");
// 

var lvl = {
	lvl_exp: 1000,
	incr: 0.05,

	start_exp: 0,
	start_lvl: 1,

	global_exp: 0,

	now_exp: 0,
	now_lvl: 1,

	max_lvl: 88,
	max_exp: 91380,
}
//  3 1
var _exp = {
	counter_meet: 100,
	counter_sex: 880,
}

// let value = 1000;
// let percentIncrease = 0.05;

// for (let i = 0; i < 88; i++) {
//     value = 1000 * i * (1 + percentIncrease); // Увеличиваем на 5%
//     console.log(`Step ${i + 1}: ${value.toFixed(0)}`);
// }


function exp_add(add_exp){
	let exp = JSON.parse(localStorage.getItem('lvl'));
	console.log(exp)

}


var w = document.querySelectorAll('#minus-btn');
// var w = document.getElementsByName('tew');

// var achievements = [
// 	{
// 		title: "Вечерняя прогулка",
// 		description: "Прогуляться с девочкой вечером.",
// 		checked: 0,
// 		date: 0,
// 		add: 0,
// 	}
// ]


// 

// var counters_data = [0,0]
// localStorage.setItem("achievements", JSON.stringify(achievements));
localStorage.setItem("lvl", JSON.stringify(lvl));
var counters_data = JSON.parse(localStorage.getItem("counters"));
var achievements = JSON.parse(localStorage.getItem("achievements"));
var _achievements = document.getElementById('achievements');
var upd_span = document.getElementById('upd-time');

display();




function display(){
	ppk();
	update_at_display();
}

function ppk(){
	let counters = JSON.parse(localStorage.getItem("counters"));
	document.getElementById('popa-pisya-kaka').innerText = (counters[1]/counters[0]*100).toString().split('.')[0] + "%";
}


function update_at_display(){
	let time = new Date(parseInt(localStorage.getItem('update_at'))).toString().split(' ');
	console.log(time);


	// time = `${time.getDate()}.${time.getMonth()+1}.${time.getFullYear()}, ${time.getHours()}:${time.getMinutes()}`;
	time = `${time[2]} ${time[1]} ${time[3]}, ${time[4].slice(0,5)}`;
	upd_span.innerText = time;
}


function update_at(){
	let time = new Date().getTime();
	localStorage.setItem('update_at', time);
	display();
}





// for(let id in achievements){
// 	console.log(achievements)

// 	let e = achievements[id];
// 	console.log(e.checked)

// 	let input = e.checked ? "checked" : "";
// 	let eclass = e.checked ? "achievement-complete" : "";
// 	let edate = e.checked ? "" : "none";
	
// 	_achievements.innerHTML += `<div class="achievement  br-10" index="${id}">
// 					<label class="flex ${eclass}">
// 						<div class="flex">
// 							<input type="checkbox" name="" id="" ${input}>
// 						</div>
						
// 						<div class="flex column content-center">
// 							<div class="title">${e.title}</div>
// 							<div class="description fs-12 ">${e.description}</div>
// 							<div class="date fs-12 ${edate}">Выполнено: <span>${e.date}</span></div>
// 						</div>
// 					</label>
// 				</div>`
// 	console.log(achievements[id])
// }





console.log(counters_data)

countersOtp[0].innerHTML = counters_data[0];
countersOtp[1].innerHTML = counters_data[1];



function changeCounter(id, f){
	let list = JSON.parse(localStorage.getItem("counters"));

	

	let otp_val = parseInt(countersOtp[id].innerHTML);
	if(f == 0){
		otp_val--;
	}else{
		otp_val++;
	}

	
	countersOtp[id].innerHTML = otp_val;
	list[id] = otp_val;
	localStorage.setItem("counters", JSON.stringify(list));
	update_at();
}

minus_btn[0].onclick = () => {
	changeCounter(0,0)
} 
minus_btn[1].onclick = () => {
	changeCounter(1,0)
} 
plus_btn[0].onclick = () => {
	changeCounter(0,1)
} 
plus_btn[1].onclick = () => {
	changeCounter(1,1)
}

$('.achievement').on( "click", function(e) {
	let list = JSON.parse(localStorage.getItem("achievements"));
	let index = e.delegateTarget.attributes.index.value;

	let input = this.querySelector('input').checked;
	let edate = this.querySelector('.date');
	let d;
	let c; 
	if(input == 1){
		c = 1;
		d = Date.now();
		$(this).addClass( "achievement-complete");
		edate.querySelector('span').innerHTML = d;
		edate.classList.remove("none");

		// .removeClass('none')
		// removeClass("none");
		
	}else{
		$(this).removeClass( "achievement-complete");
		c = 0; d = 0;
	}
	console.log(list)
	list[index]["checked"] = c;
	list[index]["date"] = d;
	localStorage.setItem("achievements", JSON.stringify(list));
});


// JSON.stringify()
// JSON.parse()



// localStorage.setItem("achievements", JSON.stringify(achievements));
// 
// const cat = 
// localStorage.removeItem("myCat");


// ach_add.onclick = () => {
// 	let list = JSON.parse(localStorage.getItem("achievements"));
// 	let ach_title = document.getElementById("ach_title");
// 	let ach_descr = document.getElementById("ach_descr");

// 	// const keys = Object.keys(list);

// 	console.log(list)

// 	let e = 0;
// 	if(!ach_title.value.trim()){
// 		// alert("w")
// 		e = 1;
// 	}
// 	if(!ach_descr.value.trim()){
// 		// alert("w")
// 		e = 1;
// 	}
// 	if(e == 0){

// 		let ach = {
// 			title: ach_title.value,
// 			description: ach_descr.value,
// 			checked: 0,
// 			date: 0,
// 			add: Date.now()
// 		}
// 		list.push(ach);
// 		localStorage.setItem("achievements", JSON.stringify(list));
// 		ach_title.value = '';
// 		ach_descr.value = '';
// 	}
	
// }