import Vuex from "vuex";


function createView(obj) {
    let { name, dispDetails, viewData, currentUrl } = obj;
    // dispDetails=false
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
            return {
                params_: this?.params || this.$route?.params,
                viewData_: {},
            };
        },
        render(h) {

            let showObj = '...'
            if (!dispDetails) {
                return h('WBGC', { props: { viewData: this.viewData_ } })
            }
            let routerViewComponent = (this.$router?.options?.routes || []).find(aRoute => aRoute.name === this?.$options.name)

            let routerUrl = routerViewComponent?.path
            let routerMeta = routerViewComponent?.meta
            let routerPath = routerViewComponent?.component?.toString().split('Star')?.[1]
            return h('div', [h('VListGroup', { class: 'grey' }, [
                h('li', [`${routerPath ? 'Router' : 'Simple'} component: `, this.$options.name]), routerPath ? h('li', `path: ${routerPath} `) : null,
                routerUrl ? h('li', `url: ${routerUrl} `) : null,
                currentUrl ? h('li', currentUrl) : null,
                routerMeta ? h('li', `meta: ${JSON.stringify(routerMeta)} `) : null,
                Object.keys(this.$route?.params || {}).length > 0 ? h('li', [`$route.params= ${JSON.stringify(this.$route.params)}`]) : null,
                h('li', ['params_:', JSON.stringify(this.params_)]),
                h('li', {}, ['viewData_:',
                    h('WBDataViewer', {
                        props: {
                            item: this.viewData_,
                        },
                    }),
                ]),
            ]),
            h('WBGC', { props: { viewData: this.viewData_ } })
            ]);
        },
        computed: {
            ...Vuex.mapGetters(["urlServer", "user", "loggedIn", "lg", "labels"]),
        },
        components: {},
        created() {
            this.viewData_ = viewData;
            this.viewData_.params = this.params_;

        },
        // beforeRouteEnter(to, from, next) {
        //     // This is executed before the component is created
        //     console.log('Before route enter:', to, from);


        //     // If you need to perform asynchronous operations, you can use next
        //     // to pass a callback that will be called with the component instance
        //     // after it has been created.
        //     next(vm => {
        //         // Access to the component instance (vm) after it has been created
        //         console.log('Component instance:', vm);
        //         updateMetaTags(to, vm);

        //     });
        // },

        style: `
      /* Add your CSS styles here */
      /* For example: */
      h2 {
        color: blue;
      }
    `,
    };
}

export { createView };