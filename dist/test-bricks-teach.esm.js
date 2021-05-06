import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, withScopeId, createStaticVNode } from 'vue';

//
// array that contains style props
var script = defineComponent({
    name: 'testBricks',
    props: {},
});

const _withId = /*#__PURE__*/withScopeId("data-v-cb6de1d2");

pushScopeId("data-v-cb6de1d2");
const _hoisted_1 = { class: "text-gray-600 body-font" };
const _hoisted_2 = /*#__PURE__*/createStaticVNode("<div class=\"container px-5 py-24 mx-auto\" data-v-cb6de1d2><div class=\"flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col\" data-v-cb6de1d2><div class=\"flex-grow sm:text-left text-center mt-6 sm:mt-0\" data-v-cb6de1d2><h2 class=\"text-gray-900 text-lg title-font font-medium mb-2\" data-v-cb6de1d2>123</h2><p class=\"leading-relaxed text-base\" data-v-cb6de1d2>333</p></div></div></div>", 1);
popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache) => {
  return (openBlock(), createBlock("section", _hoisted_1, [
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

export default index;
export { script as TestBricks, install };
