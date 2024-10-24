export interface Project {
  // id: number;
  // project: string;
  projectSeq:number;
  projectName:string;
  userSeq:number;
  updatedAt:string;
}

export interface CreateScriptDraftProps {
  onSubmit: (draft: string) => void;
}

export interface CreateScriptProps {
  defaultValue?: string;
  projectList: Project[];
  onSubmit: (data: ScriptForm) => void;
}

export interface ScriptForm {
  projectSeq: number;
  fileName: string;
  fileContent: string;
}
