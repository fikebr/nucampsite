import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

export const selectFeaturedPromotion = () => PROMOTIONS.find((promotion) => promotion.featured);
