self.on("click", function (node, data) {
	var str = '';
	var paragrafos = [];
	paragrafos[0] = "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.\n\n"; 
	paragrafos[1] = "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. Ut scelerisque neque et turpis posuere pulvinar pellentesque nibh ullamcorper. Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.\n\n"; 
	paragrafos[2] = "Casamentiss faiz malandris se pirulitá, Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer Ispecialista im mé intende tudis nuam golada, vinho, uiski, carirí, rum da jamaikis, só num pode ser mijis. Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n\n"; 
	paragrafos[3] = "Cevadis im ampola pa arma uma pindureta. Nam varius eleifend orci, sed viverra nisl condimentum ut. Donec eget justis enim. Atirei o pau no gatis. Viva Forevis aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Copo furadis é disculpa de babadis, arcu quam euismod magna, bibendum egestas augue arcu ut est. Delegadis gente finis. In sit amet mattis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis. Pellentesque viverra accumsan ipsum elementum gravidis.\n\n"; 
	paragrafos[4] = "Forevis aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Copo furadis é disculpa de babadis, arcu quam euismod magna, bibendum egestas augue arcu ut est. Etiam ultricies tincidunt ligula, sed accumsan sapien mollis et. Delegadis gente finis. In sit amet mattis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis. Pellentesque viverra accumsan ipsum elementum gravida. Quisque vitae metus id massa tincidunt iaculis sed sed purus. Vestibulum viverra lobortis faucibus. Vestibulum et turpis.\n\n"; 
	paragrafos[5] = "Vitis e adipiscing enim. Nam varius eleifend orci, sed viverra nisl condimentum ut. Donec eget justo enim. Atirei o pau no gatis. Quisque dignissim felis quis sapien ullamcorper varius tempor sem varius. Vivamus lobortis posuere facilisis. Sed auctor eros ac sapien sagittis accumsan. Integer semper accumsan arcu, at aliquam nisl sollicitudin non. Nullam pellentesque metus nec libero laoreet vitae vestibulum ante ultricies. Phasellus non mollis purus. Integer vel lacus dolor. Proin eget mi nec mauris convallis ullamcorper vel ac nulla. Nulla et semper metus.\n\n"; 
	
	item_paragrafo = Math.floor( ( Math.random() * (paragrafos.length - 1)));  
	str = paragrafos[item_paragrafo].split(".")[ (Math.floor( Math.random() * item_paragrafo))];

	
	if(node.type == 'text' || node.type == 'textarea'){
	  node.value = str;
	}else{
	  self.postMessage(str);
	}
});