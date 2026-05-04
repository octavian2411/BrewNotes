export interface Recipe {
  id: number;
  name: string;
  brewMethod: 'espresso' | 'pour-over' | 'french-press' | 'aeropress' | 'chemex' | 'moka' | 'cold-brew';
  origin: string;
  rating: number; // 1-5
  coffeeAmount: string;
  waterAmount: string;
  temperature: string;
  brewTime: string;
  grind: string;
  tastingNotes?: string;
  notes?: string;
  isExpanded?: boolean;
}