export interface Hall {
  name: string;
  address: string;
  capacity: number;
  amenities: string;
  status: 'available' | 'booked' | 'not-booked';
  rating: number;
  comments: { text: string; author: string }[];
  newComment: string;
}
