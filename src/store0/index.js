import Vue from "vue";
import Vuex from "vuex";
// import TheModelMyAlertComp from "@/components/theComps/myAlertComp/TheModelMyAlertComp.vue";

Vue.use(Vuex);

var initialCryptoKey = "eyuvn9gQ3NZCqE0o";

const state = {
	urlServer: 'http://127.0.0.1:8000/',
	// urlServer: "http://194.163.135.30:8000/",
	initialCryptoKey: initialCryptoKey,
	cryptoKey: initialCryptoKey,
	
	

	headers: null,
	data: {},
	posts: {},
	timetables: {},
	staff: {},
	user: null,
	// urlServer: 'http://rest.tcmo.tn/',
	lg: "en",
	token: null,
	loggedIn: false,
	profile: null,
	sideDisp:true,
	club: {
		id: 1,
		// name: "Monastir Tennis Club",
		name: { en: "Monastir Tennis Club", fr: "Tennis Club de Monastir", ar: "نادي المنستير للتنس" },
	},
	labels: {
		username: { en: "Username", fr: "Utilisateur", ar: "اسم المستخدم" },
		email: { en: "Email.", fr: "Courrier", ar: "البريد الإلكتروني" },
		firstName: { en: "First name", fr: "Prénom", ar: "الاسم" },
		lastName: { en: "Last name", fr: "Nom", ar: "اسم العائلة" },
		profile: { en: "Profile", fr: "Profile", ar: "الملف الشخصي" },
		setting: { en: "Settings", fr: "Parametètres", ar: "الإعدادات" },
		signOut: { en: "SignOut", fr: "Quitter", ar: "الخروج " },
		signIn: { en: "Sign In", fr: "Connecter", ar: "تسجيل الدخول" },
		signUp: { en: "Sign Up", fr: "S'inscrire", ar: "اشتراك" },
		search: { en: "Search", fr: "Chercher", ar: "البحث " },
		adminPanel: { en: "admin panel", fr: "panneau d'administration", ar: "لوحة المشرف" },
		signInButton: { en: "Sign In", fr: "S'identifier", ar: "تسجيل الدخول" },
		signInText: {
			en: "Already have an account? Sign In",
			fr: "Vous avez déjà un compte? S'identifier",
			ar: "لديك حساب? تسجيل الدخول",
		},
		signUpText: { en: "New around here? Sign Up", fr: "Nouveau par ici? S'inscrire", ar: "هل انت جديد؟ اشتراك" },
		signUpButton: { en: "Sign Up", fr: "Inscrivez-vous", ar: "اشتراك" },
		pswForgetText: { en: "Forgot Password?", fr: "Mots de passe oublié?", ar: "هل نسيت كلمة السر؟" },
	},
	tmpObj: {wbMenu:'Profile'},
	myAlertCondition: false,
		cache:{},

};
const mutations = {
	updateLang: (state, v) => {
		state.lg = v;
	},
	updateToken: (state, v) => {
		state.token = v;
	},
	updateCryptoKey: (state, v) => {
		// alert(v);
		state.cryptoKey = v.split(".")[2].slice(0, 16);
	},
	updateEncFn: (state, v) => {
		// alert(v);
		state.encFn = v
	},
	updateDecFn: (state, v) => {
		// alert(v);
		state.decFn = v
	},
	updateLoggedIn: (state, v) => {
		state.loggedIn = v;
	},
	updateUser: (state, usr) => {
		state.user = usr;
	},
	updateProfile: (state, prof) => {
		state.profile = prof;
	},
	updateSideDisp: (state, sidB) => {
		state.sideDisp = sidB;
	},
	updateClub: (state, club) => {
		state.Club = club;
	},
	updateHeaders: (state, v) => {
		var auth = "JWT";
		// Token = this.$cookies.get("token");
		// v = Vue.$cookies.get("token");
		// alert(v)
		state.headers = {
			headers: {
				Authorization: `${auth} ${v}`,
				"Content-Type": "application/json",
			},
		};
	},
	updateData: (state, v = null) => {
		
		if (state?.data?.unknown) { delete state.data.unknown }
		
		if (!v) { state.data = null }
		else if (
			typeof v === 'object' &&
			!Array.isArray(v) &&
			v !== null &&
			!(v instanceof Function)
			) {
			
			state.data = { ...state.data,...v};
		}
		else {
			state.data ={
				...state.data,'unknown':v
			}
		}
	},	
	updatePosts: (state, v = null) => {
		

		
		if (!v) { state.posts = null }
		else if (
			typeof v === 'object' &&
			!Array.isArray(v) &&
			v !== null &&
			!(v instanceof Function)
			) {
			
			state.posts = { ...state.posts,...v};
		}
		else {
			state.posts ={
				...state.posts,'unknown':v
			}
		}
	},
	updateTimetables: (state, v = {}) => {
		

		
		if (!v) { state.timetables = {} }
		else if (
			typeof v === 'object' &&
			!Array.isArray(v) &&
			v !== null &&
			!(v instanceof Function)
			) {
			
			state.timetables = { ...state?.timetables||{},...v};
		}
		else {
			state.timetables ={
				...state.timetables,'unknown':v
			}
		}
	},
	updateStaff: (state, v = {}) => {
		

		
		if (!v) { state.staff = {} }
		else if (
			typeof v === 'object' &&
			!Array.isArray(v) &&
			v !== null &&
			!(v instanceof Function)
			) {
			
			state.staff = { ...state?.staff||{},...v};
		}
		else {
			state.staff ={
				...state.staff,'unknown':v
			}
		}
	},
	updateTmpObj: (state, v) => {
		state.tmpObj = v;
	},
updateCache: (state, v) => {
		state.cache = v;
	},

	//       updatetmpObjPush: (state, v) => {
	//         let a=JSON.parse(JSON.stringify(state.tmpObj));
	//         a.push(v)
	//   state.tmpObj=a
	// },
	updateMyAlertCondition: (state, v) => {
		state.myAlertCondition = v;
	},
};
const getters = {
	urlServer: (state) => state.urlServer,
	lg: (state) => state.lg,
	token: (state) => state.token,
	cryptoKey: (state) => state.cryptoKey,
	encFn: (state) => state.encFn,
	decFn: (state) => state.decFn,
	initialCryptoKey: (state) => state.initialCryptoKey,
	loggedIn: (state) => state.loggedIn,
	user: (state) => state.user,
	profile: (state) => state.profile,
	sideDisp: (state) => state.sideDisp,
	club: (state) => state.club,
	headers: (state) => state.headers,
	data: (state) => state.data,
	posts: (state) => state.posts,
	timetables: (state) => state.timetables,
	staff: (state) => state.staff,
	labels: (state) => state.labels,
	tmpObj: (state) => state.tmpObj,
	cache: (state) => state.cache,
	myAlertCondition: (state) => state.myAlertCondition,
};
const actions = {
	setLang: (store, v) => {
		if (Vue.$cookies.get("lg")) {
			store.commit("updateLang", v);
		} else {
			store.commit("updateLang", "en");
			Vue.$cookies.set("lg", "en");
		}
	},
	// mAlert(store, v){
	//   alert(v)
	//   alert(store.getters.tmpObj )
	//       let tmp=store.getters.tmpObj
	//       tmp.push({value:v.slice(0,v.length-1),title:v[v.length-1]})

	// store.commit('updatetmpObj', tmp)
	//     }
	//   tmpObjPush:(store, v)=>{
	//   let items=[...store.state.tmpObj,v];
	// // tmpObj
	// store.commit('updatetmpObj', items);
	//   },
	// myAlert :(store,tmpObj)=> {
	// Vue.$modal.show(
	//   TheModelMyAlertComp,
	//   { objs:tmpObj },

	//   { draggable: true,
	//     resizable: true,
	//     height: 'auto',
	//     adaptive:false,
	//     width:'80%',
	//     shiftX:0.8,
	//     shiftY:0.2,
	//     scrollable:true

	//   }
	// )

	// },
};

let store = new Vuex.Store({
	state: state,
	getters: getters,
	mutations,
	actions,
	modules: {},
});
console.log('Vuex',Vuex)
global.Vuex = Vuex;
global.s = store;

export default store;
