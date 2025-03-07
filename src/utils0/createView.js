"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createView = void 0;
const vuex_2 = __importDefault(require("vuex"));
function createView(obj) {
    let { name, dispDetails, viewData, currentUrl } = obj;
    return {
        name: name,
        props: {
            params: {
                type: Object,
                default: () => {
                    return null;
                },
            },
        },
        data() {
            var _a;
            return {
                params_: (this === null || this === void 0 ? void 0 : this.params) || ((_a = this.$route) === null || _a === void 0 ? void 0 : _a.params),
                viewData_: {},
            };
        },
        render(h) {
            var _a, _b, _c, _d, _e;
            let showObj = '...';
            if (!dispDetails) {
                return h('WBGC', { props: { viewData: this.viewData_ } });
            }
            let routerViewComponent = (((_b = (_a = this.$router) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.routes) || []).find(aRoute => aRoute.name === (this === null || this === void 0 ? void 0 : this.$options.name));
            let routerUrl = routerViewComponent === null || routerViewComponent === void 0 ? void 0 : routerViewComponent.path;
            let routerMeta = routerViewComponent === null || routerViewComponent === void 0 ? void 0 : routerViewComponent.meta;
            let routerPath = (_d = (_c = routerViewComponent === null || routerViewComponent === void 0 ? void 0 : routerViewComponent.component) === null || _c === void 0 ? void 0 : _c.toString().split('Star')) === null || _d === void 0 ? void 0 : _d[1];
            return h('div', [h('VListGroup', { class: 'grey' }, [
                    h('li', [`${routerPath ? 'Router' : 'Simple'} component: `, this.$options.name]), routerPath ? h('li', `path: ${routerPath} `) : null,
                    routerUrl ? h('li', `url: ${routerUrl} `) : null,
                    currentUrl ? h('li', currentUrl) : null,
                    routerMeta ? h('li', `meta: ${JSON.stringify(routerMeta)} `) : null,
                    Object.keys(((_e = this.$route) === null || _e === void 0 ? void 0 : _e.params) || {}).length > 0 ? h('li', [`$route.params= ${JSON.stringify(this.$route.params)}`]) : null,
                    h('li', ['params_:', JSON.stringify(this.params_)]),
                    h('li', {}, ['viewData_:',
                        h('WBDataViewer', {
                            props: {
                                item: this.viewData_,
                            },
                        }),
                    ]),
                ]),
                h('WBGC', { props: { viewData: this.viewData_ } })]);
        },
        computed: Object.assign({}, vuex_2.default.mapGetters(["urlServer", "user", "loggedIn", "lg", "labels"])),
        components: {},
        created() {
            this.viewData_ = viewData;
            this.viewData_.params = this.params_;
        },
        style: `
      /* Add your CSS styles here */
      /* For example: */
      h2 {
        color: blue;
      }
    `,
    };
}
exports.createView = createView;
//# sourceMappingURL=createView.js.map