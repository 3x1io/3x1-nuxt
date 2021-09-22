import flatPickr from 'vue-flatpickr-component';
import VueQuillEditor from 'vue-quill-editor';
import Notifications from 'vue-notification';
import Multiselect from 'vue-multiselect';
import VeeValidate from 'vee-validate';
import VueCookie from 'vue-cookie';
import VModal from 'vue-js-modal'
import Vue from 'vue';
import wysiwyg from "vue-wysiwyg";
import StarRating from 'vue-star-rating'
import VueTheMask from 'vue-the-mask'
import VSwatches from 'vue-swatches'
import VueAceEdit from "vue-ace-edit"
import '../helpers/app-components/bootstrap';
import 'craftable/dist/ui';
import './bootstrap';


//Use Components
Vue.use(VeeValidate, {strict: true});
Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true });
Vue.use(VueQuillEditor);
Vue.use(Notifications);
Vue.use(VueCookie);
Vue.use(wysiwyg, {});
Vue.use(VueTheMask);
Vue.use(VueAceEdit);

//Import Component
Vue.component('multiselect', Multiselect);
Vue.component('datetime', flatPickr);
Vue.component('color', VSwatches);
Vue.component('editor', require('vue2-ace-editor'));
Vue.component('rating', StarRating);
Vue.component('color', VSwatches);
//
// new Vue({
//   mixins: [Admin],
// });
