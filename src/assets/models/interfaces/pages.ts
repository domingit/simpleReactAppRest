export interface Dog extends Bread {
    image: Image;
}

export type DogType = Dog;
export type DogDetailType = DogDetail;

interface Bread {
    weight: ImgMetric;
    height: ImgMetric;
    id: number;
    name: string;
    bred_for: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    origin: string;
    reference_image_id: string;
    country_code?: string;
}

interface ImgMetric {
    imperial: string;
    metric: string;
}

interface Image {
    id: string;
    width: number;
    height: number;
    url: string;
}

export interface DogDetail {
    id: string;
    url: string;
    breeds: Bread[];
    width: number;
    height: number;
}