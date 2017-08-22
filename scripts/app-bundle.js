var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define('app',["require", "exports", "./lazy-loaded", "aurelia-dependency-injection"], function (require, exports, lazy_loaded_1, aurelia_dependency_injection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(lazyLoaded) {
            var _this = this;
            this.lazyLoaded = lazyLoaded;
            this.message = 'Hello World!';
            setTimeout(function () { return _this.beLazy(); }, 300);
        }
        App.prototype.beLazy = function () {
            console.log("I'm lazy!");
            this.lazyLoaded().foo();
        };
        App = __decorate([
            aurelia_dependency_injection_1.autoinject,
            __param(0, aurelia_dependency_injection_1.lazy(lazy_loaded_1.LazyLoaded)),
            __metadata("design:paramtypes", [Function])
        ], App);
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFNQTtRQUdFLGFBQXNDLFVBQTRCO1lBQWxFLGlCQUVDO1lBRnFDLGVBQVUsR0FBVixVQUFVLENBQWtCO1lBRmxFLFlBQU8sR0FBRyxjQUFjLENBQUM7WUFHdkIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFFLEVBQWIsQ0FBYSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3RDLENBQUM7UUFFTyxvQkFBTSxHQUFkO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQVZVLEdBQUc7WUFEZix5Q0FBVTtZQUlJLFdBQUEsbUNBQUksQ0FBQyx3QkFBVSxDQUFDLENBQUE7O1dBSGxCLEdBQUcsQ0FXZjtRQUFELFVBQUM7S0FYRCxBQVdDLElBQUE7SUFYWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xhenlMb2FkZWR9IGZyb20gXCIuL2xhenktbG9hZGVkXCI7XG5pbXBvcnQge2F1dG9pbmplY3QsIGxhenksIGluamVjdCwgTGF6eX0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcblxuXG4vLyBAaW5qZWN0KExhenkub2YoTGF6eUxvYWRlZCkpIC8vIHRoaXMgd29ya3NcbkBhdXRvaW5qZWN0ICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBkb2Vzbid0XG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgbWVzc2FnZSA9ICdIZWxsbyBXb3JsZCEnO1xuXG4gIGNvbnN0cnVjdG9yKEBsYXp5KExhenlMb2FkZWQpIHByaXZhdGUgbGF6eUxvYWRlZDogKCkgPT4gTGF6eUxvYWRlZCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5iZUxhenkoKSwgMzAwKVxuICB9XG5cbiAgcHJpdmF0ZSBiZUxhenkoKSB7XG4gICAgY29uc29sZS5sb2coXCJJJ20gbGF6eSFcIik7XG4gICAgdGhpcy5sYXp5TG9hZGVkKCkuZm9vKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('lazy-loaded',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LazyLoaded = (function () {
        function LazyLoaded() {
        }
        LazyLoaded.prototype.foo = function () {
            alert('foo');
        };
        return LazyLoaded;
    }());
    exports.LazyLoaded = LazyLoaded;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhenktbG9hZGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFJQSxDQUFDO1FBSEMsd0JBQUcsR0FBSDtZQUNFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNmLENBQUM7UUFDSCxpQkFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksZ0NBQVUiLCJmaWxlIjoibGF6eS1sb2FkZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTGF6eUxvYWRlZCB7XG4gIGZvbygpIHtcbiAgICBhbGVydCgnZm9vJyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration();
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUUsQ0FBQztRQUUzQixFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWJELDhCQWFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKCk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1></template>"; });
//# sourceMappingURL=app-bundle.js.map