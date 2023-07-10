export interface IproductDTO {
  id?: number;
  title?: string;
  category?: string;
  description?: string;
  image?: string;
  price?: number;
  rating?: IratingDTO;
};


interface IratingDTO {
  rate?: number;
  count?: number;
}
