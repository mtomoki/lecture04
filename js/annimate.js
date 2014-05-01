
var endFlipFoxkeh = function(){

	//foxkehという名前をslidein-foxkehという階層の中のimgに命名する。
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	
	//foxkehのanimationedイベントのendFlipFoxkehというインターフェースを外す。
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);
	
	//foxkehのクラス属性を""(空)にする
	foxkeh.setAttribute("class", "");
};

var endSlideinFoxkehAndStartFlipFoxkeh = function(){

	//foxkehという名前をslidein-foxkehという階層の中のimgに命名する。
	var foxkeh = document.querySelector("#slidein-foxkeh img");

	////foxkehのanimationedイベントのendSlideinandStartFlipFoxkehというインターフェースを外す。
	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	
	//foxkehに"animationend"というイベントが起きたら、endFlipFoxkehに通知を出す。
	foxkeh.addEventListener("animationend", endFlipFoxkeh);
	
	//foxkehの属性に新しく"flip"を追加する。
	foxkeh.setAttribute("class", "flip");
};


var startSlideinFoxkeh = function(){
	
	//foxkehという名前をslidein-foxkehという階層の中のimgに命名する。
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	
	//foxkehのクラス属性をslideinに変更。
	foxkeh.setAttribute("class", "slidein");
	
	//foxkehに"animationend"というイベントが起きたら、endSlideinFoxkehAndStartFlipFoxkehに通知を出す。
	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
};



//slidein-foxkehという階層の中のbuttonを、slideinFoxkehButtonと宣言する。
var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");

//slideinFoxkehButtonにclickというイベントが起きたらstartSlideinFoxkehに通知を出す。
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);

