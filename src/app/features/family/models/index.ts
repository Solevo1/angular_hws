export interface FamilyMember {
  name: string;
  age: number;
}
export interface Family {
  id: number;
  name: string;
  father: FamilyMember;
  mother: FamilyMember;
  children: FamilyMember[];
}
