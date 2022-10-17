// let David = {
// 	name: `anun`,
// 	age: 12,
// 	men:true,
// 	myFunction:function(){
// 		return `${this.name} and ${David.age}`
// 	},
// 	friend: {
// 		name:'Norik',
// 		age:'10'
// 	}
// }


// console.log(David.name)
// console.log(David['name'])
// David.k = 'kkk'
// console.log(David.k)
// console.log(David.myFunction())
// console.log(David.friend.name)



let obj = {
	ashx:600000,
	tokos: function(){
		return (this.ashx * 21)/100
	},

	soc: function(){
		if(this.ashx <= 500000){
		return (this.ashx * 4,5)/100
	}else if(this.ashx > 500000 && this.ashx <= 1020000){
			
			return (this.ashx * 10/100) - 27500
	
	} else{

		return 74500
	}
},

	droshm:function(){
		if(this.ashx <= 100000){
			return 1500
		}else if(this.ashx>100000 && this.ashx<= 200000){
			return 3000
		}else if(this.ashx>200000 && this.ashx<= 500000){
			return 5500
		}else if(this.ashx>500000 && this.ashx<= 1000000){
			return 8500
		}else if(this.ashx>1000000){
			return 15000
		}
	},
	maqur:function(){
		return(this.ashx-(this.tokos()+this.soc()+this.droshm()))
	},

	
	
}





document.getElementById('input').addEventListener('keyup', function(){

document.getElementById('div').innerHTML=obj.tokos();
document.getElementById('div2').innerHTML=obj.soc();
document.getElementById('div3').innerHTML=obj.droshm();
document.getElementById('div4').innerHTML=obj.maqur();
	obj.ashx = +input.value
})




console.log(obj.tokos())
console.log(obj.soc())
console.log(obj.droshm())
console.log(obj.maqur())





