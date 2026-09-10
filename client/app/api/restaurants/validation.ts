import { ValidationError } from '@/lib/errors';


export type RestaurantInput = {
  name: string;
  cuisine: string | null;
  address: string | null;
  rating: number | null;
}

export function validateRestaurantBody(body: unknown): RestaurantInput {
    if (typeof body !== 'object' || body === null) {
        throw new ValidationError('Request body must be an object');
    }
    
    const { name, cuisine, address, rating } = body as Record<string, unknown>;
    
      if (typeof name !== 'string' || name.trim().length < 1) {
        throw new ValidationError(
          'Name must be a string and at least 1 character long'
        );
      }
    
      if (cuisine !== undefined && cuisine !== null && typeof cuisine !== 'string'
      ) {
        throw new ValidationError('Cuisine must be a string or null');
      }
    
      if (address !== undefined && address !== null && typeof address !== 'string'
      ) {
        throw new ValidationError('Address must be a string or null');
      }
    
      if (rating !== undefined && rating !== null && (typeof rating !== 'number' || !Number.isFinite(rating))
      ) {
        throw new ValidationError('Rating must be a number or null');
      }
    
      if (typeof rating === 'number' && (rating < 0 || rating > 5)
      ) {
        throw new ValidationError('Rating must be between 0 and 5');
      }
    
      return {
        name: name.trim(),
        cuisine: typeof cuisine === 'string' ? cuisine : null,
        address: typeof address === 'string' ? address : null,
        rating: typeof rating === 'number' ? rating : null,
      };
}

