var e=document.getElementById("thumbs"),t=document.getElementById("largeImg");e&&t&&e.addEventListener("click",function(e){var n=e.target;if(n instanceof Element){var r=n.closest("a");if(r){e.preventDefault();var c=r.getAttribute("href");c&&(t.src=c,Object.defineProperty(t,"src",{get:function(){return c},configurable:!0}))}}});
//# sourceMappingURL=index.331be406.js.map
