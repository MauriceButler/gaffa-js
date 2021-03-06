"use strict";

var Gaffa = require('gaffa'),
    crel = require('crel'),
    viewType = 'label';
    
function Label(){}
Label = Gaffa.createSpec(Label, Gaffa.View);
Label.prototype.type = viewType;

Label.prototype.render = function(){        
    var renderedElement = crel('label');
    
    this.renderedElement = renderedElement;
    
    this.__super__.render.apply(this, arguments);
};

Label.prototype.text = new Gaffa.Property(function(viewModel, value){
    viewModel.renderedElement.textContent = value || "";
});

Label.prototype.labelFor = new Gaffa.Property(function (viewModel, value) {
    if (value === null || value === undefined) {
        viewModel.renderedElement.removeAttribute("labelFor");
    } else {
        viewModel.renderedElement.setAttribute("labelFor", value);
    }
});

module.exports = Label;