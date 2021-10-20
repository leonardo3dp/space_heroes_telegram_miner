// space heroes telegram assistant
// acess https://web.telegram.org/k/
// interact with the SH Bot bot with the /start command
// attach SH BOT on top
// press F12 paste the code into the console and press enter
// don't leave the conversation
// to avoid tab crash use the command chrome://discards/ to disable tab discard 

function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return Array.prototype.filter.call(elements, function(element){
    return RegExp(text).test(element.textContent);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function secondmine(){
console.log('Procurando o Mine');	
var basechat = document.querySelectorAll('#column-center .chats-container.tabs-container .bubbles.scrolled-down .bubbles-date-group');
var chatselect = basechat[basechat.length- 1];
var lstamsgbase = chatselect.querySelectorAll('.bubble.hide-name');
var lastmensage = lstamsgbase[lstamsgbase.length- 1];
var buttonmine = lastmensage.querySelector('.reply-markup-row button.reply-markup-button');
if(typeof(buttonmine) != 'undefined' && buttonmine != null){
buttonmine.click();
}

}


function click_mine(textb){
console.log('Procurando o botão: ',textb);
var re = new RegExp(textb,"s");
var btdmtt = contains('.rows-wrapper.chat-input-wrapper .reply-keyboard button', re);

if(btdmtt.length > 0){
btdmtt[0].click();	
}

setTimeout(secondmine, 4000);	
	
}

var buttons = ['Laxium','Nanomium'];


async function load () { // We need to wrap the loop into an async function for this to work
	for (const color of buttons){
		console.log(color);
		click_mine(color);
		await sleep(11000); 
	}
	
	console.log('Pausa de 2 horas');
	setTimeout(load, 2.05 * 1000 * 60 * 60);
}

load();
