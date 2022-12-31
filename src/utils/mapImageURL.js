import { baseUrl } from '../app/shared/baseUrl';

export const mapImageURL = (arr) =>
        arr.map((item) => ({
                ...item,
                image: baseUrl + item.image,
        }));
