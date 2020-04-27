import _ from 'lodash';
import Vue from 'vue';
import router from './router';
import analytics from './analytics';

// *** plugins *** //

// calendly integration
/*import VueCalendly from 'vue-calendly';
Vue.use(VueCalendly);*/

// form validation
/*import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);*/

// modal
/*import VModal from 'vue-js-modal';
Vue.use(VModal);*/


// *** pages *** //
/*import Index from 'pages/index/Index';
import Contact from 'pages/contact/Contact';
import FourOhFour from 'pages/FourOhFour';
import Portfolio from 'pages/portfolio/Portfolio';
import DisneyDesignSystem from 'pages/portfolio/disney/DesignSystem';
import DisneyGreenlight from 'pages/portfolio/disney/Greenlight';
import DisneyInnovationProgram from 'pages/portfolio/disney/InnovationProgram';
import DisneyMovieSlate from 'pages/portfolio/disney/Slate';
import DisneyVR from 'pages/portfolio/disney/vr';
import AlexaCortana from 'pages/portfolio/amazon/AlexaCortana';
//import AlexaPersonalSkills from 'pages/portfolio/amazon/AlexaPersonalSkills';
import PhenomblueGenesis from 'pages/portfolio/phenomblue/Genesis';
import PhenomblueDinoDig from 'pages/portfolio/phenomblue/DinoDig';
import PhenomblueMovieLotto from 'pages/portfolio/phenomblue/MovieLotto';
import PhenomblueFantasticFutureMe from 'pages/portfolio/phenomblue/FantasticFutureMe';
import PhenomblueMoppetMashup from 'pages/portfolio/phenomblue/MoppetMashup';
import PhenomblueTums from 'pages/portfolio/phenomblue/Tums';
import PhenombluePage from 'pages/portfolio/phenomblue/Page';
import PhenomblueMyWildKingdom from 'pages/portfolio/phenomblue/MyWildKingdom';*/
//import AceAnalyticsDashboard from 'pages/portfolio/ace-metrix/analytics-dashboard/AnalyticsDashboard';

/*const routes = [
  { path: '/',                                            name: 'index',                    component: Index },
  { path: '/#about', name:'about', component: Index },
  { path: '/contact', name:'contact', component: Contact },

  { path: '/portfolio',                                 name:'portfolio',                     component: Portfolio },
  { path: '/portfolio/disney/design-system',            name:'disneydesignsystem',            component: DisneyDesignSystem },
  { path: '/portfolio/disney/greenlight',               name:'disneygreenlight',              component: DisneyGreenlight },
  { path: '/portfolio/disney/innovation-program',       name:'disneyinnovationprogram',       component: DisneyInnovationProgram },
  { path: '/portfolio/disney/movie-slate',              name:'disneymovieslate',              component: DisneyMovieSlate },
  { path: '/portfolio/disney/vr',                       name:'disneyvr',                      component: DisneyVR },
  { path: '/portfolio/amazon/alexa-cortana',            name:'alexacortana',                  component: AlexaCortana },
  //{ path: '/portfolio/amazon/alexa-personal-skills',    name:'alexapersonalskills',           component: AlexaPersonalSkills },
  { path: '/portfolio/phenomblue/genesis',              name:'phenombluegenesis',             component: PhenomblueGenesis },
  { path: '/portfolio/phenomblue/dino-dig',             name:'phenombluedinodig',             component: PhenomblueDinoDig },
  { path: '/portfolio/phenomblue/movie-lotto',          name:'phenombluemovielotto',          component: PhenomblueMovieLotto },
  { path: '/portfolio/phenomblue/fantastic-future-me',  name:'phenombluefantasticfutureme',   component: PhenomblueFantasticFutureMe },
  { path: '/portfolio/phenomblue/moppet-mashup',        name:'phenombluemoppetmashup',        component: PhenomblueMoppetMashup },
  { path: '/portfolio/phenomblue/my-wild-kingdom',      name:'phenombluemywildkingdom',       component: PhenomblueMyWildKingdom },
  { path: '/portfolio/phenomblue/page',                 name:'phenombluepage',                component: PhenombluePage },
  { path: '/portfolio/phenomblue/tums',                 name:'phenombluetums',                component: PhenomblueTums },
//  { path: '/portfolio/ace-analytics-dashboard',         name:'aceanalyticsdashbaord',   component: AceAnalyticsDashboard },

  { path: '/404', component: FourOhFour },
  { path: '*', redirect: '/404' }
];*/


new Vue({
  router
}).$mount('#app');
