//    Properties:
//        text: quote
//        cite: citation
//        citeHref: cittation link
(function(undefined) {
    var viewType = "nav";
    
    window.gaffa.views = window.gaffa.views || {};
    window.gaffa.views[viewType] = window.gaffa.views[viewType] || newView();
    
    function createElement(viewModel) {
        var classes = "navbar";

        var mainBar = $(document.createElement('div')).addClass(classes),
            innerBar = $(document.createElement('div')).addClass('navbar-inner'),
            container = $(document.createElement('div')).addClass('container'),
            brand = $(document.createElement('a')).addClass('brand').attr('href', '#'),
            renderedElement = mainBar.append(innerBar.append(container.append(brand)))[0];
        
        //viewModel.viewContainers.content.element = renderedElement;
                
        return renderedElement;
    }

    function newView() {
        
        function view() {
        }    
        
        view.prototype = {
            update: {
                text: window.gaffa.propertyUpdaters.string("text", function(viewModel, value){
                    $(viewModel.renderedElement).find('a').html(value);
                }),
                fixed: function(viewModel, value, firstRun){
                    if(viewModel.properties.fixed.value !== value || firstRun){
                        viewModel.properties.fixed.value = value;
                        var element = $(viewModel.renderedElement);
                        if(element){
                           if (viewModel.properties.fixed.value)
                            {
                                element.addClass("navbar-fixed-top");
                            }
                        }
                    } 
                },
                alignment: function(viewModel, value, firstRun){
                    if(viewModel.properties.alignment.value !== value || firstRun){
                        viewModel.properties.alignment.value = value;
                        var element = $(viewModel.renderedElement);
                        if(element){                            
                            element.removeClass("pull-right pull-left");
                            switch (viewModel.properties.alignment.value)
                            {
                                case "right":
                                    element.addClass("pull-right");
                                    break;
                                case "left":
                                    element.addClass("pull-left");
                                    break;
                                default:
                                    break;
                            }
                        }
                    }                     
                }
            },
            defaults: {
                properties: {
                    text: {},
                    alignment: {},
                    fixed: {}
                }
            }
        };
        
        $.extend(true, view.prototype, window.gaffa.views.base(viewType, createElement), view.prototype);
                
        return new view();
    }
})();