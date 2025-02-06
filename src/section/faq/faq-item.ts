export type FAQItem = {
  mainID:        number;
  mainQuestion:  string;
  mainAnswer:    string;
  mainChildren?: MainChild[];
}

export type MainChild = {
  subMainId:        number;
  subMainQuestion:  string;
  subMainAnswer:    string;
  subMainChildren?: SubMainChild[];
}

export type SubMainChild = {
  childId:       number;
  childQuestion: string;
  childAnswer:   string;
}
