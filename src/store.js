const STORAGE_KEY="todos-vuejs"   //es6里面的语法，定义常量
export default{
	fetch(){
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	},
	save(items){
		window.localStorage.setItem(STORAGE_KEY, JSON.stringfy(items))
	}
}