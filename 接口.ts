interface Iperson{//规范  一个人 应该共有的属性
	name:string,
	sex:string
	
}


//01作为一个方法的参数声明，调用时必须传入接口声明时的属性要求
//定义：用来建立某种代码约定 ，似的其他开发者用来调用某个方法或创建新的类时，必须遵循接口所定义的代码约定

class Person{//遵循规范，创建一个人类
	constructor(public p:Iperson){}
	show(){
		console.log(this.p.name);
	}
}

var p1 = new Person({name:"张三",sex:"男"})
p1.show();





interface obj{//规范
	lable:string,
	code:string
}

function fn(f:obj){//打印功能
	console.log(f.lable);
	console.log(f.code);
}
var f1 = new fn({lable:"hhh",code:"vvv"});


interface Animal{
	name:string,
	eat(),	//规范方法
	show()
}
interface ddd{
	
}
class Tiger implements Animal,ddd{
	name:string;
	constructor(name){
		this.name = name;
	}
	eat(){console.log("吃肉")}
	show(){}
	aa(){}
}


class Sheep implements Animal{
	name:string;
	eat(){console.log("吃草2")}
	show(){}
}


class Preson9{
	constructor(public name:string,public sex:string){}
	eat(){
		console.log(this.name+"is eating")
	}
}
//创建一个人
//var p1 = new Preson();


//创建一群人
var workers1:Preson9[] = [];
var workers2:Array<Preson9> = [];

workers2[0] = new Preson9("张三","男");
workers2[1] = new Preson9("李四","男");

workers2[0].eat();