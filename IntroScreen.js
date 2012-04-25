{
    "model": {
        "viewStrings": {
            "showHideViewData": "{\"type\":\"container\",\"properties\":{\"classes\":{\"value\":\"span12\"}},\"views\":{\"content\":[{\"type\":\"heading\",\"properties\":{\"text\":{\"binding\":\"stuff/thirdHeading\"}}},{\"type\":\"paragraph\",\"views\":{\"content\":[[\"It is a \"\"],{\"type\":\"text\",\"properties\":{\"text\":{\"binding\":\"stuff/thirdHeading\"}}},[\"\", though the implications might not be obvious straight away.<br /><br />Check out this next bit of form:\"]]}},{\"type\":\"paragraph\",\"views\":{\"content\":[{\"type\":\"form\",\"views\":{\"content\":[{\"type\":\"textbox\",\"properties\":{\"value\":{\"binding\":\"stuff/thirdHeading\"}},\"actions\":{\"change\":[{\"type\":\"set\",\"bindings\":{\"setTo\":{\"binding\":\"stuff/show4thContainer\"},\"setFrom\":{\"value\":true}}},{\"type\":\"set\",\"bindings\":{\"setTo\":{\"binding\":\"stuff/show5thContainer\"},\"setFrom\":{\"value\":true}}}]}},{\"type\":\"button\",\"properties\":{\"text\":{\"value\":\"Change the text for me (I'm lazy)\"}},\"actions\":{\"click\":[{\"type\":\"set\",\"bindings\":{\"setTo\":{\"binding\":\"stuff/thirdHeading\"},\"setFrom\":{\"value\":\"Brool Story Co...\"}}},{\"type\":\"set\",\"bindings\":{\"setTo\":{\"binding\":\"stuff/show4thContainer\"},\"setFrom\":{\"value\":true}}},{\"type\":\"set\",\"bindings\":{\"setTo\":{\"binding\":\"stuff/show5thContainer\"},\"setFrom\":{\"value\":true}}}]}}]}}]}},{\"type\":\"paragraph\",\"views\":{\"content\":[[\"<b>Change the value of the textbox (and then tab out to trigger the changed event)</b>\"]]}}]}}",
            "listViewData": "{\"type\":\"list\",\"binding\":\"stuff/anArray\",\"properties\":{\"list\":{\"template\":{\"type\":\"textbox\",\"properties\":{\"value\":{\"binding\":\"~\"}}},\"binding\":\"stuff/anArray\"}}}"
        },
        "stuff": {
            "show4thContainer": false,
            "show5thContainer": false,
            "someBool": true,
            "someOtherBool": false,
            "someProperty": "a heading",
            "thirdHeading": "Cool story",
            "formattedHeading": [
                "some",
                "kinda",
                "heading"
            ],
            "anArray": [
                "value1",
                "value2",
                "value3"
            ],
            "radioOptions": [
                {
                    "value": "option1",
                    "label": "option 1"
                },
                {
                    "value": "option2",
                    "label": "option 2"
                },
                {
                    "value": "option3",
                    "label": "option 3"
                }
            ],
            "gridData": {
                "columns": [
                    "col1",
                    "col2",
                    "col3",
                    "col4",
                    "col5",
                    "col6",
                    "col7",
                    "col8",
                    "col9",
                    "col10",
                    "col11",
                    "col12",
                    "col13",
                    "col14"
                ],
                "rows": [
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    }
                ]
            }
        },
        "original": {
            "show4thContainer": false,
            "show5thContainer": false,
            "someBool": true,
            "someOtherBool": false,
            "someProperty": "a heading",
            "thirdHeading": "Cool story",
            "formattedHeading": [
                "some",
                "kinda",
                "heading"
            ],
            "anArray": [
                "value1",
                "value2",
                "value3"
            ],
            "radioOptions": [
                {
                    "value": "option1",
                    "label": "option 1"
                },
                {
                    "value": "option2",
                    "label": "option 2"
                },
                {
                    "value": "option3",
                    "label": "option 3"
                }
            ],
            "gridData": {
                "columns": [
                    "col1",
                    "col2",
                    "col3",
                    "col4",
                    "col5",
                    "col6",
                    "col7",
                    "col8",
                    "col9",
                    "col10",
                    "col11",
                    "col12",
                    "col13",
                    "col14"
                ],
                "rows": [
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    },
                    {
                        "columns": [
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data",
                            "data"
                        ]
                    }
                ]
            }
        }
    },
    "behaviours": [
        {
            "binding": "stuff",
            "type": "modelChange",
            "actions": [
                {
                    "type": "toJson",
                    "bindings": {
                        "setFrom": {
                            "binding": "stuff"
                        },
                        "setTo": {
                            "binding": "things/jsonStuff"
                        }
                    }
                }
            ]
        },
        {
            "binding": "stuff",
            "type": "modelChange",
            "actions": [
                {
                    "type": "store",
                    "location": "local",
                    "path": "stuffModel",
                    "bindings": {
                        "setFrom": {
                            "binding": "stuff"
                        }
                    }
                }
            ]
        },
        {
            "binding": "viewStrings",
            "type": "modelChange",
            "actions": [
                {
                    "type": "store",
                    "location": "local",
                    "path": "viewStringsModel",
                    "bindings": {
                        "setFrom": {
                            "binding": "viewStrings"
                        }
                    }
                }
            ]
        },
        {
            "binding": "things",
            "type": "modelChange",
            "actions": [
                {
                    "type": "store",
                    "location": "local",
                    "path": "thingsModel",
                    "bindings": {
                        "setFrom": {
                            "binding": "things"
                        }
                    }
                }
            ]
        },
        {
            "binding": "stuff",
            "type": "pageLoad",
            "actions": [
                {
                    "type": "fetch",
                    "location": "local",
                    "path": "stuffModel",
                    "bindings": {
                        "setTo": {
                            "binding": "stuff"
                        }
                    }
                },
                {
                    "type": "fetch",
                    "location": "local",
                    "path": "thingsModel",
                    "bindings": {
                        "setTo": {
                            "binding": "things"
                        }
                    }
                },
                {
                    "type": "fetch",
                    "location": "local",
                    "path": "viewStringsModel",
                    "bindings": {
                        "setTo": {
                            "binding": "viewStrings"
                        }
                    }
                }
            ]
        }
    ],
    "views": [
        {
            "type": "nav",
            "properties": {
                "text": {
                    "value": "gaffa.js"
                },
                "fixed": {
                    "value": true
                }
            }
        },
        {
            "type": "container",
            "properties": {
                "classes": {
                    "value": "container"
                }
            },
            "views": {
                "content": [
                    {
                        "type": "container",
                        "properties": {
                            "classes": {
                                "value": "row"
                            }
                        },
                        "views": {
                            "content": [
                                {
                                    "type": "container",
                                    "properties": {
                                        "classes": {
                                            "value": "span12"
                                        }
                                    },
                                    "views": {
                                        "content": [
                                            {
                                                "type": "heading",
                                                "properties": {
                                                    "text": {
                                                        "value": "What is Gaffa?"
                                                    }
                                                }
                                            },
                                            {
                                                "type": "quote",
                                                "properties": {
                                                    "text": {
                                                        "value": "Gaffer tape, gaffer's tape, gaff tape[1] or gaffa tape[2] is a strong, tough, cotton cloth pressure sensitive tape with strong adhesive properties."
                                                    },
                                                    "cite": {
                                                        "value": "Wikipedia"
                                                    },
                                                    "citeHref": {
                                                        "value": "http://en.wikipedia.org/wiki/Gaffer_tape"
                                                    },
                                                    "classes": {
                                                        "binding": "stuff/someProperty"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "type": "container",
                        "properties": {
                            "classes": {
                                "value": "row"
                            }
                        },
                        "views": {
                            "content": [
                                {
                                    "type": "container",
                                    "properties": {
                                        "classes": {
                                            "value": "span12"
                                        }
                                    },
                                    "views": {
                                        "content": [
                                            {
                                                "type": "heading",
                                                "properties": {
                                                    "text": {
                                                        "value": "But seriously..."
                                                    }
                                                }
                                            },
                                            {
                                                "text": "<b>gaffa.js</b> sticks your DOM to your models. Just set your model to any javascript object, and bind your pages views to properties on it, using paths."
                                            },
                                            {
                                                "type": "paragraph",
                                                "views": {
                                                    "content": [
                                                        {
                                                            "type": "text",
                                                            "properties": {
                                                                "text": {
                                                                    "value": "100% of all the things are JSON, the page is made up of JSON 'views'"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "type": "paragraph",
                                                "views": {
                                                    "content": [
                                                        {
                                                            "type": "text",
                                                            "properties": {
                                                                "text": {
                                                                    "value": "Because everything is made up of these 'views', reusing layout is a must. This helps create a consistant UI."
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "container",
                                    "properties": {
                                        "classes": {
                                            "value": "span12"
                                        }
                                    },
                                    "views": {
                                        "content": [
                                            {
                                                "type": "heading",
                                                "properties": {
                                                    "text": {
                                                        "binding": [
                                                            "stuff/thirdHeading"
                                                        ],
                                                        "format": "{0} bro..."
                                                    }
                                                }
                                            },
                                            {
                                                "type": "paragraph",
                                                "views": {
                                                    "content": [
                                                        {
                                                            "text": "It is a \""
                                                        },
                                                        {
                                                            "type": "text",
                                                            "properties": {
                                                                "text": {
                                                                    "binding": "stuff/thirdHeading"
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "text": "\", though the implications might not be obvious straight away.<br /><br />Check out this next bit of form:"
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "type": "paragraph",
                                                "views": {
                                                    "content": [
                                                        {
                                                            "type": "form",
                                                            "views": {
                                                                "content": [
                                                                    {
                                                                        "type": "textbox",
                                                                        "properties": {
                                                                            "value": {
                                                                                "binding": [
                                                                                    "stuff/thirdHeading"
                                                                                ]
                                                                            }
                                                                        },
                                                                        "actions": {
                                                                            "change": [
                                                                                {
                                                                                    "type": "set",
                                                                                    "bindings": {
                                                                                        "setTo": {
                                                                                            "binding": "stuff/show4thContainer"
                                                                                        },
                                                                                        "setFrom": {
                                                                                            "value": true
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    "type": "set",
                                                                                    "bindings": {
                                                                                        "setTo": {
                                                                                            "binding": "stuff/show5thContainer"
                                                                                        },
                                                                                        "setFrom": {
                                                                                            "value": true
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        "type": "button",
                                                                        "properties": {
                                                                            "text": {
                                                                                "value": "Change the text for me (I'm lazy)"
                                                                            }
                                                                        },
                                                                        "actions": {
                                                                            "click": [
                                                                                {
                                                                                    "type": "set",
                                                                                    "bindings": {
                                                                                        "setTo": {
                                                                                            "binding": "stuff/thirdHeading"
                                                                                        },
                                                                                        "setFrom": {
                                                                                            "value": "Brool Story"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    "type": "set",
                                                                                    "bindings": {
                                                                                        "setTo": {
                                                                                            "binding": "stuff/show4thContainer"
                                                                                        },
                                                                                        "setFrom": {
                                                                                            "value": true
                                                                                        }
                                                                                    }
                                                                                },
                                                                                {
                                                                                    "type": "set",
                                                                                    "bindings": {
                                                                                        "setTo": {
                                                                                            "binding": "stuff/show5thContainer"
                                                                                        },
                                                                                        "setFrom": {
                                                                                            "value": true
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "type": "paragraph",
                                                "views": {
                                                    "content": [
                                                        {
                                                            "text": "<b>Change the value of the textbox (and then tab out to trigger the changed event)</b>"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "code",
                                    "properties": {
                                        "code": {
                                            "binding": "viewStrings/showHideViewData"
                                        }
                                    }
                                },
                                {
                                    "type": "container",
                                    "properties": {
                                        "classes": {
                                            "value": "span12"
                                        },
                                        "visible": {
                                            "binding": "stuff/show4thContainer"
                                        }
                                    },
                                    "views": {
                                        "content": [
                                            {
                                                "type": "heading",
                                                "properties": {
                                                    "text": {
                                                        "value": "Kewl!"
                                                    }
                                                }
                                            },
                                            {
                                                "type": "paragraph",
                                                "views": {
                                                    "content": [
                                                        {
                                                            "text": "The textbox above, the H1 above it, and some text in between the two are all bound to the same property on the model, changing the text in the textbox updates the model, which tells all things bound to it to update too.<br /><br /> There is also an action bound to the change event on the textbox, that sets a property in the model to true. This containers visibility is bound to that same property<br /><br /> This button sets that same property to false: "
                                                        },
                                                        {
                                                            "type": "button",
                                                            "properties": {
                                                                "text": {
                                                                    "value": "Hide this container"
                                                                }
                                                            },
                                                            "actions": {
                                                                "click": [
                                                                    {
                                                                        "type": "set",
                                                                        "bindings": {
                                                                            "setTo": {
                                                                                "binding": "stuff/show4thContainer"
                                                                            },
                                                                            "setFrom": {
                                                                                "value": false
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "container",
                                    "properties": {
                                        "classes": {
                                            "value": "span12"
                                        },
                                        "visible": {
                                            "binding": "stuff/show5thContainer"
                                        }
                                    },
                                    "views": {
                                        "content": [
                                            {
                                                "type": "heading",
                                                "properties": {
                                                    "text": {
                                                        "value": "Other stuff"
                                                    }
                                                }
                                            },
                                            {
                                                "text": "Gaffa can be used to easily template views based on an array. <br /><br />Here is a simple example that uses textboxes as a template. The textbox's value properties are bound to '~' (relative), so they reflect the data in the array.<br />"
                                            },
                                            {
                                                "type": "button",
                                                "properties": {
                                                    "text": {
                                                        "value": "Add an array element"
                                                    }
                                                },
                                                "actions": {
                                                    "click": [
                                                        {
                                                            "type": "push",
                                                            "bindings": {
                                                                "pushTo": {
                                                                    "binding": "stuff/anArray"
                                                                },
                                                                "pushFrom": {
                                                                    "value": ""
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "type": "list",
                                                "binding": "stuff/anArray",
                                                "properties": {
                                                    "list": {
                                                        "template": {
                                                            "type": "textbox",
                                                            "properties": {
                                                                "value": {
                                                                    "binding": "~"
                                                                }
                                                            }
                                                        },
                                                        "binding": "stuff/anArray"
                                                    }
                                                }
                                            },
                                            {
                                                "type": "code",
                                                "properties": {
                                                    "code": {
                                                        "binding": "viewStrings/listViewData"
                                                    }
                                                }
                                            },
                                            {
                                                "text": "You can also bind a list to an array, provide a template view, and let it do the rest. "
                                            },
                                            {
                                                "text": "All templated views will be bound just as any pre-existing views would."
                                            },
                                            {
                                                "text": "<br /><br /><b>This textarea contains a JSONified version of the model, and yes, it is bound. Changing it's content will change the pages model, and vice-verse.</b>"
                                            },
                                            {
                                                "type": "textarea",
                                                "properties": {
                                                    "value": {
                                                        "binding": "things/jsonStuff"
                                                    },
                                                    "classes": {
                                                        "value": "span12"
                                                    }
                                                },
                                                "actions": {
                                                    "change": [
                                                        {
                                                            "type": "fromJson",
                                                            "bindings": {
                                                                "setFrom": {
                                                                    "binding": "things/jsonStuff"
                                                                },
                                                                "setTo": {
                                                                    "binding": "stuff"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "type": "heading",
                                                "properties": {
                                                    "text": {
                                                        "value": "A Little more complex"
                                                    }
                                                }
                                            },
                                            {
                                                "text": "<br /><br />A simple accordian control:"
                                            },
                                            {
                                                "type": "accordion",
                                                "binding": "stuff/anArray",
                                                "properties": {
                                                    "list": {
                                                        "binding": "~",
                                                        "template": {
                                                            "type": "accordionNode",
                                                            "views": {
                                                                "content": [
                                                                    {
                                                                        "text": "Some accordon node content, say, a data-bound textbox? "
                                                                    },
                                                                    {
                                                                        "type": "textbox",
                                                                        "properties": {
                                                                            "value": {
                                                                                "binding": "~"
                                                                            }
                                                                        }
                                                                    }
                                                                ],
                                                                "header": [
                                                                    {
                                                                        "type": "text",
                                                                        "properties": {
                                                                            "text": {
                                                                                "binding": "~"
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "text": "A less simple accordian control: <b>CAUTION!!! the number of accordion nodes created in this example is the number of array elements in the array cubed. So if you add 20 array elements, this will create 8000 accordion nodes.</b>"
                                            },
                                            {
                                                "type": "accordion",
                                                "binding": "stuff/anArray",
                                                "properties": {
                                                    "list": {
                                                        "binding": "~",
                                                        "template": {
                                                            "type": "accordionNode",
                                                            "views": {
                                                                "content": [
                                                                    {
                                                                        "type": "accordion",
                                                                        "binding": "stuff/anArray",
                                                                        "properties": {
                                                                            "list": {
                                                                                "binding": "~",
                                                                                "template": {
                                                                                    "type": "accordionNode",
                                                                                    "views": {
                                                                                        "content": [
                                                                                            {
                                                                                                "type": "accordion",
                                                                                                "binding": "stuff/anArray",
                                                                                                "properties": {
                                                                                                    "list": {
                                                                                                        "binding": "~",
                                                                                                        "template": {
                                                                                                            "type": "accordionNode",
                                                                                                            "views": {
                                                                                                                "content": [
                                                                                                                    {
                                                                                                                        "text": "Some accordion node content, say, a data-bound textbox? "
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "type": "textbox",
                                                                                                                        "properties": {
                                                                                                                            "value": {
                                                                                                                                "binding": "~"
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                ],
                                                                                                                "header": [
                                                                                                                    {
                                                                                                                        "text": "Accordion-ception-ception-ception"
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "header": [
                                                                                            {
                                                                                                "text": "Accordion-ception-ception"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                ],
                                                                "header": [
                                                                    {
                                                                        "text": "Accordion-ception"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "text": "<br /><br />The ease at which complex things can be created is sometimes silly.<br /><br /> A (very) simple editable grid:<br />"
                                            },
                                            {
                                                "type": "list",
                                                "binding": "stuff/gridData/columns",
                                                "properties": {
                                                    "list": {
                                                        "template": {
                                                            "type": "text",
                                                            "properties": {
                                                                "text": {
                                                                    "binding": "~"
                                                                },
                                                                "classes": {
                                                                    "value": "cell"
                                                                }
                                                            }
                                                        },
                                                        "binding": "~"
                                                    },
                                                    "classes": {
                                                        "value": "header"
                                                    }
                                                }
                                            },
                                            {
                                                "type": "list",
                                                "binding": "stuff/gridData/rows",
                                                "properties": {
                                                    "list": {
                                                        "template": {
                                                            "type": "container",
                                                            "views": {
                                                                "content": [
                                                                    {
                                                                        "type": "list",
                                                                        "binding": "~columns",
                                                                        "properties": {
                                                                            "list": {
                                                                                "template": {
                                                                                    "type": "textbox",
                                                                                    "properties": {
                                                                                        "value": {
                                                                                            "binding": "~"
                                                                                        },
                                                                                        "classes": {
                                                                                            "value": "cell"
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "binding": "~"
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            "properties": {
                                                                "classes": {
                                                                    "value": "row"
                                                                }
                                                            }
                                                        },
                                                        "binding": "~"
                                                    },
                                                    "classes": {
                                                        "value": "grid"
                                                    }
                                                }
                                            },
                                            {
                                                "type": "container",
                                                "views": {
                                                    "content": [
                                                        {
                                                            "text": "Your data has been saved to local storage, click here to reset the page: "
                                                        },
                                                        {
                                                            "type": "button",
                                                            "properties": {
                                                                "text": {
                                                                    "value": "Clear my data from local storage"
                                                                }
                                                            },
                                                            "actions": {
                                                                "click": [
                                                                    {
                                                                        "type": "store",
                                                                        "storeType": "localStorage",
                                                                        "storageKey": "stuffModel",
                                                                        "bindings": {
                                                                            "setFrom": {
                                                                                "value": null
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "type": "store",
                                                                        "storeType": "localStorage",
                                                                        "storageKey": "thingsModel",
                                                                        "bindings": {
                                                                            "setFrom": {
                                                                                "value": null
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "type": "store",
                                                                        "storeType": "localStorage",
                                                                        "storageKey": "viewStringsModel",
                                                                        "bindings": {
                                                                            "setFrom": {
                                                                                "value": null
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        "type": "set",
                                                                        "bindings": {
                                                                            "setFrom": {
                                                                                "binding": "original"
                                                                            },
                                                                            "setTo": {
                                                                                "binding": "stuff"
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "text": "<br />"
                                            },
                                            {
                                                "type": "list",
                                                "binding": "stuff/radioOptions",
                                                "properties": {
                                                    "list": {
                                                        "binding": "stuff/radioOptions",
                                                        "template": {
                                                            "type": "radioOption",
                                                            "properties": {
                                                                "text": {
                                                                    "binding": "~label"
                                                                },
                                                                "value": {
                                                                    "binding": "~value"
                                                                },
                                                                "name": {
                                                                    "value": "radioGroup"
                                                                },
                                                                "checked": {
                                                                    "binding": "stuff/checkedRadioOption"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "text": "<br />"
                                            },
                                            {
                                                "type": "select",
                                                "binding": "stuff/radioOptions",
                                                "properties": {
                                                    "options": {
                                                        "binding": "stuff/radioOptions",
                                                        "textBinding": "~label",
                                                        "valueBinding": "~value"
                                                    },
                                                    "value": {
                                                        "binding": "stuff/checkedRadioOption"
                                                    }
                                                }
                                            },
                                            {
                                                "text": "<br /><br />"
                                            },
                                            {
                                                "type": "heading",
                                                "properties": {
                                                    "text": {
                                                        "value": "Crazy string formatting fun :D"
                                                    }
                                                }
                                            },
                                            {
                                                "text": "<br />"
                                            },
                                            {
                                                "text": "Here is some fun magic stuff you can do with string formatting<br />"
                                            },
                                            {
                                                "text": "The following textbox is bound to 2 model properties, and is formated as: 'SELECT {1} from {0}' where {n} is a bound value<br />"
                                            },
                                            {
                                                "type": "textbox",
                                                "properties": {
                                                    "value": {
                                                        "binding": [
                                                            "stuff/formatProps1",
                                                            "stuff/formatProps2"
                                                        ],
                                                        "format": "SELECT {1} from {0}"
                                                    }
                                                }
                                            },
                                            {
                                                "text": "<br />If you get the format wrong on entry, it won't be set back to the model, and the textbox will get a red border"
                                            },
                                            {
                                                "text": "<br /><br />"
                                            },
                                            {
                                                "text": "The following textbox's are bound to the 2 model properties that the above box is bound to.<br />"
                                            },
                                            {
                                                "text": "Table: "
                                            },
                                            {
                                                "type": "textbox",
                                                "properties": {
                                                    "value": {
                                                        "binding": [
                                                            "stuff/formatProps1"
                                                        ]
                                                    }
                                                }
                                            },
                                            {
                                                "text": "<br />Select: "
                                            },
                                            {
                                                "type": "textbox",
                                                "properties": {
                                                    "value": {
                                                        "binding": [
                                                            "stuff/formatProps2"
                                                        ]
                                                    }
                                                }
                                            },
                                            {
                                                "text": "<br /><br />"
                                            },
                                            {
                                                "text": "You might be wondering, 'when would I ever want to do this!?' Actually it's something that is required quite a lot in websites. "
                                            },
                                            {
                                                "text": "Most anchor tags are made up of routes and parameters, eg: '/someControler/{recordList}/{record}', and thats where this comes in handy"
                                            },
                                            {
                                                "text": "<br /><br />"
                                            },
                                            {
                                                "type": "anchor",
                                                "properties": {
                                                    "text": {
                                                        "binding": [
                                                            "stuff/formatProps1",
                                                            "stuff/formatProps2"
                                                        ],
                                                        "format": "Navigate me to the '{1}' record of the '{0}' table good sir!"
                                                    },
                                                    "href": {
                                                        "binding": [
                                                            "stuff/formatProps1",
                                                            "stuff/formatProps2"
                                                        ],
                                                        "format": "controler/{0}/{1}"
                                                    }
                                                }
                                            },
                                            {
                                                "text": "<br /><br />"
                                            },
                                            {
                                                "text": "(PS: this link doesn't go anywhere)"
                                            },
                                            {
                                                "text": "<br /><br />"
                                            },
                                            {
                                                "text": "This button 'navigates' to a different view, and passes data with it"
                                            },
                                            {
                                                "type": "button",
                                                "actions": {
                                                    "click": [
                                                        {
                                                            "type": "navigate",
                                                            "url": {
                                                                "value": "FakeScreen.js"
                                                            },
                                                            "model": {
                                                                "binding": null
                                                            }
                                                        }
                                                    ]
                                                },
												"views":{
													"content":[
														{
															"text": "Go to a boring page"
														}
													]
												}
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
}