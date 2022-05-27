export interface Speaker {
  name: string;
  company: string;
  email: string;
  bio: string;
}

export default interface ICreatePresentationDTO {
  presentation: string;
  details: string;
  room: number;
  speaker: Speaker;
}
