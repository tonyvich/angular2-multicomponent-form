System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/+step1/step1.component.js",["@angular/core","../shared/form-manager","../shared/form-field"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../shared/form-manager"),h=a("../shared/form-field"),i=function(){function a(a){this.fm=a,this.step1=a.mainForm.controls.step1}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-step1",templateUrl:"step1.component.html",styleUrls:["step1.component.css"],directives:[h.FormFieldComponent]}),e("design:paramtypes",[g.FormManager])],a)}();return b.Step1Component=i,c.exports}),System.registerDynamic("app/+step1/index.js",["./step1.component"],!0,function(a,b,c){"use strict";var d=a("./step1.component");return b.Step1Component=d.Step1Component,c.exports}),System.registerDynamic("app/shared/form-manager.js",["@angular/core","@angular/common","./form-field"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/common"),h=a("./form-field"),i=function(){function a(a,b){this.fields=b.getFormFields();for(var c={},d=0;d<this.fields.length;d++){for(var e=this.fields[d],f={},g=0;g<e.fields.length;g++){var h=e.fields[g];f[h.name]=[h.defaultValue]}c[e.section]=a.group(f)}this.mainForm=a.group(c),this.mainForm.valueChanges.subscribe(function(a){console.log("Changed",a)})}return a.prototype.getField=function(a){var b=this,c=[];if(this.fields.forEach(function(d){d.fields.forEach(function(e){if(e.name===a){c.push(e),console;var f=b.mainForm.controls[d.section];c.push(f.controls[a])}})}),c.length<=0)throw new Error("Field with name: "+a+" not found");return c},a=d([f.Injectable(),e("design:paramtypes",[g.FormBuilder,h.FormFieldService])],a)}();return b.FormManager=i,c.exports}),System.registerDynamic("app/shared/form-field/form-field.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.ngOnInit=function(){},d([f.Input(),e("design:type",Object)],a.prototype,"field",void 0),a=d([f.Component({moduleId:c.id,selector:"form-field",templateUrl:"form-field.component.html",styleUrls:["form-field.component.css"]}),e("design:paramtypes",[])],a)}();return b.FormFieldComponent=g,c.exports}),System.registerDynamic("app/shared/form-field/form-field.js",[],!0,function(a,b,c){"use strict";var d=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)},e=function(){function a(a,b,c){void 0===c&&(c=""),this.name=a,this.label=b,this.defaultValue=c}return a}();b.FormField=e;var f=function(a){function b(b,c,d,e){void 0===d&&(d=""),void 0===e&&(e=""),a.call(this,b,c,d),this.name=b,this.label=c,this.defaultValue=d,this.placeholder=e,this.type="text"}return d(b,a),b}(e);b.TextFormField=f;var g=function(a){function b(b,c,d,e){void 0===e&&(e=""),a.call(this,b,d,e),this.name=b,this.options=c,this.label=d,this.defaultValue=e,this.type="select"}return d(b,a),b}(e);return b.SelectFormField=g,c.exports}),System.registerDynamic("app/shared/form-field/form-field.service.js",["@angular/core","./form-field"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("./form-field"),h=function(){function a(){}return a.prototype.getFormFields=function(){return[{section:"step1",fields:[new g.TextFormField("input_name","Your name"),new g.SelectFormField("input_relationship_status",["Single","Couple"],"Relationship Status","Couple"),new g.TextFormField("input_age_user","Age")]},{section:"step2",fields:[new g.TextFormField("input_number_of_children","Number of children","0"),new g.TextFormField("input_savings","Savings","","Total savings you currently have"),new g.TextFormField("input_dependants","Number of Dependants")]}]},a=d([f.Injectable(),e("design:paramtypes",[])],a)}();return b.FormFieldService=h,c.exports}),System.registerDynamic("app/shared/form-field/index.js",["./form-field.component","./form-field","./form-field.service"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}var e=a("./form-field.component");return b.FormFieldComponent=e.FormFieldComponent,d(a("./form-field")),d(a("./form-field.service")),c.exports}),System.registerDynamic("app/+step2/step2.component.js",["@angular/core","../shared/form-manager","../shared/form-field"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../shared/form-manager"),h=a("../shared/form-field"),i=function(){function a(a){this.fm=a,this.step2=a.mainForm.controls.step2}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-step2",templateUrl:"step2.component.html",styleUrls:["step2.component.css"],directives:[h.FormFieldComponent]}),e("design:paramtypes",[g.FormManager])],a)}();return b.Step2Component=i,c.exports}),System.registerDynamic("app/+step2/index.js",["./step2.component"],!0,function(a,b,c){"use strict";var d=a("./step2.component");return b.Step2Component=d.Step2Component,c.exports}),System.registerDynamic("app/angular2-multicomponent-form.component.js",["@angular/core","@angular/common","./+step1","@angular/router","./shared/form-manager","./+step2"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/common"),h=a("./+step1"),i=a("@angular/router"),j=a("./shared/form-manager"),k=a("./+step2"),l=function(){function a(a){this.title="Welcome to Angular2 Multi-component Dynamic form demo",this.location=a}return a.prototype.getLinkStyle=function(a){return this.location.path()===a},a=d([f.Component({moduleId:c.id,selector:"angular2-multicomponent-form-app",templateUrl:"angular2-multicomponent-form.component.html",styleUrls:["angular2-multicomponent-form.component.css"],directives:[i.ROUTER_DIRECTIVES],providers:[i.ROUTER_PROVIDERS,j.FormManager]}),i.Routes([{path:"/step1",component:h.Step1Component},{path:"/step2",component:k.Step2Component}]),e("design:paramtypes",[g.Location])],a)}();return b.Angular2MulticomponentFormAppComponent=l,c.exports}),System.registerDynamic("app/index.js",["./environment","./angular2-multicomponent-form.component"],!0,function(a,b,c){"use strict";var d=a("./environment");b.environment=d.environment;var e=a("./angular2-multicomponent-form.component");return b.Angular2MulticomponentFormAppComponent=e.Angular2MulticomponentFormAppComponent,c.exports});