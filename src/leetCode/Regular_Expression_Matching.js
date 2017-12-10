const buildSyntaxTree = (regex) => {
	function Node(value) {
		this.val = value;
		this.next = null;
		this.nextSkip = null;
	}

	let syntaxTree = null, currentNode = null;
	[...regex].forEach((char) => {
		if (char === '*') {
			currentNode.next = currentNode;
		} else {
			let node = new Node(char);
			if (syntaxTree) {
				if (currentNode.next) {
					if(currentNode.val !== char){
						currentNode.nextSkip = node;
					}
				} else {
					currentNode.next = node;
				}
			} else {
				syntaxTree = node;
			}
			currentNode = node;
		}

	});
	return syntaxTree;
};


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
	const syntaxTree = buildSyntaxTree(p);
	if (syntaxTree) {
		let isMatch = true, currentNode = syntaxTree;
		[...s].forEach((char) => {
			if (!isMatch ) {
				return;
			}
			if(!currentNode){
				isMatch = false;
				return;
			}
			let val = currentNode.val;
			while (val) {
				if (val !== '.' && val !== char) {
					currentNode = currentNode.nextSkip;

					val = currentNode ? currentNode.val : null;
				} else {
					val = null;
				}

			}
			if (!currentNode) {
				isMatch = false;
				return;
			}
			currentNode = currentNode.next;
		});
		let isRegexMatch = true;
		while(currentNode){
			if(currentNode.next === currentNode){
				currentNode = currentNode.nextSkip;
			}else{

			isRegexMatch = currentNode.val === s[s.length-1] && currentNode.nextSkip === null;
			currentNode = null;
			}
		}
		return isMatch && isRegexMatch;
	} else {
		return false;
	}


};

console.log(isMatch('aaa', 'aaaa'));

