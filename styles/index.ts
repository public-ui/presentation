import { TH } from '@public-oss/kolibri-themes';
import { register } from '@public-ui/components';
import { BMF, BZSt, DEFAULT, DESYv2, ECL_EC, ECL_EU, ITZBund, MAPZ, ZOLLv2, ZOLLv3 } from '@public-ui/themes';
import './base.css';

register([BMF, BZSt, DEFAULT, ECL_EC, ECL_EU, ITZBund, TH, MAPZ, ZOLLv2, ZOLLv3], [], {
	theme: {
		detect: 'auto',
	},
})
	.then(() => {
		document.body.dataset.theme = 'default';
	})
	.catch(() => console.warn);
