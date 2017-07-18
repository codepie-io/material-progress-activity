(function ($) {

  "use strict"

  let DATA_KEY = 'ca.progress'
  let EVENT_KEY = DATA_KEY+'.'

  let Selector = {
    PROGRESS: '.md-progress'
  }

  let MaterialProgress = function () {

    let setMeow = function(val){
      alert(val)
    }

    let MaterialProgress = function (element, config) {
      this.isShown_ = false
      this.$progress = $(element)
      this.init_(config)
    }

    MaterialProgress.VERSION = '1.0'

    MaterialProgress.prototype.Classes_ = {
      IS_ACTIVE: 'md-progress--active',
      IS_VISIBLE: 'md-progress--visible',
      INDETERMINATE: 'md-progress--indeterminate',
      PROGRESS_BAR: 'md-progress__progressbar',
      BUFFER_BAR: 'md-progress__bufferbar',
      BUFFER: 'md-progress--buffer',
      AUX_BAR: 'md-progress__auxbar',
      PARENT_OVERLAY: 'layout-block--overlay',
      PARENT_VISIBLE: 'layout-block--visible'
    }

    MaterialProgress.prototype.init_ = function (config) {
      this.config = $.extend({}, this.Default, config)

      var progressbar = $( "<div></div>")
      progressbar.addClass(this.Classes_.PROGRESS_BAR).appendTo(this.$progress.get(0))
      this.$progressBar = this.$progress.find('.'+this.Classes_.PROGRESS_BAR)
      var bufferbar = $( "<div></div>")
      bufferbar.addClass(this.Classes_.BUFFER_BAR).appendTo(this.$progress.get(0))
      this.$bufferBar = this.$progress.find('.'+this.Classes_.BUFFER_BAR)
      this.setProgressType_()
      this.setParent_()
    }

    MaterialProgress.prototype.Default = {
      show: false,
      count: false,
      type: 'determinate', // indeterminate , buffer
      circle: false,
      overlay: false,
      parent: true
    }

    MaterialProgress.prototype.setProgressType_ = function(){
      switch (this.config.type){
        case 'indeterminate':
          this.$progress.addClass(this.Classes_.INDETERMINATE)
          this.indeterminate = true
          break;
        case 'buffer':
          this.$progress.addClass(this.Classes_.BUFFER)
          var auxbar = $( "<div></div>")
          this.buffer = true
          auxbar.addClass(this.Classes_.AUX_BAR).appendTo(this.$progress.get(0))
          break
        default:
          this.determinate = true
          break
      }
    }

    MaterialProgress.prototype.setProgressBar = function(val){
      if(this.config.type == 'indeterminate' )
          return ;
      if(!isNaN(val) && val >= 0){
        this.$progressBar.css('width', Math.min(val, 100)+'%');
      }else{
        throw new Error('invalid value');
        return ;
      }
    }
    MaterialProgress.prototype['setProgressBar'] = MaterialProgress.prototype.setProgressBar

    MaterialProgress.prototype.setBufferBar = function(val){
      if(this.config.type != 'buffer')
        return ;
      if(!isNaN(val) && val >= 0 && val<=100){
        this.$bufferBar.css('width', Math.min(val, 100)+'%');
      }else{
        throw new Error('invalid value');
        return ;
      }
    }
    MaterialProgress.prototype['setBufferBar'] = MaterialProgress.prototype.setBufferBar

    MaterialProgress.prototype.setParent_ = function () {
      if(this.config.parent){
        let parentTarget = $(this.config.target)
        if(parentTarget.length){
          this.$parentTarget = parentTarget
          if(this.config.overlay){
            this.$parentTarget.addClass(this.Classes_.PARENT_OVERLAY)
          }
        }
      }
    }

    MaterialProgress.prototype.show = function (){
      if(this.config.parent && this.$parentTarget !== undefined){
        this.$parentTarget.addClass(this.Classes_.PARENT_VISIBLE)
      }
      this.$progress.addClass(this.Classes_.IS_ACTIVE)
      window.setTimeout(function () {
        this.$progress.addClass(this.Classes_.IS_VISIBLE)
      }.bind(this), 200)
      this.isShown_ = true
    }
    MaterialProgress.prototype['show'] = MaterialProgress.prototype.show

    MaterialProgress.prototype.hide = function (){
      this.$progress.removeClass(this.Classes_.IS_VISIBLE)
      window.setTimeout(function () {
        this.$progress.removeClass(this.Classes_.IS_ACTIVE)
        if(this.config.parent && this.$parentTarget !== undefined){
          this.$parentTarget.removeClass(this.Classes_.PARENT_VISIBLE)
        }
      }.bind(this), 200)

      window.setTimeout(function () {
        this.reset()
      }.bind(this), 400)

      this.isShown_ = false
    }
    MaterialProgress.prototype['hide'] = MaterialProgress.prototype.hide

    MaterialProgress.prototype.toggle = function () {
      this.isShown_ ? this.hide() : this.show()
    }
    MaterialProgress.prototype['toggle'] = MaterialProgress.prototype.toggle

    MaterialProgress.prototype.reset = function () {
      this.$progressBar.css('width','')
      if(this.buffer){
        this.$bufferBar.css('width','')
      }
    }

    MaterialProgress.prototype.destroy = function () {
      if(this.config.parent && this.$parentTarget !== undefined){
        this.$parentTarget.removeClass(this.Classes_.PARENT_VISIBLE)
        this.$parentTarget.removeClass(this.Classes_.PARENT_OVERLAY)
      }
      this.$progress.removeClass(this.Classes_.IS_VISIBLE).removeClass(this.Classes_.IS_ACTIVE)
      this.$progress.data(DATA_KEY, null)
    }
    MaterialProgress.prototype['destroy'] = MaterialProgress.prototype.destroy

    MaterialProgress.Plugin_ = function Plugin_(config, value) {
      return this.each(function () {
        let $this = $(this)
        let data  = $this.data(DATA_KEY)
        if (!data){
          if (typeof config !== 'string') {
            var dataConfig = $.extend({}, config, $(this).data())
            $this.data(DATA_KEY, (data = new MaterialProgress(this, dataConfig)))
          }else {
            $this.data(DATA_KEY, (data = new MaterialProgress(this, $(this).data())))
          }
        }
        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"')
          }
          if(value!== undefined){
            data[config](value)
          } else {
            data[config]()
          }
        }
      })
    }
    return MaterialProgress

  }()

  $.fn.MaterialProgress = MaterialProgress.Plugin_
  $.fn.MaterialProgress.Constructor = MaterialProgress
  $.fn.MaterialProgress.noConflict = function () {
    $.fn.MaterialProgress = MaterialProgress
    return MaterialProgress.Plugin_
  }
}( jQuery ))