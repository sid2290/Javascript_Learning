(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.initialize(firstName, lastName, language);   
    }
    
    // Create array to store languages
    var supportedLangs = ['en', 'es'];
    
    //Create key:value pairs for general greeting according to language
    
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    //Create key:value pairs for formal greeting according to language
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    //Create key:value pairs for log messgaes according to language 
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
    
    //Giving properties to the prototype which can be used by any hreetr object
    
    Greetr.prototype = {
        
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },
        
        validate: function() {
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        
        greet: function(formal) {
            var msg;
            
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
                            
            return this;
        },
                            
        setLang: function(lang) {
            this.language = lang;
                    
            this.validate();
            
            return this;
        }
        
    };
    
    Greetr.initialize = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    
    Greetr.initialize.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));