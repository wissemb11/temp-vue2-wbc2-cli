import Vue from "vue";
import Vuex from "vuex";
// import TheModelMyAlertComp from "@/components/theComps/myAlertComp/TheModelMyAlertComp.vue";

Vue.use(Vuex);

var initialCryptoKey = "eyuvn9gQ3NZCqE0o";

const state = {
	// urlServer: 'http://127.0.0.1:8000/',
	urlServer: "http://194.163.135.30:8000/",
	initialCryptoKey: initialCryptoKey,
	cryptoKey: initialCryptoKey,
	headers: null,
	user: null,
	// urlServer: 'http://rest.tcmo.tn/',
	lg: "en",
	token: "",
	loggedIn: false,
	profile: null,
	club: {
		id: 1,
		// name: "Monastir Tennis Club",
		name: { en: "Monastir Tennis Club", fr: "Tennis Club de Monastir", ar: "نادي المنستير للتنس" },
	},
	globalLibelle: {
		Username: { en: "Username", fr: "Utilisateur", ar: "اسم المستخدم" },
		Email: { en: "Email.", fr: "Courrier", ar: "البريد الإلكتروني" },
		FirstName: { en: "First name", fr: "Prénom", ar: "الاسم" },
		LastName: { en: "Last name", fr: "Nom", ar: "اسم العائلة" },
		Profile: { en: "Profile", fr: "Profile", ar: "الملف الشخصي" },
		Setting: { en: "Settings", fr: "Parametètres", ar: "الإعدادات" },
		SignOut: { en: "SignOut", fr: "Quitter", ar: "الخروج " },
		SignIn: { en: "Sign In", fr: "Connecter", ar: "تسجيل الدخول" },
		SignUp: { en: "Sign Up", fr: "S'inscrire", ar: "اشتراك" },
		Search: { en: "Search", fr: "Chercher", ar: "البحث " },
		AdminPanel: { en: "admin panel", fr: "panneau d'administration", ar: "لوحة المشرف" },
		SignInButton: { en: "Sign In", fr: "S'identifier", ar: "تسجيل الدخول" },
		SignInText: {
			en: "Already have an account? Sign In",
			fr: "Vous avez déjà un compte? S'identifier",
			ar: "لديك حساب? تسجيل الدخول",
		},
		SignUpText: { en: "New around here? Sign Up", fr: "Nouveau par ici? S'inscrire", ar: "هل انت جديد؟ اشتراك" },
		SignUpButton: { en: "Sign Up", fr: "Inscrivez-vous", ar: "اشتراك" },
		pswForgetText: { en: "Forgot Password?", fr: "Mots de passe oublié?", ar: "هل نسيت كلمة السر؟" },
	},
	myAlertObjs: [],
	myAlertObjsTitles: "sssssssssssssssssssssssssssssssssssssssssssss",
	myAlertCondition: false,
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
	updateLoggedIn: (state, v) => {
		state.loggedIn = v;
	},
	updateUser: (state, usr) => {
		state.user = usr;
	},
	updateProfile: (state, prof) => {
		state.profile = prof;
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
	updateMyAlertObjs: (state, v) => {
		state.myAlertObjs = v;
	},
	updateMyAlertObjsTitles: (state, v) => {
		state.myAlertObjsTitles = v;
	},
	//       updateMyAlertObjsPush: (state, v) => {
	//         let a=JSON.parse(JSON.stringify(state.myAlertObjs));
	//         a.push(v)
	//   state.myAlertObjs=a
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
	initialCryptoKey: (state) => state.initialCryptoKey,
	loggedIn: (state) => state.loggedIn,
	user: (state) => state.user,
	profile: (state) => state.profile,
	club: (state) => state.club,
	headers: (state) => state.headers,
	globalLibelle: (state) => state.globalLibelle,
	myAlertObjs: (state) => state.myAlertObjs,
	myAlertObjsTitles: (state) => state.myAlertObjsTitles,
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
	//   alert(store.getters.myAlertObjs )
	//       let tmp=store.getters.myAlertObjs
	//       tmp.push({value:v.slice(0,v.length-1),title:v[v.length-1]})

	// store.commit('updateMyAlertObjs', tmp)
	//     }
	//   myAlertObjsPush:(store, v)=>{
	//   let items=[...store.state.myAlertObjs,v];
	// // myAlertObjs
	// store.commit('updateMyAlertObjs', items);
	//   },
	// myAlert :(store,myAlertObjs)=> {
	// Vue.$modal.show(
	//   TheModelMyAlertComp,
	//   { objs:myAlertObjs },

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

global.v = Vuex;
global.s = store;

export default store;
