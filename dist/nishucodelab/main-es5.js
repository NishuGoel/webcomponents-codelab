function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/angular-elements/angular-elements.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/angular-elements/angular-elements.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAngularElementsAngularElementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-overview\">\n    <div class=\"inner-style\">\n        <h2 class=\"content-heading\"><span class=\"style-scope \">5</span>. <span\n                class=\"style-scope google-codelab-step\">Angular Elements</span></h2>\n        <p>Starting Angular v6, we can use regular Angular components as web components and load these components inside\n            any of the frameworks/libraries or a JavaScript code.</p>\n        <p>This is achieved using <a href=\"https://next.angular.io/guide/elements\" target=\"_blank\">Angular Elements</a>.\n            Angular Elements is an Angular package that helps us create regular Angular components as Web components\n            (custom elements) and use them in other technologies.</p>\n        <div style=\"text-align: center; \"><img src=\"../../assets/images/ngEle.png\" alt=\"AngularElements.png\"></div>\n\n        <p>The Angular Elements package exposes a <b>createCustomElement()</b> API to help the Angular component\n            interact with\n            the DOM API. This transforming of an Angular component to a custom element provides all the required Angular\n            functionality to the browser and implements the <b>NgElementConstructor</b> interface, which in turn creates\n            a\n            constructor class helping to produce a self bootstrap instance of the component.</p>\n\n        <p>This also allows us to leverage dependency injection. When we create a custom\n            element using Angular Elements, we pass in a reference to the current module's injector. This will\n            help share the context across multiple elements.</p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main\">\n\n    <div class=\"contentContainer\">\n        <header class=\"maintoolbar\">\n            <!-- <img src=\"\" alt=\"paper-icon\">     -->\n            <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" class=\"style-scope iron-icon\"\n                style=\"pointer-events: none; display: block; height: 20px\">\n                <g class=\"style-scope iron-icon\">\n                    <path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"\n                        class=\"style-scope iron-icon\"></path>\n                </g>\n            </svg>\n            <h3 class=\"head-header\"><b>Build a web component with Angular elements</b></h3>\n        </header>\n        <router-outlet></router-outlet>\n    </div>\n    <div class=\"drawerContainer\">\n        <ng-sidebar-container style=\"height: 96%; width: 100%;\">\n\n            <!-- A sidebar -->\n            <ng-sidebar>\n\n            </ng-sidebar>\n\n            <div ng-sidebar-content>\n                <div id=\"overview\" class=\"gray-background list-items\" tabindex=\"0\" routerLink=\"/overview\">\n                    Overview</div>\n                <div class=\"gray-background list-items\" routerLink=\"/prerequisites\">Pre-requisites <i\n                        class=\"icon-nextscreen-arrow icon-arrow\"></i></div>\n                <div routerLink=\"/gettingsetup\" class=\"list-items\" id=\"gettingsetup\" tabindex=\"0\">Getting set up\n                </div>\n                <div class=\"list-items\" tabindex=\"0\" routerLink=\"/webstandards\">Web component standards</div>\n\n                <div class=\"list-items\" tabindex=\"0\" routerLink=\"/angularelements\">Angular Elements</div>\n                <div class=\"list-items\" tabindex=\"0\" routerLink=\"/createwithngelement\">Create custom element\n                    with\n                    Angular elements</div>\n                <div class=\"list-items\" tabindex=\"0\" routerLink=\"/buildwebcomponent\">Build our Web Component\n                </div>\n                <div class=\"list-items\" tabindex=\"0\" routerLink=\"/publish\">Publish to npm</div>\n                <div class=\"list-items\" tabindex=\"0\" routerLink=\"/usewebcomponent\">Use in other frameworks</div>\n                <div class=\"list-items\" tabindex=\"0\" routerLink=\"/sourcecode\">Source Code</div>\n            </div>\n\n        </ng-sidebar-container>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/buildcustom-element/buildcustom-element.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buildcustom-element/buildcustom-element.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuildcustomElementBuildcustomElementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-overview\">\n    <div class=\"inner-style\">\n        <h2 class=\"content-heading\"><span class=\"style-scope \">7</span>. <span\n                class=\"style-scope google-codelab-step\">Building our Web Component</span></h2>\n        <p>You now might be wondering that I mentioned about using these anywhere across apps created using different\n            frameworks or in JavaScript. Well, officially Angular does not yet support stand-alone web components which\n            can be used outside the Angular projects, however, you can still use these custom elements in other\n            frameworks by a variety of ways. Let us look at that.</p>\n        <p> The community project, ngx-build-plus by Manfred Steyer, allows us to create the required polyfills and the\n            optional --single-bundle switch, helps create a single bundle which then exposes our web component.</p>\n        <h3 style=\"text-align: center; color: gray;\">There is an amazing series of blog posts about Angular elements in\n            detail by Manfred himself here.</h3>\n\n        <p>To add it to your web component project,\n        </p>\n        <pre style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">ng add ngx-build-plus</code></pre>\n        <p>This will update the build target in your angular.json to ngx-build-plus:build and update scripts related to\n            polyfills.\n            Also, remember we manually added polyfills to our web component project? We can avoid doing that as well\n            with the help of ngx-build-plus!</p>\n        <p>We can do this by using the command:</p>\n        <pre\n            style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">ng g ngx-build-plus:wc-polyfill</code></pre>\n\n        <p>Now, to use the single-bundle flag, we would update our scripts in the package.json for building the web\n            component.</p>\n        <pre\n            style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">\"build-my-comp\": \"ng build --prod --single-bundle true --keep-polyfills\"</code></pre>\n\n        <p>The single-bundle flag defaults to false so we set it to true explicitly in the build script. When you try to\n            build your component now using npm run</p>\n        <pre style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">build-my-comp</code></pre>\n        <p>, you might get to\n            see another error saying:\n        </p>\n        <h3 style=\"text-align: center; color: gray;\">Schema validation failed with the following errors: Data path\n            \".budgets[1].type\" should be equal to one of the allowed values.\n        </h3>\n        <p>To solve this, remove the following lines of code from angular.json</p>\n        <pre style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">{{'{'}}\n    \"type\": \"anyComponentStyle\",\n    \"maximumWarning\": \"6kb\",\n    \"maximumError\": \"10kb\"\n{{'}'}}\n</code></pre>\n        <p>Finally, you will get a main bundle created now that can be exported to a Vanilla JS project, or any other\n            framework and can be used as a web component, with, ofcourse, polyfills in place.\n            To test this, in a basic project inside index.html, I included the file as:</p>\n\n        <pre\n            style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">&lt;script src=\"main.js\"&gt;&lt;/script&gt; </code></pre>\n        <p>and used the custom element\n        </p>\n        <h3 style=\"text-align: center; color: gray;\"> &lt;custom-element&gt;&lt;custom-element&gt; </h3>\n        <p>To run this to be able to see the output now, you can install static-server from npm </p>\n        <pre\n            style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">npm i -g static-server</code></pre>\n        <p> Open the app on the port specified, and there\n            you go with own web component in a non-Angular project (where the web component was created.)</p>\n        <div style=\"text-align: center; padding-top: 12px;\"><img\n                src=\"../../assets/images/vanillaJS.PNG\" alt=\"useInvanillaJSproj.png\"></div>\n        <p>The web component can now be published to npm and used in other frameworks as well.</p>\n\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/buildwith-elements/buildwith-elements.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buildwith-elements/buildwith-elements.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuildwithElementsBuildwithElementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-overview\">\n    <div class=\"inner-style\">\n        <h2 class=\"content-heading\"><span class=\"style-scope \">6</span>. <span\n                class=\"style-scope google-codelab-step\">Create custom element with Angular elements</span></h2>\n        <p>To start with this, the first step would be to install the package @angular/elements .</p>\n        <h3 style=\"text-align: center; color: gray;\">ng add @angular/elements\n        </h3>\n        <div style=\"text-align: center; \"><img src=\"../../assets/images/ngElementPackage.png\"\n                alt=\"elementsDependency.png\"></div> <br><br>\n        <div class=\"content-tag\"><code class=\"icon-code-style\">npm install --save @webcomponents/custom-elements</code>\n        </div>\n        <pre style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">import ‘@webcomponents/custom-elements/src/native-shim’;\nimport ‘@webcomponents/custom-elements/custom-elements.min’;</code></pre>\n\n        <p>The installation of @angular/elements also adds polyfills which are lighter in size but the support for some\n            browsers is quite limited. Therefore, these two above-mentioned polyfills come to be of best use.</p>\n        <p>The next step is to create a traditional Angular component (to be used as a web component) which looks like\n            this:</p>\n        <pre style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">@Component({{'{'}}\n    templateUrl: './custom-elements.component.html',\n    styleUrls: ['./custom-elements.component.scss']\n{{'}'}})\nexport class ComponentName {{'{'}}\n    title = 'custom-elements-demo';\n{{'}'}}</code></pre>\n        <p>The selector name will be the one used while creating the web-component. Also, you would want to give it a\n            generic name as this web component is going to be a re-usable one which you'd definitely want to use in your\n            other projects as well.\n            The next step then is to create the custom Element inside the module of your app. To do this, we first need\n            to declare it inside the entryComponents array inside NgModule.</p>\n\n        <h3 style=\"text-align: center; color: gray;\">Note: Starting Angular v9, this would not be required as with Ivy,\n            we do not need to explicitly specify a component as an entryComponent.</h3>\n        <p>Inside the module class, define the custom element component now as:\n        </p>\n        <pre style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">//Inside NgModule  \n  \n  entryComponents: [CustomElementDemoComponent],\n\n  {{'}'}})\n  \nexport class FeatureModule   {{'{'}}\n  constructor(private injector: Injector)   {{'{'}}\n  {{'}'}}\n\n  ngDoBootstrap()   {{'{'}}\n      const customElement = createCustomElement(CustomElementDemoComponent, \n      {{'{'}} injector: this.injector   {{'}'}});\n      customElements.define('custom-element', customElement);\n  {{'}'}}\n{{'}'}}</code></pre>\n        <p>Inside the module, We use the injector service to basically wrap this Angular component as a web component\n            using the createCustomElement method from Angular Elements. customElements.define registers this component\n            on to the browser. This is done inside the ngDoBootstrap method as you want to manually bootstrap the\n            component instead of asking Angular to do it using the bootstrap array.</p>\n        <h3 style=\"text-align: center; color: gray;\">&lt;custom-element&gt;&lt;/custom-element&gt;\n        </h3>\n        <p>Once this is done, you can use it on an Angular component’s template as above and to make sure that the\n            Angular component recognizes this custom Element, we add CUSTOM_ELEMENTS_SCHEMA in the schemas array in\n            NgModule inside AppModule.</p>\n        <p> You custom Element is now ready to be used and is accessible inside any of your Angular projects.</p>\n        <div style=\"text-align: center; \"><img src=\"../../assets/images/ngWebComp.PNG\"\n            alt=\"elementsDependency.png\"></div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/drawer/drawer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drawer/drawer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDrawerDrawerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"drawer\">\n    <div class=\"inner-style\">\n        <div class=\"toc-item style-scope google-codelab x-scope paper-item-0 iron-selected\" role=\"option\" tabindex=\"0\"\n            aria-disabled=\"false\" aria-selected=\"true\">\n\n\n            <i class=\"style-scope google-codelab\">1</i><span class=\"style-scope google-codelab\">Overview</span>\n        </div>\n    </div>\n</div> -->\n\n<section class=\"menu-content level-1\">\n\n\n    <div class=\"mobile-distributor-divider\"></div>\n    <section class=\"menu-list-container\">\n        <ul class=\"menu-list\">\n            <!-- <li (click)=\"clickoverview\" class=\"gray-background list-items\" tabindex=\"0\" routerLink=\"/overview\">Overview</li>\n            <li (click)=\"clickprereq()\" class=\"gray-background list-items\" routerLink=\"/prerequisites\">Pre-requisites <i class=\"icon-nextscreen-arrow icon-arrow\"></i></li>\n            <li (click)=\"clickgetsetup()\" routerLink=\"/gettingsetup\" class=\"list-items\" id=\"gettingsetup\" tabindex=\"0\">Getting set up</li>\n            <li (click)=\"clickwebstandards()\"class=\"list-items\" tabindex=\"0\" routerLink=\"/webstandards\">Web component standards</li>\n            <li (click)=\"clickcustomelement()\" class=\"list-items\" tabindex=\"0\" routerLink=\"/customelement\">Build custom element without any framework\n            </li>\n            <li (click)=\"clickangularelements()\" class=\"list-items\" tabindex=\"0\" routerLink=\"/angularelements\">Angular Elements</li>\n            <li (click)=\"clickbuildwithngelement()\" class=\"list-items\" tabindex=\"0\" routerLink=\"/buildwithngelement\">Build custom element with Angular elements\n            </li>\n            <li (click)=\"clickpublish()\" class=\"list-items\" tabindex=\"0\" routerLink=\"/publish\">Publish to npm</li>\n            <li (click)=\"clickusewebcomponent()\" class=\"list-items\" tabindex=\"0\" routerLink=\"/usewebcomponent\">Use in other frameworks</li> -->\n            <li id=\"overview\" class=\"gray-background list-items\" tabindex=\"0\" routerLink=\"/overview\">Overview</li>\n            <li class=\"gray-background list-items\" routerLink=\"/prerequisites\">Pre-requisites <i\n                    class=\"icon-nextscreen-arrow icon-arrow\"></i></li>\n            <li routerLink=\"/gettingsetup\" class=\"list-items\" id=\"gettingsetup\" tabindex=\"0\">Getting set up</li>\n            <li class=\"list-items\" tabindex=\"0\" routerLink=\"/webstandards\">Web component standards</li>\n\n            <li class=\"list-items\" tabindex=\"0\" routerLink=\"/angularelements\">Angular Elements</li>\n            <li class=\"list-items\" tabindex=\"0\" routerLink=\"/createwithngelement\">Create custom element with Angular\n                elements\n            </li>\n            <li class=\"list-items\" tabindex=\"0\" routerLink=\"/buildwebcomponent\">Build our Web Component\n            </li>\n            <li class=\"list-items\" tabindex=\"0\" routerLink=\"/publish\">Publish to npm</li>\n            <li class=\"list-items\" tabindex=\"0\" routerLink=\"/usewebcomponent\">Use in other frameworks</li>\n            <li class=\"list-items\" tabindex=\"0\" routerLink=\"/sourcecode\">Source Code</li>\n        </ul>\n    </section>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/getsetup/getsetup.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/getsetup/getsetup.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGetsetupGetsetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-overview\">\n  <div class=\"inner-style\">\n    <h2 class=\"content-heading\"><span class=\"style-scope \">3</span>. <span\n        class=\"style-scope google-codelab-step\">Getting set up</span></h2>\n    <div>To set up our development environment, the very first step would be to Download and install Node.\n      To install node, go to <a href=\"https://nodejs.org/\" target=\"_blank\">https://nodejs.org/</a>. This will\n      include the node package manager, <code>npm</code>.</div>\n    <div style=\"text-align: center; padding: 8px;\"><img src=\"../../assets/images/nodejsimg.PNG\" alt=\"installNode.jpg\">\n    </div>\n    <div> Check the version of node and npm to be sure these are installed successfully. This can be done using\n      <br><br>\n      <div class=\"content-tag\"><code class=\"icon-code-style\">node -version</code></div> <br>and<br><br> <span\n        class=\"content-tag\"><code class=\"icon-code-style\">npm -version</code></span>\n    </div><br>\n    <div>Install Angular CLI as the next step to be able to create an Angular project. To install CLI, use <br><br>\n      <code class=\"icon-code-style content-tag\"> npm install @angular/cli@latest</code>\n      <br><br>\n      <div> Check the version of CLI\n        using <code class=\"icon-code-style content-tag\">ng version</code> or <code\n          class=\"icon-code-style content-tag\">ng v</code>.</div>\n    </div>\n    <div style=\" padding: 8px;\"><img src=\"../../assets/images/ng v.PNG\" alt=\"installNode.jpg\"></div>\n    <br>\n    <div>With this set up, we are ready to proceed with using Angular elements to create a web component in Angular.\n    </div><br>\n    <div style=\"background-color: darkgray; padding: 12px;\">\n      <div style=\"font-size: 18px; color: black;\">But before that, let us have a brief understanding of web standards\n        and Angular elements in general\n        first. Most of the setup related to using Angular elements, polyfills etc. will be done in the upcoming\n        sections.</div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOverviewOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-overview\">\n    <div class=\"inner-style\">\n        <h2 class=\"content-heading\"><span class=\"style-scope \">1</span>. <span\n                class=\"style-scope google-codelab-step\">Overview</span></h2>\n        <p>In this coding activity, you'll learn how to build web components using Angular elements. You'll create a\n            custom element, a search bar. The finished element will look something like this:</p>\n        <p> You will be able to use it simply like:</p>\n        <pre class=\"icon-code-style\"><code>\n            <span class=\"content-tag\">&lt;ng-search-bar&gt;&lt;/ng-search-bar&gt;</span>\n        </code></pre>\n        <p> We will cover each topic like web component specifications, creating a custom element,\n            Angular elements, and use those to create web components in Angular.</p>\n        <p> Let us start by looking at the pre-requisites for getting started with creating your first web component in\n            Angular.</p>\n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-req/pre-req.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-req/pre-req.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreReqPreReqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-overview\">\n    <div class=\"inner-style\">\n        <h2 class=\"content-heading\"><span class=\"style-scope \">2</span>. <span\n                class=\"style-scope google-codelab-step\">Pre-requisites</span></h2>\n        <ul>\n            <li>Basic understanding of HTML, CSS, and JavaScript</li>\n            <li>Understanding of Angular</li>\n            <li>Basic understanding of web standards, DOM etc.</li>\n        </ul><br>\n        <div>This coding activity starts from scratch involving the set up of the environment and the creation of the\n            web component and the usage of webcomponent in another framework, therefore, there are no starter files\n            required to get started with.\n            <br>\n            <div class=\"stuck-code-block\">However, if you get stuck at any point, there is a finished version of this\n                project here at this <a href=\"https://github.com/NishuGoel/frameworkAgnostic-searchBar\" target=\"_blank\">repo</a>.\n            </div>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/publish/publish.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publish/publish.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublishPublishComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-overview\">\n    <div class=\"inner-style\">\n        <h2 class=\"content-heading\"><span class=\"style-scope \">8</span>. <span\n                class=\"style-scope google-codelab-step\">Publish to npm</span></h2>\n        <p>For this activity, I will be publishing this login form to the npm registry and using it in a React project.\n            After building the web component using npm run build-my-comp , you get a single bundle generated for your\n            web component, looking like this:</p>\n        <div style=\"text-align: center; \"><img src=\"../../assets/images/buildProd.png\" alt=\"buildProd.png\">\n        </div>\n\n        <p>You can now publish it to npm by creating a package.json file in the dist directory. This needs only the name\n            and version of the package that you will be publishing. To avoid the deletion of package.json every time you\n            build the component, you can place it inside another folder.</p>\n        <p>The package.json looks like:\n        </p>\n        <pre style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">{{'{'}}\n    \"name\" : \"@nishugoel/search-bar-component\",\n    \"version\": \"0.0.7\"\n{{'}'}}\n</code></pre>\n        <p>We can now cd into the built package and pack it into a package to be published to npm using npm pack . This\n            will generate .tgzfile for you. To publish it to npm, make sure you are logged in to npm, if not, use npm\n            login.</p>\n        <p>Finally publish using,\n        </p>\n        <pre\n            style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">npm publish packagedfile.tgz --access public</code></pre>\n        <p>Our web component is finally on npm and can be used in other frameworks now :)</p>\n        <div style=\"\"><img src=\"../../assets/images/published.png\" alt=\"published.png\">\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/source-code/source-code.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/source-code/source-code.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSourceCodeSourceCodeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-overview\">\n    <div class=\"inner-style\">\n        <h2 class=\"content-heading\"><span class=\"style-scope \">10</span>. <span\n                class=\"style-scope google-codelab-step\">Source Code</span></h2>\n                <h3>Repositories</h3>\n                <p>- Web component using Angular Elements</p>\n                <a href=\"https://github.com/NishuGoel/frameworkAgnostic-searchBar\" target=\"_blank\">https://github.com/NishuGoel/frameworkAgnostic-searchBar</a>\n\n                <p>- Using the custom element in React</p>\n                <a href=\"https://github.com/NishuGoel/useAngularElementinReact\" target=\"_blank\">https://github.com/NishuGoel/useAngularElementinReact</a>\n\n                <p>- Using the custom element in a vanilla JS project</p>\n                <a href=\"https://github.com/NishuGoel/useWebCompInVanillaJS\" target=\"_blank\">https://github.com/NishuGoel/useWebCompInVanillaJS</a>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/use-in-framework/use-in-framework.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/use-in-framework/use-in-framework.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUseInFrameworkUseInFrameworkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-overview\">\n    <div class=\"inner-style\">\n        <h2 class=\"content-heading\"><span class=\"style-scope \">9</span>. <span\n                class=\"style-scope google-codelab-step\">Use in other frameworks</span></h2>\n        <p>In this codelab activity, we will use React framework to illustrate the usage of our Web Component in other\n            frameworks.</p>\n        <h3>Using our web component in React</h3>\n        <p>Create a new react app and inside the index.html, use the reference to your main.js script from npm.</p>\n\n        <pre style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">//Inside index.html\n    \n    &lt;script src=https://unpkg.com/@nishugoel/search-bar-component@0.0.7/main.js\"&gt;&lt;/script&gt;\n        \n//Use the custom element in the App.js file  \n        \n    &lt;ng-search-bar textfield='Well, let us enter something from this react app \n        now!'&gt;&lt;/ng-search-bar&gt;\n</code></pre>\n        <h3>Install webcomponents.js\n        </h3>\n        <pre\n            style=\"background: darkgray; padding: 6px;\"><code style=\" color: black;\">npm install --save @webcomponents/webcomponentsjs</code></pre>\n        <p>Put the required polyfills for custom-elements-es5-adapter.js and webcomponents-bundle.js</p>\n        <p>And finally use the custom element in your app.js file with your own property values to the component.</p>\n        <div style=\"text-align: center; \"><img src=\"../../assets/images/reactUse.png\" alt=\"usageinReact.png\">\n        </div>\n        <h3 align=\"center\">And there we go!\n        </h3>\n        <p>If you face any problems in using the web componnet inside this react application, check out the code here in this <b><a href=\"https://github.com/NishuGoel/useAngularElementinReact\" target=\"_blank\">repo</a></b>.</p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/web-standards/web-standards.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/web-standards/web-standards.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWebStandardsWebStandardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-overview\">\n    <div class=\"inner-style\">\n        <h2 class=\"content-heading\"><span class=\"style-scope \">4</span>. <span\n                class=\"style-scope google-codelab-step\">Web Component specifications</span></h2>\n        <div> To define web components, we can say create a reusable custom element in any technology and use its\n            functionality inside your web-apps by using the element. This is what web components are.\n            <div style=\"padding-top: 14px;\">As per MDN web docs, Web components are defined as:</div>\n            <h3 style=\"text-align: center; color: gray;\">Web Components is a suite of different technologies allowing\n                you to create reusable custom elements — with their functionality encapsulated away from the rest of\n                your code — and utilize them in your web apps.</h3>\n            <div>The amazing thing about web components is that they only work on the web standards without the\n                involvement of third-party libraries.\n                <div style=\"padding-top: 14px;\">Now to understand this term web component which has a bigger meaning in\n                    a simple way, lets try to understand what it actually contains.\n                    As mentioned before, web components follow certain web standards and work as per those. These web\n                    component specifications are:</div>\n            </div>\n        </div>\n        <div>\n            <ul style=\"font-weight: bold;\">\n                <li style=\"padding: 5px;\">Custom Elements</li>\n                <li style=\"padding: 5px;\">Shadow DOM</li>\n                <li style=\"padding: 5px;\">HTML Template</li>\n                <li style=\"padding: 5px;\">ES Modules</li>\n            </ul>\n            <div style=\"padding-top: 14px;\">Each one of these standards are independently capable of being used. To\n                leverage Web Components, we combine these four web standards and use and re-use our created custom\n                elements built with the functionality of the holding framework in any of the frameworks/libraries,\n                vanilla JavaScript etc.</div>\n            <div style=\"text-align: center; \"><img src=\"../../assets/images/webCompStandards.png\"\n                    alt=\"webComponentStandards.jpg\"></div>\n            <div class=\"stuck-code-block\"><strong>TLDR; </strong>If you want to directly jump to the coding part, you\n                are free to skip this\n                section and proceed to the next. Wanting to read more about the basis on which Angular Elements actually\n                work, continue reading further in this section\n            </div>\n        </div>\n        <div>Let us look at each one of these one by one.</div>\n\n        <h2>First Spec: Custom Elements</h2>\n        <p>This is the first standard of Web component spec which allows us to create our own tags just like another\n            HTML element but we decide which behavior should be contained inside that tag.\n            A Custom Element can be created as:</p>\n        <pre style=\"background: darkgray;\"><code style=\" color: black;\">class MyElement extends HTMLElement {{ '{' }} \n    […]\n{{ '}' }}\ncustomElements.define(\"my-element\", MyElement);\n              </code></pre>\n        <p>More about Custom Elements and the two types of custom elements that can be created can be read <a\n                style=\"font-weight: bold;\"\n                href=\"https://developers.google.com/web/fundamentals/web-components/customelements\"\n                target=\"_blank\">here</a>.</p>\n\n        <h2>Second Spec: Shadow DOM</h2>\n        <p>The shadow DOM specification for web components basically means that the custom element would have supported\n            style encapsulation and it wouldn’t conflict with the ID or class of your other elements in the DOM. It does\n            so by creating a sub-DOM tree of the element.\n            These elements enters as children of the element and have their own encapsulated styles.</p>\n        <p>This works by using &lt;slot&gt; element as a placeholder for the the custom element. This, therefore, gets\n            added in a sub-DOM tree like below:</p>\n        <pre style=\"background: darkgray;\"><code style=\" color: black;\">&lt;section&gt;\n    &lt;div&gt;\n        &lt;slot&gt;&lt;/slot&gt; //Content of the custom element gets placed here\n    &lt;/div&gt;\n&lt;/section&gt;\n              \n    // Custom Element\n&lt;my-element&gt;\n        &lt;button&gt;Custom button&lt;/button&gt;\n&lt;my-element&gt;\n</code></pre>\n\n        <div>More on the DOM API, Shadow DOM, slots etc. can be read here in this amazing <a\n                href=\"https://developers.google.com/web/fundamentals/web-components/shadowdom\"\n                target=\"_blank\">article</a>.</div>\n        <h2>Third Spec: HTML Template</h2>\n        <p>This third standard of the web component basically helps it to be have some chunk to the template to be\n            loaded at runtime. This is achieved by using the <template></template> tag.\n            Whatever is placed inside these template tags can be rendered at runtime by cloning and inserting them\n            though JS.</p>\n        <p>After retrieving the template tag in JS, you can activate it using: </p>\n        <h3 style=\"text-align: center; color: gray;\">var clonedObj = document.importNode(templateRef.content, true);\n        </h3>\n        <p>We can then append this using to the DOM as a sub-DOM tree.</p>\n\n        <h2>Final Spec: ES Module Specification</h2>\n        <p>This specification helps you integrate your custom element with the different JS apps by defining the\n            interface using the script.</p>\n        <pre style=\"background: darkgray;\"><code style=\" color: black;\">\n        &lt;script type=\"module\"&gt;\n            import {{'{'}}example{{'}'}} from ‘@example/example’;\n        &lt;/script&gt;\n    </code></pre>\n        <p>This will then allow us to use the custom tag inside our app like:</p>\n        <pre style=\"background: darkgray;\"><code style=\" color: black;\">&lt;example&gt;…&lt;/example&gt;</code></pre>\n        <p>These four web component specifications help us understand how and why the components are to be used in which\n            ever framework/JS app as you wish to.</p>\n        <p>Now that we have an understanding of Web components, in general, custom elements, Shadow DOM etc. We can\n            proceed to create one custom element inside the Angular framework and be able to use it inside other library\n            projects.</p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/angular-elements/angular-elements.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/angular-elements/angular-elements.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAngularElementsAngularElementsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-overview {\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  margin: 30px auto 32px;\n  max-width: 800px;\n}\n\n.inner-style {\n  padding: 24px;\n}\n\n.content-heading {\n  font-family: Google Sans, Arial, sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 1em;\n  margin: 0 0 30px;\n}\n\n.icon-code-style {\n  background: darkgray;\n  padding: 6px;\n}\n\n.content-tag {\n  color: black;\n}\n\n.stuck-code-block {\n  background: #e6f4ea;\n  border-color: #137333;\n  color: #212124;\n  border-left: 4px solid;\n  border-radius: 4px;\n  margin: 2em 0;\n  padding: 0.5em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNodWdvZWwvd2ViY29tcG9uZW50cy1jb2RlbGFiL3NyYy9hcHAvYW5ndWxhci1lbGVtZW50cy9hbmd1bGFyLWVsZW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbmd1bGFyLWVsZW1lbnRzL2FuZ3VsYXItZWxlbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUZBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0FDRUo7O0FEQUU7RUFDRSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ0lKOztBRERFO0VBQ0UsWUFBQTtBQ0lKOztBREZFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9hbmd1bGFyLWVsZW1lbnRzL2FuZ3VsYXItZWxlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1vdmVydmlldyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDJweCA2cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDMycHg7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuICAuaW5uZXItc3R5bGUge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cbiAgLmNvbnRlbnQtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IEdvb2dsZSBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIG1hcmdpbjogMCAwIDMwcHg7XG4gIH1cbiAgLmljb24tY29kZS1zdHlsZSB7XG4gICAgYmFja2dyb3VuZDogZGFya2dyYXk7XG4gICAgcGFkZGluZzogNnB4O1xuXG4gIH1cbiAgLmNvbnRlbnQtdGFnIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgLnN0dWNrLWNvZGUtYmxvY2sge1xuICAgIGJhY2tncm91bmQ6ICNlNmY0ZWE7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTM3MzMzO1xuICAgIGNvbG9yOiAjMjEyMTI0O1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMmVtIDA7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICB9XG4gICIsIi5jb250ZW50LW92ZXJ2aWV3IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgMnB4IDZweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMzJweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLmlubmVyLXN0eWxlIHtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLmNvbnRlbnQtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBHb29nbGUgU2FucywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luOiAwIDAgMzBweDtcbn1cblxuLmljb24tY29kZS1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IGRhcmtncmF5O1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi5jb250ZW50LXRhZyB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnN0dWNrLWNvZGUtYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjZTZmNGVhO1xuICBib3JkZXItY29sb3I6ICMxMzczMzM7XG4gIGNvbG9yOiAjMjEyMTI0O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMmVtIDA7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/angular-elements/angular-elements.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/angular-elements/angular-elements.component.ts ***!
    \****************************************************************/

  /*! exports provided: AngularElementsComponent */

  /***/
  function srcAppAngularElementsAngularElementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularElementsComponent", function () {
      return AngularElementsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AngularElementsComponent = /*#__PURE__*/function () {
      function AngularElementsComponent() {
        _classCallCheck(this, AngularElementsComponent);
      }

      _createClass(AngularElementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AngularElementsComponent;
    }();

    AngularElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-angular-elements',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./angular-elements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/angular-elements/angular-elements.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./angular-elements.component.scss */
      "./src/app/angular-elements/angular-elements.component.scss"))["default"]]
    })], AngularElementsComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./overview/overview.component */
    "./src/app/overview/overview.component.ts");
    /* harmony import */


    var _pre_req_pre_req_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pre-req/pre-req.component */
    "./src/app/pre-req/pre-req.component.ts");
    /* harmony import */


    var _getsetup_getsetup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./getsetup/getsetup.component */
    "./src/app/getsetup/getsetup.component.ts");
    /* harmony import */


    var _buildcustom_element_buildcustom_element_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./buildcustom-element/buildcustom-element.component */
    "./src/app/buildcustom-element/buildcustom-element.component.ts");
    /* harmony import */


    var _angular_elements_angular_elements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./angular-elements/angular-elements.component */
    "./src/app/angular-elements/angular-elements.component.ts");
    /* harmony import */


    var _buildwith_elements_buildwith_elements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./buildwith-elements/buildwith-elements.component */
    "./src/app/buildwith-elements/buildwith-elements.component.ts");
    /* harmony import */


    var _publish_publish_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./publish/publish.component */
    "./src/app/publish/publish.component.ts");
    /* harmony import */


    var _use_in_framework_use_in_framework_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./use-in-framework/use-in-framework.component */
    "./src/app/use-in-framework/use-in-framework.component.ts");
    /* harmony import */


    var _web_standards_web_standards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./web-standards/web-standards.component */
    "./src/app/web-standards/web-standards.component.ts");
    /* harmony import */


    var _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./source-code/source-code.component */
    "./src/app/source-code/source-code.component.ts");

    var routes = [{
      path: 'overview',
      component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"]
    }, {
      path: 'prerequisites',
      component: _pre_req_pre_req_component__WEBPACK_IMPORTED_MODULE_4__["PreReqComponent"]
    }, {
      path: 'gettingsetup',
      component: _getsetup_getsetup_component__WEBPACK_IMPORTED_MODULE_5__["GetsetupComponent"]
    }, {
      path: 'webstandards',
      component: _web_standards_web_standards_component__WEBPACK_IMPORTED_MODULE_11__["WebStandardsComponent"]
    }, {
      path: 'angularelements',
      component: _angular_elements_angular_elements_component__WEBPACK_IMPORTED_MODULE_7__["AngularElementsComponent"]
    }, {
      path: 'createwithngelement',
      component: _buildwith_elements_buildwith_elements_component__WEBPACK_IMPORTED_MODULE_8__["BuildwithElementsComponent"]
    }, {
      path: 'buildwebcomponent',
      component: _buildcustom_element_buildcustom_element_component__WEBPACK_IMPORTED_MODULE_6__["BuildcustomElementComponent"]
    }, {
      path: 'publish',
      component: _publish_publish_component__WEBPACK_IMPORTED_MODULE_9__["PublishComponent"] // loadChildren: () => import('./publish/publish.module').then(mod => mod.PublishModule)

    }, {
      path: 'usewebcomponent',
      component: _use_in_framework_use_in_framework_component__WEBPACK_IMPORTED_MODULE_10__["UseInFrameworkComponent"]
    }, {
      path: 'sourcecode',
      component: _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_12__["SourceCodeComponent"]
    }, {
      path: '',
      redirectTo: 'overview',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\n  display: flex;\n}\n.main .drawerContainer {\n  height: 100vh;\n  order: 1;\n  flex: 15%;\n}\n.main .contentContainer {\n  order: 2;\n  flex: 85%;\n}\n.list-items {\n  cursor: pointer;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  line-height: 25px;\n  padding: 15px;\n  font-size: 18px;\n}\n.list-items:focus {\n  outline: none;\n  background-color: skyblue;\n}\n.list-items ::ng-deep .ng-sidebar__content {\n  position: static;\n  overflow: visible;\n}\n.head-header {\n  flex: 1;\n  font-family: Google Sans, Arial, sans-serif;\n  font-weight: 400;\n  margin: 0 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.maintoolbar {\n  align-items: center;\n  background: #fff;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  color: #3c4043;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  padding: 0 16px;\n}\n.main-button {\n  background: #1a73e8;\n  color: #fff;\n  border-radius: 4px;\n  font-family: Google Sans, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.6px;\n  padding: 6px 24px;\n  pointer-events: auto;\n  text-transform: none;\n  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-tap-highlight-color: transparent;\n  box-sizing: border-box;\n  cursor: pointer;\n  font: inherit;\n  margin: 0 0.29em;\n  min-width: 5.14em;\n  outline-width: 0;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 0;\n  -webkit-font-smoothing: antialiased;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNodWdvZWwvd2ViY29tcG9uZW50cy1jb2RlbGFiL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0VKO0FEQUU7RUFDRSxRQUFBO0VBQ0EsU0FBQTtBQ0VKO0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1GQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNFSjtBREFFO0VBQ0ksZ0JBQUE7RUFDRixpQkFBQTtBQ0VKO0FEQ0E7RUFDRSxPQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBREFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1GQUFBO0VBQ0EsY0FBQTtFQUdBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDR0Y7QUREQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlEQUFBO0VBQ0EsK0dBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1DQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC5kcmF3ZXJDb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3JkZXI6IDE7XG4gICAgZmxleDogMTUlO1xuICB9XG4gIC5jb250ZW50Q29udGFpbmVyIHtcbiAgICBvcmRlcjogMjtcbiAgICBmbGV4OiA4NSU7XG4gIH1cbn1cblxuLmxpc3QtaXRlbXN7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgMnB4IDZweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlOztcbiAgfVxuICA6Om5nLWRlZXAgLm5nLXNpZGViYXJfX2NvbnRlbnQge1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfSAgXG59XG4uaGVhZC1oZWFkZXIge1xuICBmbGV4OiAxO1xuICBmb250LWZhbWlseTogR29vZ2xlIFNhbnMsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDAgOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5tYWludG9vbGJhciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCAycHggNnB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xuICBjb2xvcjogIzNjNDA0MztcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cbi5tYWluLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxYTczZTg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBHb29nbGUgU2FucywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBwYWRkaW5nOiA2cHggMjRweDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjhzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMCAwLjI5ZW07XG4gIG1pbi13aWR0aDogNS4xNGVtO1xuICBvdXRsaW5lLXdpZHRoOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB6LWluZGV4OiAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cbi5tYWluLWZvb3Rlcntcbn0iLCIubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbiAuZHJhd2VyQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3JkZXI6IDE7XG4gIGZsZXg6IDE1JTtcbn1cbi5tYWluIC5jb250ZW50Q29udGFpbmVyIHtcbiAgb3JkZXI6IDI7XG4gIGZsZXg6IDg1JTtcbn1cblxuLmxpc3QtaXRlbXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDJweCA2cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubGlzdC1pdGVtczpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG59XG4ubGlzdC1pdGVtcyA6Om5nLWRlZXAgLm5nLXNpZGViYXJfX2NvbnRlbnQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmhlYWQtaGVhZGVyIHtcbiAgZmxleDogMTtcbiAgZm9udC1mYW1pbHk6IEdvb2dsZSBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwIDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tYWludG9vbGJhciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCAycHggNnB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xuICBjb2xvcjogIzNjNDA0MztcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLm1haW4tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzFhNzNlODtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IEdvb2dsZSBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gIHBhZGRpbmc6IDZweCAyNHB4O1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwIDAuMjllbTtcbiAgbWluLXdpZHRoOiA1LjE0ZW07XG4gIG91dGxpbmUtd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHotaW5kZXg6IDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared.service */
    "./src/app/shared.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      // tslint:disable-next-line: variable-name
      function AppComponent(_sharedService) {
        _classCallCheck(this, AppComponent);

        this._sharedService = _sharedService; // routedToId: number;
        // tslint:disable-next-line: variable-name

        this._opened = false;
        this.title = 'Build a web component with Angular Elements';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// console.log( this._sharedService.routerId);
          // this.routedToId = this._sharedService.routerId;
          // if (this.routedToId) {
          //   console.log(this.routedToId);
          // }
        }
      }, {
        key: "_toggleSidebar",
        value: function _toggleSidebar() {
          this._opened = !this._opened;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-sidebar */
    "./node_modules/ng-sidebar/lib/index.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _overview_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./overview/overview.component */
    "./src/app/overview/overview.component.ts");
    /* harmony import */


    var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./drawer/drawer.component */
    "./src/app/drawer/drawer.component.ts");
    /* harmony import */


    var _pre_req_pre_req_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pre-req/pre-req.component */
    "./src/app/pre-req/pre-req.component.ts");
    /* harmony import */


    var _getsetup_getsetup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./getsetup/getsetup.component */
    "./src/app/getsetup/getsetup.component.ts");
    /* harmony import */


    var _web_standards_web_standards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./web-standards/web-standards.component */
    "./src/app/web-standards/web-standards.component.ts");
    /* harmony import */


    var _buildcustom_element_buildcustom_element_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./buildcustom-element/buildcustom-element.component */
    "./src/app/buildcustom-element/buildcustom-element.component.ts");
    /* harmony import */


    var _angular_elements_angular_elements_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./angular-elements/angular-elements.component */
    "./src/app/angular-elements/angular-elements.component.ts");
    /* harmony import */


    var _buildwith_elements_buildwith_elements_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./buildwith-elements/buildwith-elements.component */
    "./src/app/buildwith-elements/buildwith-elements.component.ts");
    /* harmony import */


    var _publish_publish_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./publish/publish.component */
    "./src/app/publish/publish.component.ts");
    /* harmony import */


    var _use_in_framework_use_in_framework_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./use-in-framework/use-in-framework.component */
    "./src/app/use-in-framework/use-in-framework.component.ts");
    /* harmony import */


    var _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./source-code/source-code.component */
    "./src/app/source-code/source-code.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _overview_overview_component__WEBPACK_IMPORTED_MODULE_6__["OverviewComponent"], _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_7__["DrawerComponent"], _pre_req_pre_req_component__WEBPACK_IMPORTED_MODULE_8__["PreReqComponent"], _getsetup_getsetup_component__WEBPACK_IMPORTED_MODULE_9__["GetsetupComponent"], _web_standards_web_standards_component__WEBPACK_IMPORTED_MODULE_10__["WebStandardsComponent"], _buildcustom_element_buildcustom_element_component__WEBPACK_IMPORTED_MODULE_11__["BuildcustomElementComponent"], _angular_elements_angular_elements_component__WEBPACK_IMPORTED_MODULE_12__["AngularElementsComponent"], _buildwith_elements_buildwith_elements_component__WEBPACK_IMPORTED_MODULE_13__["BuildwithElementsComponent"], _publish_publish_component__WEBPACK_IMPORTED_MODULE_14__["PublishComponent"], _use_in_framework_use_in_framework_component__WEBPACK_IMPORTED_MODULE_15__["UseInFrameworkComponent"], _source_code_source_code_component__WEBPACK_IMPORTED_MODULE_16__["SourceCodeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"].forRoot()],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/buildcustom-element/buildcustom-element.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/buildcustom-element/buildcustom-element.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBuildcustomElementBuildcustomElementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-overview {\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  margin: 30px auto 32px;\n  max-width: 800px;\n}\n\n.inner-style {\n  padding: 24px;\n}\n\n.content-heading {\n  font-family: Google Sans, Arial, sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 1em;\n  margin: 0 0 30px;\n}\n\n.icon-code-style {\n  background: black;\n}\n\n.content-tag {\n  color: #24c1e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNodWdvZWwvd2ViY29tcG9uZW50cy1jb2RlbGFiL3NyYy9hcHAvYnVpbGRjdXN0b20tZWxlbWVudC9idWlsZGN1c3RvbS1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9idWlsZGN1c3RvbS1lbGVtZW50L2J1aWxkY3VzdG9tLWVsZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUZBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0FDRUo7O0FEQUU7RUFDRSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLGlCQUFBO0FDSUo7O0FERkU7RUFDRSxjQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9idWlsZGN1c3RvbS1lbGVtZW50L2J1aWxkY3VzdG9tLWVsZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1vdmVydmlldyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDJweCA2cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDMycHg7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuICAuaW5uZXItc3R5bGUge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cbiAgLmNvbnRlbnQtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IEdvb2dsZSBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIG1hcmdpbjogMCAwIDMwcHg7XG4gIH1cbiAgLmljb24tY29kZS1zdHlsZSB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gIH1cbiAgLmNvbnRlbnQtdGFnIHtcbiAgICBjb2xvcjogIzI0YzFlMDtcbiAgfVxuICAiLCIuY29udGVudC1vdmVydmlldyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDJweCA2cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMzBweCBhdXRvIDMycHg7XG4gIG1heC13aWR0aDogODAwcHg7XG59XG5cbi5pbm5lci1zdHlsZSB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5jb250ZW50LWhlYWRpbmcge1xuICBmb250LWZhbWlseTogR29vZ2xlIFNhbnMsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIG1hcmdpbjogMCAwIDMwcHg7XG59XG5cbi5pY29uLWNvZGUtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmNvbnRlbnQtdGFnIHtcbiAgY29sb3I6ICMyNGMxZTA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/buildcustom-element/buildcustom-element.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/buildcustom-element/buildcustom-element.component.ts ***!
    \**********************************************************************/

  /*! exports provided: BuildcustomElementComponent */

  /***/
  function srcAppBuildcustomElementBuildcustomElementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildcustomElementComponent", function () {
      return BuildcustomElementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BuildcustomElementComponent = /*#__PURE__*/function () {
      function BuildcustomElementComponent() {
        _classCallCheck(this, BuildcustomElementComponent);
      }

      _createClass(BuildcustomElementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BuildcustomElementComponent;
    }();

    BuildcustomElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buildcustom-element',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buildcustom-element.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/buildcustom-element/buildcustom-element.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buildcustom-element.component.scss */
      "./src/app/buildcustom-element/buildcustom-element.component.scss"))["default"]]
    })], BuildcustomElementComponent);
    /***/
  },

  /***/
  "./src/app/buildwith-elements/buildwith-elements.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/buildwith-elements/buildwith-elements.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBuildwithElementsBuildwithElementsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-overview {\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  margin: 30px auto 32px;\n  max-width: 800px;\n}\n\n.inner-style {\n  padding: 24px;\n}\n\n.content-heading {\n  font-family: Google Sans, Arial, sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 1em;\n  margin: 0 0 30px;\n}\n\n.icon-code-style {\n  background: darkgray;\n  padding: 6px;\n}\n\n.content-tag {\n  color: black;\n}\n\n.stuck-code-block {\n  background: #e6f4ea;\n  border-color: #137333;\n  color: #212124;\n  border-left: 4px solid;\n  border-radius: 4px;\n  margin: 2em 0;\n  padding: 0.5em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNodWdvZWwvd2ViY29tcG9uZW50cy1jb2RlbGFiL3NyYy9hcHAvYnVpbGR3aXRoLWVsZW1lbnRzL2J1aWxkd2l0aC1lbGVtZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVpbGR3aXRoLWVsZW1lbnRzL2J1aWxkd2l0aC1lbGVtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtRkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLGFBQUE7QUNFSjs7QURBRTtFQUNFLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERFO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDSUo7O0FEREU7RUFDRSxZQUFBO0FDSUo7O0FERkU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2J1aWxkd2l0aC1lbGVtZW50cy9idWlsZHdpdGgtZWxlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1vdmVydmlldyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDJweCA2cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDMycHg7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuICAuaW5uZXItc3R5bGUge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cbiAgLmNvbnRlbnQtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IEdvb2dsZSBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIG1hcmdpbjogMCAwIDMwcHg7XG4gIH1cbiAgLmljb24tY29kZS1zdHlsZSB7XG4gICAgYmFja2dyb3VuZDogZGFya2dyYXk7XG4gICAgcGFkZGluZzogNnB4O1xuXG4gIH1cbiAgLmNvbnRlbnQtdGFnIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgLnN0dWNrLWNvZGUtYmxvY2sge1xuICAgIGJhY2tncm91bmQ6ICNlNmY0ZWE7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTM3MzMzO1xuICAgIGNvbG9yOiAjMjEyMTI0O1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMmVtIDA7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICB9XG4gICIsIi5jb250ZW50LW92ZXJ2aWV3IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgMnB4IDZweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMzJweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLmlubmVyLXN0eWxlIHtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLmNvbnRlbnQtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBHb29nbGUgU2FucywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luOiAwIDAgMzBweDtcbn1cblxuLmljb24tY29kZS1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IGRhcmtncmF5O1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi5jb250ZW50LXRhZyB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnN0dWNrLWNvZGUtYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjZTZmNGVhO1xuICBib3JkZXItY29sb3I6ICMxMzczMzM7XG4gIGNvbG9yOiAjMjEyMTI0O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMmVtIDA7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/buildwith-elements/buildwith-elements.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/buildwith-elements/buildwith-elements.component.ts ***!
    \********************************************************************/

  /*! exports provided: BuildwithElementsComponent */

  /***/
  function srcAppBuildwithElementsBuildwithElementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildwithElementsComponent", function () {
      return BuildwithElementsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BuildwithElementsComponent = /*#__PURE__*/function () {
      function BuildwithElementsComponent() {
        _classCallCheck(this, BuildwithElementsComponent);
      }

      _createClass(BuildwithElementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BuildwithElementsComponent;
    }();

    BuildwithElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buildwith-elements',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buildwith-elements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/buildwith-elements/buildwith-elements.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buildwith-elements.component.scss */
      "./src/app/buildwith-elements/buildwith-elements.component.scss"))["default"]]
    })], BuildwithElementsComponent);
    /***/
  },

  /***/
  "./src/app/drawer/drawer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/drawer/drawer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDrawerDrawerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".drawer {\n  background-color: #fff;\n  bottom: 0;\n  left: 0;\n  padding: 120px 0;\n  position: absolute;\n  top: 0;\n  transform: translate3d(-100%, 0, 0);\n  transition-property: transform;\n  width: 256px;\n  background: #fff;\n  opacity: 0;\n  visibility: hidden;\n  transition-duration: 200ms;\n}\n\n.inner-style {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.header__navbar-toggle .icon-bar {\n  background-color: #fff;\n  width: 20px;\n  height: 2px;\n  border-radius: 3px;\n}\n\n.header__navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n\n.header__navbar-toggle .icon-bar--middle {\n  width: 15px;\n}\n\n.navbar-toggle {\n  position: absolute;\n  cursor: pointer;\n  bottom: 59px;\n  left: 15px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  z-index: 16;\n}\n\n.sidebar-container {\n  position: static !important;\n  height: auto !important;\n  background-color: white;\n  overflow: auto;\n}\n\n.distributor-details {\n  padding: 0 16px 16px;\n}\n\n.mobile-labels-wrapper {\n  padding-left: 16px;\n}\n\n.dealer-details {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: left;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  margin-bottom: 5px;\n  color: #525759;\n  border-bottom: 1px solid #f3f3f2;\n}\n\n.mobile-distributor-title {\n  text-align: left;\n  font-size: 10px;\n  margin-bottom: 2px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.4px;\n  color: #9b9b9b;\n}\n\n.mobile-distributor {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: left;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #525759;\n}\n\n.mobile-distributor-divider {\n  border-bottom: 1px solid #f3f3f2;\n}\n\n.mobile-nav__sign-out {\n  text-align: center;\n  margin: 15px;\n}\n\n.mobile-nav__sign-out__btn {\n  font-size: 16px;\n}\n\n.gray-background {\n  background-color: #fafafa;\n}\n\n.close-icon {\n  padding: 22px 18px 12px;\n  font-size: 12px;\n  cursor: pointer;\n  margin-left: auto;\n}\n\n.menu-list {\n  list-style-type: none;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-items {\n  cursor: pointer;\n  padding: 16px;\n  border-bottom: 1px solid #f2f2f2;\n  color: #525759;\n  font-size: 16px;\n}\n\n.list-items:focus {\n  outline: none;\n}\n\n.list-items.exclusive-discount-row {\n  padding: 12px 16px;\n}\n\n.list-items.exclusive-discount-row .exclusive-discount-text {\n  padding-left: 5px;\n}\n\n.mobile-nav__sign-out__btn {\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  color: #018b46 !important;\n  text-align: center;\n  font-size: 16px;\n  padding: 10px 0px;\n  bottom: 0;\n}\n\n.menu-list-container {\n  margin-bottom: auto;\n}\n\n.icon-arrow {\n  float: right;\n  margin-top: 2px;\n  font-size: 12px;\n}\n\n.icon-nextscreen-left {\n  font-size: 12px;\n  margin-right: 10px;\n}\n\n.back-menu__icon {\n  font-family: sans-serif;\n  font-size: 14px;\n  cursor: pointer;\n  position: absolute;\n  top: 4px;\n  left: 0;\n  padding: 16px;\n}\n\n.navmenu-brand {\n  text-align: center;\n  font-size: 16px;\n  color: #525759;\n  padding: 20px 16px 16px;\n  margin: 0;\n}\n\n.mobile-nav__divider {\n  border: 0;\n  height: 2px;\n  background: #f2f2f2;\n  margin: 0 auto;\n  width: 110px;\n  margin-bottom: 24px;\n}\n\n.close-menu__icon {\n  height: 12px;\n  width: 12px;\n  padding: 22px 18px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  font-size: 12px;\n  box-sizing: content-box;\n}\n\n.categorie-items-container {\n  padding-left: 0px;\n}\n\n.categorie-items {\n  cursor: pointer;\n  padding: 16px;\n  border-bottom: 1px solid #f2f2f2;\n  color: #525759;\n  font-size: 16px;\n}\n\n.mobile-nav__icon-toggle {\n  margin-top: 2px;\n  font-size: 12px;\n  position: absolute;\n  right: 16px;\n  transition: transform 0.2s ease;\n}\n\n.subsubcategory-container {\n  background-color: transparent;\n  color: #848b8d;\n  padding-left: 0px;\n  list-style: none;\n}\n\n.subsubcategory-item {\n  cursor: pointer;\n  padding: 16px;\n  border-top: 1px solid #f2f2f2;\n  font-size: 16px;\n  padding-left: 30px;\n}\n\n.subcategory-list {\n  padding: 0px;\n}\n\n.subcategories-name {\n  padding: 16px 16px;\n  display: block;\n}\n\n.view-all {\n  padding-left: 30px !important;\n}\n\n.subsubcategory-view {\n  cursor: pointer;\n  padding: 16px;\n  border-top: 1px solid #f2f2f2;\n  font-size: 16px;\n}\n\n.mobile-nav__icon-plus {\n  transition: transform 0.2s ease;\n  transform: scaleY(1);\n}\n\n.exclusive-discount-hamburger-icon {\n  width: 25px;\n  height: 33px;\n}\n\n.clicked-element {\n  background-color: skyblue !important;\n}\n\n.unclicked-element {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNodWdvZWwvd2ViY29tcG9uZW50cy1jb2RlbGFiL3NyYy9hcHAvZHJhd2VyL2RyYXdlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZHJhd2VyL2RyYXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLG1DQUFBO0VBRUEsOEJBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0VKOztBREdNO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQVY7O0FEQ1U7RUFDRSxlQUFBO0FDQ1o7O0FEQ1U7RUFDRSxXQUFBO0FDQ1o7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREdBO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDS0o7O0FESEE7RUFDSSxnQ0FBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0FDUUo7O0FETkE7RUFDSSx5QkFBQTtBQ1NKOztBRFBBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVUo7O0FEUkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDWUo7O0FEWEk7RUFDSSxhQUFBO0FDYVI7O0FEWEk7RUFDSSxrQkFBQTtBQ2FSOztBRFpRO0VBQ0ksaUJBQUE7QUNjWjs7QURWQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUNhSjs7QURYQTtFQUNJLG1CQUFBO0FDY0o7O0FEWkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNlSjs7QURiQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ2dCSjs7QURkQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtBQ2lCSjs7QURmQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNrQko7O0FEaEJBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNtQko7O0FEakJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDb0JKOztBRGxCQTtFQUNJLGlCQUFBO0FDcUJKOztBRG5CQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ3NCSjs7QURwQkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FDdUJKOztBRHJCQTtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUN3Qko7O0FEdEJBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3lCSjs7QUR2QkE7RUFDSSxZQUFBO0FDMEJKOztBRHhCQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQzJCSjs7QUR6QkE7RUFDSSw2QkFBQTtBQzRCSjs7QUQxQkE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQzZCSjs7QUQxQkE7RUFDSSwrQkFBQTtFQUNBLG9CQUFBO0FDNkJKOztBRDNCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDOEJKOztBRDVCQTtFQUNJLG9DQUFBO0FDK0JKOztBRDdCQTtFQUNJLHVCQUFBO0FDZ0NKIiwiZmlsZSI6InNyYy9hcHAvZHJhd2VyL2RyYXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmF3ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxMjBweCAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgd2lkdGg6IDI1NnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG59XG4uaW5uZXItc3R5bGV7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlciB7XG4gICAmX19uYXZiYXItdG9nZ2xlIHtcbiAgICAgIC5pY29uLWJhciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgJiArIC5pY29uLWJhciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICYtLW1pZGRsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICB9ICAgXG4gICAgICAgIH1cbiAgICB9XG59XG4ubmF2YmFyLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3R0b206IDU5cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgei1pbmRleDogMTY7XG59XG4uc2lkZWJhci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbi5kaXN0cmlidXRvci1kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbn1cbi5tb2JpbGUtbGFiZWxzLXdyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5kZWFsZXItZGV0YWlscyB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6ICM1MjU3NTk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjI7XG59XG4ubW9iaWxlLWRpc3RyaWJ1dG9yLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgY29sb3I6ICM5YjliOWI7XG59XG4ubW9iaWxlLWRpc3RyaWJ1dG9yIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjNTI1NzU5O1xufVxuLm1vYmlsZS1kaXN0cmlidXRvci1kaXZpZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMjtcbn1cbi5tb2JpbGUtbmF2X19zaWduLW91dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4O1xufVxuLm1vYmlsZS1uYXZfX3NpZ24tb3V0X19idG4ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5ncmF5LWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG4uY2xvc2UtaWNvbntcbiAgICBwYWRkaW5nOiAyMnB4IDE4cHggMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLm1lbnUtbGlzdHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gfVxuLmxpc3QtaXRlbXN7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XG4gICAgY29sb3I6ICM1MjU3NTk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAmLmV4Y2x1c2l2ZS1kaXNjb3VudC1yb3cge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICAgIC5leGNsdXNpdmUtZGlzY291bnQtdGV4dCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5tb2JpbGUtbmF2X19zaWduLW91dF9fYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjb2xvcjogIzAxOGI0NiFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBib3R0b206IDA7XG59XG4ubWVudS1saXN0LWNvbnRhaW5lcntcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuLmljb24tYXJyb3d7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uaWNvbi1uZXh0c2NyZWVuLWxlZnR7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5iYWNrLW1lbnVfX2ljb257XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0cHg7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuLm5hdm1lbnUtYnJhbmR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzUyNTc1OTtcbiAgICBwYWRkaW5nOiAyMHB4IDE2cHggMTZweDtcbiAgICBtYXJnaW46IDA7XG59XG4ubW9iaWxlLW5hdl9fZGl2aWRlcntcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5jbG9zZS1tZW51X19pY29ue1xuICAgIGhlaWdodDogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBwYWRkaW5nOiAyMnB4IDE4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuLmNhdGVnb3JpZS1pdGVtcy1jb250YWluZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uY2F0ZWdvcmllLWl0ZW1ze1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xuICAgIGNvbG9yOiAjNTI1NzU5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tb2JpbGUtbmF2X19pY29uLXRvZ2dsZSB7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlXG59XG4uc3Vic3ViY2F0ZWdvcnktY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjODQ4YjhkO1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uc3Vic3ViY2F0ZWdvcnktaXRlbXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YyZjJmMjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuLnN1YmNhdGVnb3J5LWxpc3Qge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5zdWJjYXRlZ29yaWVzLW5hbWV7XG4gICAgcGFkZGluZzogMTZweCAxNnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnZpZXctYWxse1xuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xufVxuLnN1YnN1YmNhdGVnb3J5LXZpZXd7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMmYyZjI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbi5tb2JpbGUtbmF2X19pY29uLXBsdXN7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbn1cbi5leGNsdXNpdmUtZGlzY291bnQtaGFtYnVyZ2VyLWljb24ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMzNweDtcbn1cbi5jbGlja2VkLWVsZW1lbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZSAhaW1wb3J0YW50O1xufVxuLnVuY2xpY2tlZC1lbGVtZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSIsIi5kcmF3ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEyMHB4IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgd2lkdGg6IDI1NnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xufVxuXG4uaW5uZXItc3R5bGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5oZWFkZXJfX25hdmJhci10b2dnbGUgLmljb24tYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uaGVhZGVyX19uYXZiYXItdG9nZ2xlIC5pY29uLWJhciArIC5pY29uLWJhciB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5oZWFkZXJfX25hdmJhci10b2dnbGUgLmljb24tYmFyLS1taWRkbGUge1xuICB3aWR0aDogMTVweDtcbn1cblxuLm5hdmJhci10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm90dG9tOiA1OXB4O1xuICBsZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTY7XG59XG5cbi5zaWRlYmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmRpc3RyaWJ1dG9yLWRldGFpbHMge1xuICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbn1cblxuLm1vYmlsZS1sYWJlbHMtd3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLmRlYWxlci1kZXRhaWxzIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICM1MjU3NTk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2YyO1xufVxuXG4ubW9iaWxlLWRpc3RyaWJ1dG9yLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICM5YjliOWI7XG59XG5cbi5tb2JpbGUtZGlzdHJpYnV0b3Ige1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICM1MjU3NTk7XG59XG5cbi5tb2JpbGUtZGlzdHJpYnV0b3ItZGl2aWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2YyO1xufVxuXG4ubW9iaWxlLW5hdl9fc2lnbi1vdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLm1vYmlsZS1uYXZfX3NpZ24tb3V0X19idG4ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ncmF5LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG4uY2xvc2UtaWNvbiB7XG4gIHBhZGRpbmc6IDIycHggMThweCAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5tZW51LWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxpc3QtaXRlbXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xuICBjb2xvcjogIzUyNTc1OTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxpc3QtaXRlbXM6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmxpc3QtaXRlbXMuZXhjbHVzaXZlLWRpc2NvdW50LXJvdyB7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbn1cbi5saXN0LWl0ZW1zLmV4Y2x1c2l2ZS1kaXNjb3VudC1yb3cgLmV4Y2x1c2l2ZS1kaXNjb3VudC10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5tb2JpbGUtbmF2X19zaWduLW91dF9fYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICMwMThiNDYgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3R0b206IDA7XG59XG5cbi5tZW51LWxpc3QtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmljb24tYXJyb3cge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaWNvbi1uZXh0c2NyZWVuLWxlZnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJhY2stbWVudV9faWNvbiB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLm5hdm1lbnUtYnJhbmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1MjU3NTk7XG4gIHBhZGRpbmc6IDIwcHggMTZweCAxNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5tb2JpbGUtbmF2X19kaXZpZGVyIHtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmNsb3NlLW1lbnVfX2ljb24ge1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBwYWRkaW5nOiAyMnB4IDE4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4uY2F0ZWdvcmllLWl0ZW1zLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uY2F0ZWdvcmllLWl0ZW1zIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcbiAgY29sb3I6ICM1MjU3NTk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1vYmlsZS1uYXZfX2ljb24tdG9nZ2xlIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG5cbi5zdWJzdWJjYXRlZ29yeS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM4NDhiOGQ7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uc3Vic3ViY2F0ZWdvcnktaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMmYyZjI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uc3ViY2F0ZWdvcnktbGlzdCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnN1YmNhdGVnb3JpZXMtbmFtZSB7XG4gIHBhZGRpbmc6IDE2cHggMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52aWV3LWFsbCB7XG4gIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uc3Vic3ViY2F0ZWdvcnktdmlldyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMmYyZjI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1vYmlsZS1uYXZfX2ljb24tcGx1cyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG59XG5cbi5leGNsdXNpdmUtZGlzY291bnQtaGFtYnVyZ2VyLWljb24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG4uY2xpY2tlZC1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZSAhaW1wb3J0YW50O1xufVxuXG4udW5jbGlja2VkLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/drawer/drawer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/drawer/drawer.component.ts ***!
    \********************************************/

  /*! exports provided: DrawerComponent */

  /***/
  function srcAppDrawerDrawerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawerComponent", function () {
      return DrawerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DrawerComponent = /*#__PURE__*/function () {
      function DrawerComponent(router) {
        _classCallCheck(this, DrawerComponent);

        this.router = router;
      } // clickSetup(id) {
      //   const ele = document.querySelector('#overview');
      //   if (id === 'overview') {
      //     document.querySelectorAll('li').forEach(dothis);
      //     function dothis(item) {
      //       item.classList.add('unclicked-element');
      //     }
      //     ele.classList.add('clicked-element');
      //   } else if (id === 'gettingsetup') {
      //     document.querySelectorAll('li').forEach(dothis);
      //     function dothis(item) {
      //       item.classList.add('unclicked-element');
      //     }
      //     ele.classList.add('clicked-element');
      //   } else {
      //     document.querySelectorAll('li').forEach(dothis);
      //     function dothis(item) {
      //       item.classList.add('unclicked-element');
      //     }
      //   }
      // const check = document.querySelectorAll('li');
      // check.forEach(dothis);
      // function dothis(item) {
      //   if (id === 'gettingsetup') {
      //     item.classList.add('unclicked-element');
      //     document.getElementById('gettingsetup').classList.add('clicked-element');
      //   } else if (id === 'overview') {
      //     item.classList.add('unclicked-element');
      //     document.getElementById('overview').classList.add('clicked-element');
      //   } else {
      //     item.classList.add('unclicked-element');
      //   }
      // }
      // }


      _createClass(DrawerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DrawerComponent;
    }();

    DrawerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    DrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-drawer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./drawer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/drawer/drawer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./drawer.component.scss */
      "./src/app/drawer/drawer.component.scss"))["default"]]
    })], DrawerComponent);
    /***/
  },

  /***/
  "./src/app/getsetup/getsetup.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/getsetup/getsetup.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGetsetupGetsetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-overview {\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  margin: 30px auto 32px;\n  max-width: 800px;\n}\n\n.inner-style {\n  padding: 24px;\n}\n\n.content-heading {\n  font-family: Google Sans, Arial, sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 1em;\n  margin: 0 0 30px;\n}\n\n.icon-code-style {\n  font-style: oblique;\n}\n\n.content-tag {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNodWdvZWwvd2ViY29tcG9uZW50cy1jb2RlbGFiL3NyYy9hcHAvZ2V0c2V0dXAvZ2V0c2V0dXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dldHNldHVwL2dldHNldHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1GQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENFO0VBQ0UsYUFBQTtBQ0VKOztBREFFO0VBQ0ksMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR047O0FEREU7RUFFRSxtQkFBQTtBQ0dKOztBRERFO0VBRUUsaUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2dldHNldHVwL2dldHNldHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtb3ZlcnZpZXcge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCAycHggNnB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIixzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDMycHg7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuICAuaW5uZXItc3R5bGUge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cbiAgLmNvbnRlbnQtaGVhZGluZyB7XG4gICAgICBmb250LWZhbWlseTogR29vZ2xlIFNhbnMsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICBtYXJnaW46IDAgMCAzMHB4O1xuICB9XG4gIC5pY29uLWNvZGUtc3R5bGUge1xuICAgIC8vIGJhY2tncm91bmQ6IGdyZXk7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgfVxuICAuY29udGVudC10YWcge1xuICAgIC8vIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAiLCIuY29udGVudC1vdmVydmlldyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDJweCA2cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMzBweCBhdXRvIDMycHg7XG4gIG1heC13aWR0aDogODAwcHg7XG59XG5cbi5pbm5lci1zdHlsZSB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5jb250ZW50LWhlYWRpbmcge1xuICBmb250LWZhbWlseTogR29vZ2xlIFNhbnMsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIG1hcmdpbjogMCAwIDMwcHg7XG59XG5cbi5pY29uLWNvZGUtc3R5bGUge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xufVxuXG4uY29udGVudC10YWcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/getsetup/getsetup.component.ts":
  /*!************************************************!*\
    !*** ./src/app/getsetup/getsetup.component.ts ***!
    \************************************************/

  /*! exports provided: GetsetupComponent */

  /***/
  function srcAppGetsetupGetsetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetsetupComponent", function () {
      return GetsetupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GetsetupComponent = /*#__PURE__*/function () {
      function GetsetupComponent() {
        _classCallCheck(this, GetsetupComponent);
      }

      _createClass(GetsetupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GetsetupComponent;
    }();

    GetsetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-getsetup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./getsetup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/getsetup/getsetup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./getsetup.component.scss */
      "./src/app/getsetup/getsetup.component.scss"))["default"]]
    })], GetsetupComponent);
    /***/
  },

  /***/
  "./src/app/overview/overview.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/overview/overview.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOverviewOverviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-overview {\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  margin: 30px auto 32px;\n  max-width: 800px;\n}\n\n.inner-style {\n  padding: 24px;\n}\n\n.content-heading {\n  font-family: Google Sans, Arial, sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 1em;\n  margin: 0 0 30px;\n}\n\n.icon-code-style {\n  background: black;\n}\n\n.content-tag {\n  color: #24c1e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNodWdvZWwvd2ViY29tcG9uZW50cy1jb2RlbGFiL3NyYy9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1GQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBREFBO0VBQ0UsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1vdmVydmlldyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDJweCA2cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMzBweCBhdXRvIDMycHg7XG4gIG1heC13aWR0aDogODAwcHg7XG59XG4uaW5uZXItc3R5bGUge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuLmNvbnRlbnQtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBHb29nbGUgU2FucywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luOiAwIDAgMzBweDtcbn1cbi5pY29uLWNvZGUtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cbi5jb250ZW50LXRhZyB7XG4gIGNvbG9yOiAjMjRjMWUwO1xufVxuIiwiLmNvbnRlbnQtb3ZlcnZpZXcge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCAycHggNnB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDMwcHggYXV0byAzMnB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG4uaW5uZXItc3R5bGUge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4uY29udGVudC1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IEdvb2dsZSBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBtYXJnaW46IDAgMCAzMHB4O1xufVxuXG4uaWNvbi1jb2RlLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5jb250ZW50LXRhZyB7XG4gIGNvbG9yOiAjMjRjMWUwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/overview/overview.component.ts":
  /*!************************************************!*\
    !*** ./src/app/overview/overview.component.ts ***!
    \************************************************/

  /*! exports provided: OverviewComponent */

  /***/
  function srcAppOverviewOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverviewComponent", function () {
      return OverviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");

    var OverviewComponent = /*#__PURE__*/function () {
      // tslint:disable-next-line: variable-name
      function OverviewComponent(_sharedService) {
        _classCallCheck(this, OverviewComponent);

        this._sharedService = _sharedService;
        this._sharedService.routerId = 1;
      }

      _createClass(OverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OverviewComponent;
    }();

    OverviewComponent.ctorParameters = function () {
      return [{
        type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }];
    };

    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-overview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./overview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./overview.component.scss */
      "./src/app/overview/overview.component.scss"))["default"]]
    })], OverviewComponent);
    /***/
  },

  /***/
  "./src/app/pre-req/pre-req.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pre-req/pre-req.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreReqPreReqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-overview {\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  margin: 30px auto 32px;\n  max-width: 800px;\n}\n\n.inner-style {\n  padding: 24px;\n}\n\n.content-heading {\n  font-family: Google Sans, Arial, sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 1em;\n  margin: 0 0 30px;\n}\n\n.stuck-code-block {\n  background: #e6f4ea;\n  border-color: #137333;\n  color: #212124;\n  border-left: 4px solid;\n  border-radius: 4px;\n  margin: 2em 0;\n  padding: 0.5em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNodWdvZWwvd2ViY29tcG9uZW50cy1jb2RlbGFiL3NyYy9hcHAvcHJlLXJlcS9wcmUtcmVxLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmUtcmVxL3ByZS1yZXEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUZBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQUE7RUFDSSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvcHJlLXJlcS9wcmUtcmVxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtb3ZlcnZpZXcge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCAycHggNnB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMzBweCBhdXRvIDMycHg7XG4gIG1heC13aWR0aDogODAwcHg7XG59XG4uaW5uZXItc3R5bGUge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuLmNvbnRlbnQtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IEdvb2dsZSBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIG1hcmdpbjogMCAwIDMwcHg7XG59XG4uc3R1Y2stY29kZS1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICNlNmY0ZWE7XG4gIGJvcmRlci1jb2xvcjogIzEzNzMzMztcbiAgY29sb3I6ICMyMTIxMjQ7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAyZW0gMDtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xufVxuIiwiLmNvbnRlbnQtb3ZlcnZpZXcge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCAycHggNnB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDMwcHggYXV0byAzMnB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG4uaW5uZXItc3R5bGUge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4uY29udGVudC1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IEdvb2dsZSBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBtYXJnaW46IDAgMCAzMHB4O1xufVxuXG4uc3R1Y2stY29kZS1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICNlNmY0ZWE7XG4gIGJvcmRlci1jb2xvcjogIzEzNzMzMztcbiAgY29sb3I6ICMyMTIxMjQ7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAyZW0gMDtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pre-req/pre-req.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pre-req/pre-req.component.ts ***!
    \**********************************************/

  /*! exports provided: PreReqComponent */

  /***/
  function srcAppPreReqPreReqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreReqComponent", function () {
      return PreReqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");

    var PreReqComponent = /*#__PURE__*/function () {
      // tslint:disable-next-line: variable-name
      function PreReqComponent(_sharedService) {
        _classCallCheck(this, PreReqComponent);

        this._sharedService = _sharedService;
        this._sharedService.routerId = 2;
      }

      _createClass(PreReqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreReqComponent;
    }();

    PreReqComponent.ctorParameters = function () {
      return [{
        type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }];
    };

    PreReqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pre-req',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pre-req.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-req/pre-req.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pre-req.component.scss */
      "./src/app/pre-req/pre-req.component.scss"))["default"]]
    })], PreReqComponent);
    /***/
  },

  /***/
  "./src/app/publish/publish.component.scss":
  /*!************************************************!*\
    !*** ./src/app/publish/publish.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublishPublishComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-overview {\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  margin: 30px auto 32px;\n  max-width: 800px;\n}\n\n.inner-style {\n  padding: 24px;\n}\n\n.content-heading {\n  font-family: Google Sans, Arial, sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 1em;\n  margin: 0 0 30px;\n}\n\n.icon-code-style {\n  background: darkgray;\n  padding: 6px;\n}\n\n.content-tag {\n  color: black;\n}\n\n.stuck-code-block {\n  background: #e6f4ea;\n  border-color: #137333;\n  color: #212124;\n  border-left: 4px solid;\n  border-radius: 4px;\n  margin: 2em 0;\n  padding: 0.5em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNodWdvZWwvd2ViY29tcG9uZW50cy1jb2RlbGFiL3NyYy9hcHAvcHVibGlzaC9wdWJsaXNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wdWJsaXNoL3B1Ymxpc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUZBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0FDRUo7O0FEQUU7RUFDRSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ0lKOztBRERFO0VBQ0UsWUFBQTtBQ0lKOztBREZFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wdWJsaXNoL3B1Ymxpc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1vdmVydmlldyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDJweCA2cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDMycHg7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuICAuaW5uZXItc3R5bGUge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cbiAgLmNvbnRlbnQtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IEdvb2dsZSBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIG1hcmdpbjogMCAwIDMwcHg7XG4gIH1cbiAgLmljb24tY29kZS1zdHlsZSB7XG4gICAgYmFja2dyb3VuZDogZGFya2dyYXk7XG4gICAgcGFkZGluZzogNnB4O1xuXG4gIH1cbiAgLmNvbnRlbnQtdGFnIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgLnN0dWNrLWNvZGUtYmxvY2sge1xuICAgIGJhY2tncm91bmQ6ICNlNmY0ZWE7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTM3MzMzO1xuICAgIGNvbG9yOiAjMjEyMTI0O1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMmVtIDA7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICB9XG4gICIsIi5jb250ZW50LW92ZXJ2aWV3IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgMnB4IDZweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMzJweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLmlubmVyLXN0eWxlIHtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLmNvbnRlbnQtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBHb29nbGUgU2FucywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luOiAwIDAgMzBweDtcbn1cblxuLmljb24tY29kZS1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IGRhcmtncmF5O1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi5jb250ZW50LXRhZyB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnN0dWNrLWNvZGUtYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjZTZmNGVhO1xuICBib3JkZXItY29sb3I6ICMxMzczMzM7XG4gIGNvbG9yOiAjMjEyMTI0O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMmVtIDA7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/publish/publish.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/publish/publish.component.ts ***!
    \**********************************************/

  /*! exports provided: PublishComponent */

  /***/
  function srcAppPublishPublishComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublishComponent", function () {
      return PublishComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PublishComponent = /*#__PURE__*/function () {
      function PublishComponent() {
        _classCallCheck(this, PublishComponent);
      }

      _createClass(PublishComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PublishComponent;
    }();

    PublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-publish',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./publish.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/publish/publish.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./publish.component.scss */
      "./src/app/publish/publish.component.scss"))["default"]]
    })], PublishComponent);
    /***/
  },

  /***/
  "./src/app/shared.service.ts":
  /*!***********************************!*\
    !*** ./src/app/shared.service.ts ***!
    \***********************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SharedService = function SharedService() {
      _classCallCheck(this, SharedService);
    };

    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SharedService);
    /***/
  },

  /***/
  "./src/app/source-code/source-code.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/source-code/source-code.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSourceCodeSourceCodeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-overview {\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  margin: 30px auto 32px;\n  max-width: 800px;\n}\n\n.inner-style {\n  padding: 24px;\n}\n\n.content-heading {\n  font-family: Google Sans, Arial, sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 1em;\n  margin: 0 0 30px;\n}\n\n.icon-code-style {\n  background: darkgray;\n  padding: 6px;\n}\n\n.content-tag {\n  color: black;\n}\n\n.stuck-code-block {\n  background: #e6f4ea;\n  border-color: #137333;\n  color: #212124;\n  border-left: 4px solid;\n  border-radius: 4px;\n  margin: 2em 0;\n  padding: 0.5em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNodWdvZWwvd2ViY29tcG9uZW50cy1jb2RlbGFiL3NyYy9hcHAvc291cmNlLWNvZGUvc291cmNlLWNvZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NvdXJjZS1jb2RlL3NvdXJjZS1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1GQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENFO0VBQ0UsYUFBQTtBQ0VKOztBREFFO0VBQ0UsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREU7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURERTtFQUNFLFlBQUE7QUNJSjs7QURGRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvc291cmNlLWNvZGUvc291cmNlLWNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1vdmVydmlldyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDJweCA2cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDMycHg7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuICAuaW5uZXItc3R5bGUge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cbiAgLmNvbnRlbnQtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IEdvb2dsZSBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIG1hcmdpbjogMCAwIDMwcHg7XG4gIH1cbiAgLmljb24tY29kZS1zdHlsZSB7XG4gICAgYmFja2dyb3VuZDogZGFya2dyYXk7XG4gICAgcGFkZGluZzogNnB4O1xuXG4gIH1cbiAgLmNvbnRlbnQtdGFnIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgLnN0dWNrLWNvZGUtYmxvY2sge1xuICAgIGJhY2tncm91bmQ6ICNlNmY0ZWE7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTM3MzMzO1xuICAgIGNvbG9yOiAjMjEyMTI0O1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMmVtIDA7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICB9XG4gICIsIi5jb250ZW50LW92ZXJ2aWV3IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgMnB4IDZweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMzJweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLmlubmVyLXN0eWxlIHtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLmNvbnRlbnQtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBHb29nbGUgU2FucywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luOiAwIDAgMzBweDtcbn1cblxuLmljb24tY29kZS1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IGRhcmtncmF5O1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi5jb250ZW50LXRhZyB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnN0dWNrLWNvZGUtYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjZTZmNGVhO1xuICBib3JkZXItY29sb3I6ICMxMzczMzM7XG4gIGNvbG9yOiAjMjEyMTI0O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMmVtIDA7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/source-code/source-code.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/source-code/source-code.component.ts ***!
    \******************************************************/

  /*! exports provided: SourceCodeComponent */

  /***/
  function srcAppSourceCodeSourceCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceCodeComponent", function () {
      return SourceCodeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SourceCodeComponent = /*#__PURE__*/function () {
      function SourceCodeComponent() {
        _classCallCheck(this, SourceCodeComponent);
      }

      _createClass(SourceCodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SourceCodeComponent;
    }();

    SourceCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-source-code',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./source-code.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/source-code/source-code.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./source-code.component.scss */
      "./src/app/source-code/source-code.component.scss"))["default"]]
    })], SourceCodeComponent);
    /***/
  },

  /***/
  "./src/app/use-in-framework/use-in-framework.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/use-in-framework/use-in-framework.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUseInFrameworkUseInFrameworkComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-overview {\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  margin: 30px auto 32px;\n  max-width: 800px;\n}\n\n.inner-style {\n  padding: 24px;\n}\n\n.content-heading {\n  font-family: Google Sans, Arial, sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 1em;\n  margin: 0 0 30px;\n}\n\n.icon-code-style {\n  background: darkgray;\n  padding: 6px;\n}\n\n.content-tag {\n  color: black;\n}\n\n.stuck-code-block {\n  background: #e6f4ea;\n  border-color: #137333;\n  color: #212124;\n  border-left: 4px solid;\n  border-radius: 4px;\n  margin: 2em 0;\n  padding: 0.5em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNodWdvZWwvd2ViY29tcG9uZW50cy1jb2RlbGFiL3NyYy9hcHAvdXNlLWluLWZyYW1ld29yay91c2UtaW4tZnJhbWV3b3JrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2UtaW4tZnJhbWV3b3JrL3VzZS1pbi1mcmFtZXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUZBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0FDRUo7O0FEQUU7RUFDRSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ0lKOztBRERFO0VBQ0UsWUFBQTtBQ0lKOztBREZFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC91c2UtaW4tZnJhbWV3b3JrL3VzZS1pbi1mcmFtZXdvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1vdmVydmlldyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDJweCA2cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDMycHg7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuICAuaW5uZXItc3R5bGUge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cbiAgLmNvbnRlbnQtaGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6IEdvb2dsZSBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIG1hcmdpbjogMCAwIDMwcHg7XG4gIH1cbiAgLmljb24tY29kZS1zdHlsZSB7XG4gICAgYmFja2dyb3VuZDogZGFya2dyYXk7XG4gICAgcGFkZGluZzogNnB4O1xuXG4gIH1cbiAgLmNvbnRlbnQtdGFnIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgLnN0dWNrLWNvZGUtYmxvY2sge1xuICAgIGJhY2tncm91bmQ6ICNlNmY0ZWE7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTM3MzMzO1xuICAgIGNvbG9yOiAjMjEyMTI0O1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMmVtIDA7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICB9XG4gICIsIi5jb250ZW50LW92ZXJ2aWV3IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgMnB4IDZweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMzJweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLmlubmVyLXN0eWxlIHtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLmNvbnRlbnQtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBHb29nbGUgU2FucywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luOiAwIDAgMzBweDtcbn1cblxuLmljb24tY29kZS1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IGRhcmtncmF5O1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi5jb250ZW50LXRhZyB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnN0dWNrLWNvZGUtYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjZTZmNGVhO1xuICBib3JkZXItY29sb3I6ICMxMzczMzM7XG4gIGNvbG9yOiAjMjEyMTI0O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMmVtIDA7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/use-in-framework/use-in-framework.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/use-in-framework/use-in-framework.component.ts ***!
    \****************************************************************/

  /*! exports provided: UseInFrameworkComponent */

  /***/
  function srcAppUseInFrameworkUseInFrameworkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UseInFrameworkComponent", function () {
      return UseInFrameworkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UseInFrameworkComponent = /*#__PURE__*/function () {
      function UseInFrameworkComponent() {
        _classCallCheck(this, UseInFrameworkComponent);
      }

      _createClass(UseInFrameworkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UseInFrameworkComponent;
    }();

    UseInFrameworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-use-in-framework',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./use-in-framework.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/use-in-framework/use-in-framework.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./use-in-framework.component.scss */
      "./src/app/use-in-framework/use-in-framework.component.scss"))["default"]]
    })], UseInFrameworkComponent);
    /***/
  },

  /***/
  "./src/app/web-standards/web-standards.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/web-standards/web-standards.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWebStandardsWebStandardsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-overview {\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n  font-size: 14px;\n  font-family: \"Roboto\", sans-serif;\n  margin: 30px auto 32px;\n  max-width: 800px;\n}\n\n.inner-style {\n  padding: 24px;\n}\n\n.content-heading {\n  font-family: Google Sans, Arial, sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 1em;\n  margin: 0 0 30px;\n}\n\n.icon-code-style {\n  background: black;\n}\n\n.content-tag {\n  color: #24c1e0;\n}\n\n.stuck-code-block {\n  background: #e6f4ea;\n  border-color: #137333;\n  color: #212124;\n  border-left: 4px solid;\n  border-radius: 4px;\n  margin: 2em 0;\n  padding: 0.5em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXNodWdvZWwvd2ViY29tcG9uZW50cy1jb2RlbGFiL3NyYy9hcHAvd2ViLXN0YW5kYXJkcy93ZWItc3RhbmRhcmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93ZWItc3RhbmRhcmRzL3dlYi1zdGFuZGFyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUZBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0FDRUo7O0FEQUU7RUFDRSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLGlCQUFBO0FDSUo7O0FERkU7RUFDRSxjQUFBO0FDS0o7O0FESEU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3dlYi1zdGFuZGFyZHMvd2ViLXN0YW5kYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LW92ZXJ2aWV3IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgMnB4IDZweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMzJweDtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICB9XG4gIC5pbm5lci1zdHlsZSB7XG4gICAgcGFkZGluZzogMjRweDtcbiAgfVxuICAuY29udGVudC1oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogR29vZ2xlIFNhbnMsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgbWFyZ2luOiAwIDAgMzBweDtcbiAgfVxuICAuaWNvbi1jb2RlLXN0eWxlIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuICAuY29udGVudC10YWcge1xuICAgIGNvbG9yOiAjMjRjMWUwO1xuICB9XG4gIC5zdHVjay1jb2RlLWJsb2NrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTZmNGVhO1xuICAgIGJvcmRlci1jb2xvcjogIzEzNzMzMztcbiAgICBjb2xvcjogIzIxMjEyNDtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDJlbSAwO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgfVxuICAiLCIuY29udGVudC1vdmVydmlldyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDJweCA2cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMzBweCBhdXRvIDMycHg7XG4gIG1heC13aWR0aDogODAwcHg7XG59XG5cbi5pbm5lci1zdHlsZSB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5jb250ZW50LWhlYWRpbmcge1xuICBmb250LWZhbWlseTogR29vZ2xlIFNhbnMsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIG1hcmdpbjogMCAwIDMwcHg7XG59XG5cbi5pY29uLWNvZGUtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmNvbnRlbnQtdGFnIHtcbiAgY29sb3I6ICMyNGMxZTA7XG59XG5cbi5zdHVjay1jb2RlLWJsb2NrIHtcbiAgYmFja2dyb3VuZDogI2U2ZjRlYTtcbiAgYm9yZGVyLWNvbG9yOiAjMTM3MzMzO1xuICBjb2xvcjogIzIxMjEyNDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDJlbSAwO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/web-standards/web-standards.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/web-standards/web-standards.component.ts ***!
    \**********************************************************/

  /*! exports provided: WebStandardsComponent */

  /***/
  function srcAppWebStandardsWebStandardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebStandardsComponent", function () {
      return WebStandardsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WebStandardsComponent = /*#__PURE__*/function () {
      function WebStandardsComponent() {
        _classCallCheck(this, WebStandardsComponent);
      }

      _createClass(WebStandardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WebStandardsComponent;
    }();

    WebStandardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-web-standards',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./web-standards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/web-standards/web-standards.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./web-standards.component.scss */
      "./src/app/web-standards/web-standards.component.scss"))["default"]]
    })], WebStandardsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/nishugoel/webcomponents-codelab/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map