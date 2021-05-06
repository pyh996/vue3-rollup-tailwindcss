(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['well-bricks'] = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  //
  // array that contains style props
  var script = vue.defineComponent({
      name: 'testBricks',
      props: {},
  });

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-cb6de1d2");

  vue.pushScopeId("data-v-cb6de1d2");
  const _hoisted_1 = { class: "text-gray-600 body-font" };
  const _hoisted_2 = /*#__PURE__*/vue.createStaticVNode("<div class=\"container px-5 py-24 mx-auto\" data-v-cb6de1d2><div class=\"flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col\" data-v-cb6de1d2><div class=\"flex-grow sm:text-left text-center mt-6 sm:mt-0\" data-v-cb6de1d2><h2 class=\"text-gray-900 text-lg title-font font-medium mb-2\" data-v-cb6de1d2>123</h2><p class=\"leading-relaxed text-base\" data-v-cb6de1d2>333</p></div></div></div>", 1);
  vue.popScopeId();

  const render = /*#__PURE__*/_withId((_ctx, _cache) => {
    return (vue.openBlock(), vue.createBlock("section", _hoisted_1, [
      _hoisted_2
    ]))
  });

  script.render = render;
  script.__scopeId = "data-v-cb6de1d2";
  script.__file = "src/components/testBricks/index.vue";

  script.install = function (app) {
      app.component(script.name, script);
  };

  var components = [
      script
  ];
  // 全局导入
  var install = function (app) {
      components.forEach(function (component) {
          app.component(component.name, component);
      });
  };
  var index = {
      install: install
  };

  exports.TestBricks = script;
  exports.default = index;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
