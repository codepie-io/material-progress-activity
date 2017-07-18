!function(s){function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return s[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e={};t.m=s,t.c=e,t.i=function(s){return s},t.d=function(s,e,r){t.o(s,e)||Object.defineProperty(s,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return t.d(e,"a",e),e},t.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},t.p="",t(t.s=4)}([function(s,t){!function(s){"use strict";var t="ca.progress",e=function(){var e=function(t,e){this.isShown_=!1,this.$progress=s(t),this.init_(e)};return e.VERSION="1.0",e.prototype.Classes_={IS_ACTIVE:"md-progress--active",IS_VISIBLE:"md-progress--visible",IS_CIRCLE:"md-progress--circle",INDETERMINATE:"md-progress--indeterminate",PROGRESS_BAR:"md-progress__progressbar",BUFFER_BAR:"md-progress__bufferbar",BUFFER:"md-progress--buffer",AUX_BAR:"md-progress__auxbar",PARENT_OVERLAY:"layout-block--overlay",PARENT_CENTER:"layout-block--center",PARENT_VISIBLE:"layout-block--visible",PARENT_FIXED:"layout-block--fixed"},e.prototype.init_=function(t){if(this.config=s.extend({},this.Default,t),this.config.circle){this.$progress.get(0).innerHTML='<svg class="md-loader-spinner md-loader-spinner--primary" width="55px" height="55px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><circle class="md-loader-spinner__path" fill="none" stroke-width="4" stroke-linecap="round" cx="28" cy="28" r="26"></circle></svg>',this.$progress.addClass(this.Classes_.IS_CIRCLE)}else{s("<div></div>").addClass(this.Classes_.PROGRESS_BAR).appendTo(this.$progress.get(0)),this.$progressBar=this.$progress.find("."+this.Classes_.PROGRESS_BAR);s("<div></div>").addClass(this.Classes_.BUFFER_BAR).appendTo(this.$progress.get(0)),this.$bufferBar=this.$progress.find("."+this.Classes_.BUFFER_BAR)}this.setProgressType_(),this.setParent_()},e.prototype.Default={show:!1,count:!1,type:"determinate",circle:!1,overlay:!1,parent:!1,center:!1,fixed:!1},e.prototype.setProgressType_=function(){if(this.config.circle)switch(this.config.type){case"indeterminate":this.$progress.addClass(this.Classes_.INDETERMINATE),this.indeterminate=!0;break;default:this.determinate=!0}else switch(this.config.type){case"indeterminate":this.$progress.addClass(this.Classes_.INDETERMINATE),this.indeterminate=!0;break;case"buffer":this.$progress.addClass(this.Classes_.BUFFER);var t=s("<div></div>");this.buffer=!0,t.addClass(this.Classes_.AUX_BAR).appendTo(this.$progress.get(0));break;default:this.determinate=!0}},e.prototype.setProgressBar=function(s){if("indeterminate"!=this.config.type){if(isNaN(s)||!(s>=0))throw new Error("invalid value");this.$progressBar.css("width",Math.min(s,100)+"%")}},e.prototype.setProgressBar=e.prototype.setProgressBar,e.prototype.setBufferBar=function(s){if("buffer"==this.config.type){if(!(!isNaN(s)&&s>=0&&s<=100))throw new Error("invalid value");this.$bufferBar.css("width",Math.min(s,100)+"%")}},e.prototype.setBufferBar=e.prototype.setBufferBar,e.prototype.setParent_=function(){if(this.config.parent){var t=s(this.config.target);t.length&&(this.$parentTarget=t,this.config.overlay&&this.$parentTarget.addClass(this.Classes_.PARENT_OVERLAY),this.config.center&&this.$parentTarget.addClass(this.Classes_.PARENT_CENTER),this.config.fixed&&this.$parentTarget.addClass(this.Classes_.PARENT_FIXED))}},e.prototype.show=function(){this.config.parent&&void 0!==this.$parentTarget&&this.$parentTarget.addClass(this.Classes_.PARENT_VISIBLE),this.$progress.addClass(this.Classes_.IS_ACTIVE),window.setTimeout(function(){this.$progress.addClass(this.Classes_.IS_VISIBLE)}.bind(this),200),this.isShown_=!0},e.prototype.show=e.prototype.show,e.prototype.hide=function(){this.$progress.removeClass(this.Classes_.IS_VISIBLE),window.setTimeout(function(){this.$progress.removeClass(this.Classes_.IS_ACTIVE),this.config.parent&&void 0!==this.$parentTarget&&this.$parentTarget.removeClass(this.Classes_.PARENT_VISIBLE)}.bind(this),200),window.setTimeout(function(){this.reset()}.bind(this),400),this.isShown_=!1},e.prototype.hide=e.prototype.hide,e.prototype.toggle=function(){this.isShown_?this.hide():this.show()},e.prototype.toggle=e.prototype.toggle,e.prototype.reset=function(){this.$progressBar.css("width",""),this.buffer&&this.$bufferBar.css("width","")},e.prototype.destroy=function(){this.config.parent&&void 0!==this.$parentTarget&&(this.$parentTarget.removeClass(this.Classes_.PARENT_VISIBLE),this.$parentTarget.removeClass(this.Classes_.PARENT_OVERLAY)),this.$progress.removeClass(this.Classes_.IS_VISIBLE).removeClass(this.Classes_.IS_ACTIVE),this.$progress.data(t,null)},e.prototype.destroy=e.prototype.destroy,e.Plugin_=function(r,i){return this.each(function(){var o=s(this),a=o.data(t);if(!a)if("string"!=typeof r){var n=s.extend({},r,s(this).data());o.data(t,a=new e(this,n))}else o.data(t,a=new e(this,s(this).data()));if("string"==typeof r){if(void 0===a[r])throw new Error('No method named "'+r+'"');void 0!==i?a[r](i):a[r]()}})},e}();s.fn.MaterialProgress=e.Plugin_,s.fn.MaterialProgress.Constructor=e,s.fn.MaterialProgress.noConflict=function(){return s.fn.MaterialProgress=e,e.Plugin_}}(jQuery)},,,,function(s,t,e){s.exports=e(0)}]);