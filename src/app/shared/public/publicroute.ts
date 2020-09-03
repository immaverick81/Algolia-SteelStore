import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { ContactusComponent } from './../contactus/contactus.component';
import { FaqComponent } from '../faq/faq.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { RouteConstant } from '../../constants/routeConstant';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

export const PUBLIC_ROUTES: Routes = [
	// { path: '', redirectTo: 'account', pathMatch: 'full' },

	{
		path: '',
		loadChildren: () => import('../../modules/home/home.module').then((m) => m.HomeModule)
	},

	{
		path: 'steel',
		loadChildren: () => import('../../modules/poducts/poducts.module').then((m) => m.PoductsModule)
	},
	{
		path: '',
		loadChildren: () => import('../../modules/other/other.module').then((m) => m.OtherModule)
	},
	{
		path: RouteConstant.aboutUs,
		component: AboutComponent
	},
	{
		path: RouteConstant.faq,
		component: FaqComponent
	},
	{
		path: RouteConstant.privacyPolicy,
		component: PrivacyComponent
	},
	{
		path: RouteConstant.contactUs,
		component: ContactusComponent
	},
	{
		path: RouteConstant.forgotPpassword,
		component: ForgotPasswordComponent
	},
	{
		path: '',
		loadChildren: () => import('../../modules/other/other.module').then((m) => m.OtherModule)
	}
];
