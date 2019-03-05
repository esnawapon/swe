export interface SeverityLevel {
  level?: number;
  name?: string;
}

export const SERVERITY_LEVEL_1: SeverityLevel = {
  level: 1,
  name: 'Suggestion'
}

export const SERVERITY_LEVEL_2: SeverityLevel = {
  level: 2,
  name: 'Normal'
}

export const SERVERITY_LEVEL_3: SeverityLevel = {
  level: 3,
  name: 'High impact'
}

export const SERVERITY_LEVELS: SeverityLevel[] = [
  SERVERITY_LEVEL_1, SERVERITY_LEVEL_2, SERVERITY_LEVEL_3
]