var counters = document.querySelectorAll('#counter');
var countersOtp = document.querySelectorAll('.counter');
var plus_btn = document.querySelectorAll('#plus-btn');
var minus_btn = document.querySelectorAll('#minus-btn');
var ach_add = document.getElementById("ach_add");

var _exp = {
	counters: [100, 880],
}

// var lvl = {
// 	base: 1000,
// 	incr: 0.06,
// 	max_lvl: 88,

// 	lvl: 1,
// 	global_exp: 0,
// 	update_at: 0,
// }

// localStorage.setItem("lvl", JSON.stringify(lvl));


function exp_add(type, exp){
	let _exp = JSON.parse(localStorage.getItem('lvl'));
	
	if(type == 0){
		_exp.global_exp -= exp;
	}else{
		_exp.global_exp += exp;
	}
	_exp.update_at = time();
	localStorage.setItem("lvl", JSON.stringify(_exp));

	display();
}

function lvl_display(){
	let _exp = JSON.parse(localStorage.getItem('lvl'));
	let lvl = _exp.lvl;
	let exp = _exp.global_exp
	let base = _exp.base;

	while(true){
		var f = lvl * base * 1.06;
		if(exp >= f){
			exp -= f;
			lvl++;
		}else{
			break;
		}
	}

	document.getElementById('profile').querySelector('.progress-bar').style.width = Math.floor((exp/f*100)) + "%";
	document.getElementById('level').innerText = lvl;
}

var w = document.querySelectorAll('#minus-btn');

var achievements = JSON.parse(localStorage.getItem("achievements"));
var _achievements = document.getElementById('achievements');
var upd_span = document.getElementById('upd-time');

display();



function display(){
	ppk();
	update_at_display();
	counters_display();
	lvl_display();
}

function counters_display(){
	var counters_data = JSON.parse(localStorage.getItem("counters"));
	countersOtp[0].innerHTML = counters_data[0];
	countersOtp[1].innerHTML = counters_data[1];
}

function ppk(){
	let counters = JSON.parse(localStorage.getItem("counters"));
	document.getElementById('popa-pisya-kaka').innerText = (counters[1]/counters[0]*100).toString().split('.')[0] + "%";
}

function update_at_display(){
	let time = new Date(parseInt(localStorage.getItem('update_at'))).toString().split(' ');
	console.log(time);
	time = `${time[2]} ${time[1]} ${time[3]}, ${time[4].slice(0,5)}`;
	upd_span.innerText = time;
}

function time(){
	return new Date().getTime();
}

function update_at(){
	let time = new Date().getTime();
	localStorage.setItem('update_at', time);
	display();
}

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
	exp_add(f, _exp.counters[id]);
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
