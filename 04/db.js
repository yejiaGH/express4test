const repos = require('./data');
const fs = require('fs');

module.exports = {
	store() {
		fs.writeFileSync(__dirname + '/data.json', JSON.stringify(repos));
	},
	get(index){
		return repos[index];
	},
	get list(){
		return repos;
	},
	add(article){
		repos.push(article);
		this.store();
	},
	del(index){
		repos[index] = null;
		this.store();
	},
	update(index,newArticle){
		repos[index] = newArticle;
		this.store();
	}
};