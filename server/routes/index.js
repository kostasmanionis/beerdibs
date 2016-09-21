import express from 'express';
import user from './user';
import beerTaps from './beerTaps';
import beerKegs from './beerKegs';
import beerBrands from './beerBrands';

import arduino from './arduino';

const router = express.Router(); // eslint-disable-line new-cap

router.use('/api', [
    user,
    router.use('/beer', [beerTaps, beerKegs, beerBrands])
]);

router.use('/arduino', arduino);

export default router;
