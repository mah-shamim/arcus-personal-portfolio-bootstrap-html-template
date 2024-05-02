// This JavaScript code enables the typewriter function //


// Type Writer 1 //

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["a Developer", "a Designer","a Photographer","a Freelancer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
	if(charIndex < textArray[textArrayIndex].length) {
		if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
		typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	}
	else{
		cursorSpan.classList.remove("typing");
		setTimeout(erase, newTextDelay);
	}
} 
function erase() {
	if (charIndex > 0) {
		typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
		charIndex--;
		setTimeout(erase, erasingDelay);
	}
	else {
		cursorSpan.classList.remove("typing");
		textArrayIndex++;
		if (textArrayIndex>=textArray.length) textArrayIndex=0;
		setTimeout(type, typingDelay + 1100);
	}
}
document.addEventListener("DOMContentLoaded", function(){
	if(textArray.length)setTimeout(type, newTextDelay + 250);
	
});

// Type Writer 2 //

const typed_TextSpan = document.querySelector(".about-typed-text");
const cursor_Span = document.querySelector(".cursor");
const text_Array = ["Developer", "Designer","Photographer","Freelancer"];
const typing_Delay = 200;
const erasing_Delay = 100;
const newText_Delay = 2000;
let textArray_Index = 0;
let char_Index = 0;

function typ() {
	if(char_Index < text_Array[textArray_Index].length) {
		if (!cursor_Span.classList.contains("typing")) cursor_Span.classList.add("typing");
		typed_TextSpan.textContent += text_Array[textArray_Index].charAt(char_Index);
		char_Index++;
		setTimeout(typ, typing_Delay);
	}
	else{
		cursor_Span.classList.remove("typing");
		setTimeout(eras, newText_Delay);
	}
} 
function eras() {
	if (char_Index > 0) {
		typed_TextSpan.textContent = text_Array[textArray_Index].substring(0,char_Index-1);
		char_Index--;
		setTimeout(eras, erasing_Delay);
	}
	else {
		cursor_Span.classList.remove("typing");
		textArray_Index++;
		if (textArray_Index>=text_Array.length) textArray_Index=0;
		setTimeout(typ, typing_Delay + 1100);
	}
}
document.addEventListener("DOMContentLoaded", function(){
	if(text_Array.length)setTimeout(typ, newText_Delay + 250);
	
});